import { env } from "@/lib/config";
import type { SlackMessageRecord } from "@/lib/types";

export interface FetchSlackMessagesParams {
  oldest?: string;
  latest?: string;
  limit?: number;
}

export class SlackClient {
  isConfigured() {
    return Boolean(env.SLACK_BOT_TOKEN);
  }

  async fetchMessages(
    params: FetchSlackMessagesParams = {},
  ): Promise<SlackMessageRecord[]> {
    void params;

    // Placeholder until the runtime and Slack SDK are wired in.
    return [];
  }
}

export const slackClient = new SlackClient();
