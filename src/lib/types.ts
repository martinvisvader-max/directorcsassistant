export type BriefingType =
  | "daily"
  | "midday"
  | "weekly"
  | "one-on-one";

export type PriorityCategory =
  | "customer_escalation"
  | "renewal_risk"
  | "simon_ask"
  | "exec_ask"
  | "people_issue"
  | "strategic_project"
  | "process_gap";

export type ActionType =
  | "reply_now"
  | "delegate"
  | "book_time"
  | "escalate"
  | "follow_up_today"
  | "capture_for_1_1"
  | "watch_only";

export interface PriorityItem {
  title: string;
  summary: string;
  category: PriorityCategory;
  actionType: ActionType;
  confidence: "high" | "medium" | "low";
  sourceMessageIds?: string[];
  owner?: string;
}

export interface Briefing {
  id?: string;
  type: BriefingType;
  title: string;
  scheduledFor: string;
  priorities: PriorityItem[];
  summary?: string;
  generatedAt?: string;
}

export type SlackSourceType = "dm" | "channel" | "public_channel";

export interface SlackMessageRecord {
  id: string;
  sourceId: string;
  sourceType: SlackSourceType;
  channelId: string;
  channelName: string;
  authorId: string;
  authorName: string;
  text: string;
  ts: string;
  threadTs?: string;
  mentionsMartin: boolean;
  participants?: string[];
}

export interface ClassifiedItem {
  id: string;
  messageId: string;
  category: PriorityCategory;
  score: number;
  confidence: "high" | "medium" | "low";
  reasoningSummary: string;
  actionType: ActionType;
  owner?: string;
  status: "open" | "watching" | "closed";
}

export interface PersonProfile {
  id: string;
  name: string;
  role: string;
  group: "BCs" | "CSMs" | "TCs" | "Other";
  managerRelationship: "direct-report" | "stakeholder" | "other";
  coachingNeeds?: string;
  coachingFocus?: string;
  oneOnOneSchedule?: string;
}
