import { NextResponse } from "next/server";

import { repository } from "@/lib/db/repository";

export async function GET() {
  const briefings = await repository.listBriefings();

  return NextResponse.json({
    ok: true,
    count: briefings.length,
    briefings,
  });
}
