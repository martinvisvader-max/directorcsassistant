import type { Briefing } from "@/lib/types";

export const mockBriefings: Briefing[] = [
  {
    type: "daily",
    title: "Daily agenda",
    scheduledFor: "08:30",
    priorities: [
      {
        title: "Review customer escalation cluster",
        summary:
          "Check high-signal threads and unresolved blockers before leadership syncs start.",
        category: "customer_escalation",
        actionType: "reply_now",
        confidence: "high",
      },
      {
        title: "Check renewal risk changes",
        summary:
          "Surface accounts with negative sentiment or delivery slippage that can impact renewal motion.",
        category: "renewal_risk",
        actionType: "follow_up_today",
        confidence: "medium",
      },
      {
        title: "Prepare Simon-facing updates",
        summary:
          "Collect direct asks plus proactive updates worth raising early rather than waiting for a prompt.",
        category: "simon_ask",
        actionType: "book_time",
        confidence: "medium",
      },
    ],
  },
  {
    type: "weekly",
    title: "Weekly wrap-up",
    scheduledFor: "Thursday 15:00",
    priorities: [
      {
        title: "Summarize wins across POW",
        summary:
          "Capture business impact, team execution, and customer stories worth amplifying upward.",
        category: "strategic_project",
        actionType: "watch_only",
        confidence: "high",
      },
    ],
  },
];
