import { repository } from "@/lib/db/repository";
import { classifyMessages } from "@/lib/briefings/classifier";
import { generateBriefing } from "@/lib/briefings/generator";
import { ingestSlackMessages } from "@/lib/slack/ingest";
import type { BriefingType } from "@/lib/types";

export async function runBriefingPipeline(type: BriefingType) {
  const ingestion = await ingestSlackMessages();
  const classifiedItems = classifyMessages(ingestion.messages);

  if (classifiedItems.length > 0) {
    await repository.saveClassifiedItems(classifiedItems);
  }

  const briefing = await generateBriefing(type);

  return {
    ingestion,
    classifiedCount: classifiedItems.length,
    briefing,
  };
}
