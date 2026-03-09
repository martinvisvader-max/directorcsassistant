import { repository } from "@/lib/db/repository";
import { slackClient } from "@/lib/slack/client";
import type { SlackMessageRecord } from "@/lib/types";

export interface IngestResult {
  ingestedCount: number;
  messages: SlackMessageRecord[];
}

export async function ingestSlackMessages(): Promise<IngestResult> {
  const messages = await slackClient.fetchMessages({ limit: 200 });

  if (messages.length > 0) {
    await repository.saveMessages(messages);
  }

  return {
    ingestedCount: messages.length,
    messages,
  };
}
