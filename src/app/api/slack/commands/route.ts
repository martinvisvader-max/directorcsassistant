import { NextRequest, NextResponse } from "next/server";

import { runBriefingPipeline } from "@/lib/briefings/pipeline";
import { env } from "@/lib/config";
import {
  formatSlackBriefingMessage,
  parseSlackCommand,
} from "@/lib/slack/commands";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const userId = String(formData.get("user_id") ?? "");
  const text = String(formData.get("text") ?? "");
  const command = String(formData.get("command") ?? "");

  if (env.SLACK_ALLOWED_COMMAND_USER_ID && userId !== env.SLACK_ALLOWED_COMMAND_USER_ID) {
    return NextResponse.json({
      response_type: "ephemeral",
      text: "This command is currently restricted.",
    });
  }

  if (command && command !== env.SLACK_COMMAND_NAME) {
    return NextResponse.json({
      response_type: "ephemeral",
      text: `Unexpected command. Expected ${env.SLACK_COMMAND_NAME}.`,
    });
  }

  const parsed = parseSlackCommand(text);
  const result = await runBriefingPipeline(parsed.type);
  const lines = result.briefing.priorities.map(
    (item) => `${item.title}: ${item.summary}`,
  );

  return NextResponse.json({
    response_type: "ephemeral",
    text: formatSlackBriefingMessage(
      parsed.person
        ? `${result.briefing.title} for ${parsed.person}`
        : result.briefing.title,
      result.briefing.summary,
      lines.length > 0 ? lines : ["No priority items found."],
    ),
  });
}
