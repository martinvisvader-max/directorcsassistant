import { repository } from "@/lib/db/repository";
import type { Briefing, BriefingType, ClassifiedItem, PriorityItem } from "@/lib/types";

function formatTitle(type: BriefingType) {
  switch (type) {
    case "daily":
      return "Daily agenda";
    case "midday":
      return "Midday agenda";
    case "weekly":
      return "Weekly wrap-up";
    case "one-on-one":
      return "1:1 prep";
  }
}

function scheduledFor(type: BriefingType) {
  switch (type) {
    case "daily":
      return "08:30";
    case "midday":
      return "12:45";
    case "weekly":
      return "Thursday 15:00";
    case "one-on-one":
      return "Per person";
  }
}

function toPriorityItem(item: ClassifiedItem): PriorityItem {
  return {
    title: item.category.replaceAll("_", " "),
    summary: item.reasoningSummary,
    category: item.category,
    actionType: item.actionType,
    confidence: item.confidence,
    sourceMessageIds: [item.messageId],
    owner: item.owner,
  };
}

export async function generateBriefing(type: BriefingType): Promise<Briefing> {
  const items = await repository.listOpenClassifiedItems();
  const priorities = items
    .sort((a, b) => b.score - a.score)
    .slice(0, type === "weekly" ? 8 : 5)
    .map(toPriorityItem);

  const briefing: Briefing = {
    id: `${type}-${new Date().toISOString()}`,
    type,
    title: formatTitle(type),
    scheduledFor: scheduledFor(type),
    summary: `Generated from ${items.length} classified Slack items.`,
    priorities,
    generatedAt: new Date().toISOString(),
  };

  await repository.saveBriefing(briefing);

  return briefing;
}
