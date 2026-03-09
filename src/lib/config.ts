import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  APP_URL: z.string().default("http://localhost:3000"),
  SLACK_BOT_TOKEN: z.string().optional(),
  SLACK_APP_TOKEN: z.string().optional(),
  SLACK_SIGNING_SECRET: z.string().optional(),
  SLACK_MARTIN_USER_ID: z.string().default("U01M6J1TJA3"),
  SLACK_COMMAND_NAME: z.string().default("/director"),
  SLACK_ALLOWED_COMMAND_USER_ID: z.string().default("U01M6J1TJA3"),
  DATABASE_URL: z.string().optional(),
  PIPELINE_TRIGGER_TOKEN: z.string().optional(),
});

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  APP_URL: process.env.APP_URL,
  SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN,
  SLACK_APP_TOKEN: process.env.SLACK_APP_TOKEN,
  SLACK_SIGNING_SECRET: process.env.SLACK_SIGNING_SECRET,
  SLACK_MARTIN_USER_ID: process.env.SLACK_MARTIN_USER_ID,
  SLACK_COMMAND_NAME: process.env.SLACK_COMMAND_NAME,
  SLACK_ALLOWED_COMMAND_USER_ID: process.env.SLACK_ALLOWED_COMMAND_USER_ID,
  DATABASE_URL: process.env.DATABASE_URL,
  PIPELINE_TRIGGER_TOKEN: process.env.PIPELINE_TRIGGER_TOKEN,
});

export const appConfig = {
  name: "Director CS Assistant",
  owner: "Martin",
  primaryDelivery: "Slack DM",
  hosting: "Railway",
  priorities: [
    "customer_escalation",
    "renewal_risk",
    "simon_ask",
    "exec_ask",
    "people_issue",
    "strategic_project",
    "process_gap",
  ] as const,
};
