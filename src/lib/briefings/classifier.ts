import { appConfig } from "@/lib/config";
import type {
  ActionType,
  ClassifiedItem,
  PriorityCategory,
  SlackMessageRecord,
} from "@/lib/types";

function inferCategory(message: SlackMessageRecord): PriorityCategory {
  const text = message.text.toLowerCase();

  if (text.includes("escalat") || text.includes("detractor")) {
    return "customer_escalation";
  }

  if (text.includes("renewal") || text.includes("risk")) {
    return "renewal_risk";
  }

  if (text.includes("simon")) {
    return "simon_ask";
  }

  if (text.includes("exec") || text.includes("leadership")) {
    return "exec_ask";
  }

  if (text.includes("hiring") || text.includes("performance") || text.includes("team")) {
    return "people_issue";
  }

  if (text.includes("benchmark") || text.includes("roadmap") || text.includes("strategy")) {
    return "strategic_project";
  }

  return "process_gap";
}

function inferActionType(category: PriorityCategory): ActionType {
  switch (category) {
    case "customer_escalation":
      return "reply_now";
    case "renewal_risk":
      return "follow_up_today";
    case "simon_ask":
      return "book_time";
    case "exec_ask":
      return "reply_now";
    case "people_issue":
      return "capture_for_1_1";
    case "strategic_project":
      return "delegate";
    case "process_gap":
      return "watch_only";
  }
}

function categoryBaseScore(category: PriorityCategory): number {
  const idx = appConfig.priorities.indexOf(category);

  return idx === -1 ? 0 : appConfig.priorities.length - idx;
}

export function classifyMessages(messages: SlackMessageRecord[]): ClassifiedItem[] {
  return messages
    .filter((message) => message.text.trim().length > 0)
    .map((message) => {
      const category = inferCategory(message);
      const score =
        categoryBaseScore(category) +
        (message.mentionsMartin ? 1.5 : 0) +
        (message.threadTs ? 0.5 : 0);

      return {
        id: `classified-${message.id}`,
        messageId: message.id,
        category,
        score,
        confidence: score >= 7 ? "high" : score >= 4 ? "medium" : "low",
        reasoningSummary: `Classified from Slack signal using category ${category}.`,
        actionType: inferActionType(category),
        owner: message.mentionsMartin ? "Martin" : undefined,
        status: "open",
      } satisfies ClassifiedItem;
    });
}
