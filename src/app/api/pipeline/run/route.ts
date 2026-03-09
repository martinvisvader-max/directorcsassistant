import { NextRequest, NextResponse } from "next/server";

import { runBriefingPipeline } from "@/lib/briefings/pipeline";
import { env } from "@/lib/config";
import type { BriefingType } from "@/lib/types";

const allowedTypes: BriefingType[] = ["daily", "midday", "weekly", "one-on-one"];

export async function POST(request: NextRequest) {
  const triggerToken = request.headers.get("x-trigger-token");

  if (env.PIPELINE_TRIGGER_TOKEN && triggerToken !== env.PIPELINE_TRIGGER_TOKEN) {
    return NextResponse.json(
      {
        ok: false,
        error: "Unauthorized pipeline trigger.",
      },
      { status: 401 },
    );
  }

  const body = (await request.json().catch(() => ({}))) as {
    type?: BriefingType;
  };

  const type = body.type ?? "daily";

  if (!allowedTypes.includes(type)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Invalid briefing type.",
      },
      { status: 400 },
    );
  }

  const result = await runBriefingPipeline(type);

  return NextResponse.json({
    ok: true,
    ...result,
  });
}
