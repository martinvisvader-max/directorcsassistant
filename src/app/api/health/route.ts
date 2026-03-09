import { NextResponse } from "next/server";

import { appConfig, env } from "@/lib/config";

export async function GET() {
  return NextResponse.json({
    ok: true,
    app: appConfig.name,
    environment: env.NODE_ENV,
    hosting: appConfig.hosting,
    timestamp: new Date().toISOString(),
  });
}
