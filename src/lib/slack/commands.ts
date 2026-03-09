import type { BriefingType } from "@/lib/types";

export interface ParsedSlackCommand {
  type: BriefingType;
  person?: string;
}

export function parseSlackCommand(text: string): ParsedSlackCommand {
  const normalized = text.trim().toLowerCase();
  const parts = normalized.split(/\s+/).filter(Boolean);
  const first = parts[0] ?? "daily";

  if (first === "midday" || first === "noon") {
    return { type: "midday" };
  }

  if (first === "weekly" || first === "week") {
    return { type: "weekly" };
  }

  if (first === "1on1" || first === "1:1" || first === "one-on-one") {
    return { type: "one-on-one", person: parts.slice(1).join(" ") || undefined };
  }

  if (first === "outcome") {
    return { type: "daily" };
  }

  return { type: "daily" };
}

export function formatSlackBriefingMessage(
  title: string,
  summary: string | undefined,
  lines: string[],
) {
  const body = lines.map((line) => `- ${line}`).join("\n");

  return `*${title}*\n${summary ?? "Generated on demand."}\n\n${body}`;
}
