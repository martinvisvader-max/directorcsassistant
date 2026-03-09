# Director CS Assistant

Slack-first leadership assistant for Martin as Director CS.

## Goal

Build a system that reads Slack signal, identifies what matters, and delivers:

- `daily agenda` at `08:30`
- `midday agenda` at `12:45`
- `weekly wrap-up` on `Thursday 15:00`
- `1:1 prep` for direct reports

Primary delivery channel:

- `Slack DM` to `@Martin`

Secondary delivery channel:

- private web dashboard with briefing history

## Current scope

The assistant is intended to learn from:

- DMs where Martin is a participant
- channels where Martin is a participant
- public channels for broader context and signal detection

Priority order currently defined as:

1. `customer escalation`
2. `renewal risk`
3. `ask from Simon Farthing`
4. `exec ask`
5. `people issue`
6. `strategic project`
7. `process gap`

## Pilot people

- `Matej Cambal` -> BCs
- `Andrea Svatikova` -> CSMs
- `Anastasia Kutasova` -> TCs

## Documents

- `docs/mvp-spec-v1.md`
- `docs/architecture-v1.md`
- `docs/input-status.md`
- `docs/roadmap-v1.md`
- `docs/output-templates-v1.md`

## GitHub Pages demo

A static demo dashboard is available directly from the `docs/` folder:

- `docs/index.html`
- `docs/styles.css`
- `docs/app.js`

This version is designed for `GitHub Pages` and does not require backend hosting.

It includes:

- `Today`
- `Weekly`
- `1:1 Prep`
- `Manual Generate`
- `Thread Brief`

To enable it on GitHub:

1. open repository `Settings`
2. open `Pages`
3. set `Build and deployment` source to `Deploy from a branch`
4. choose branch `main`
5. choose folder `/docs`
6. save

Your demo should then appear at:

- `https://<github-username>.github.io/<repo-name>/`

## App scaffold

The repository now includes a `Next.js` scaffold prepared for `Railway`:

- `src/app` for the web app and API routes
- `src/lib` for config, types, and briefing logic
- `src/lib/db/schema.sql` for the first Postgres schema
- `src/lib/slack` for ingestion skeleton
- `src/lib/briefings` for classification and briefing pipeline
- `.env.example` for runtime variables
- `package.json` prepared for `Next.js`, `TypeScript`, `Tailwind`, and `zod`

## Local setup

This machine currently does not have `node` or `npm` available in `PATH`, so dependencies could not be installed yet.

Once Node is available, run:

1. `cp .env.example .env.local`
2. `npm install`
3. `npm run dev`

Health endpoint:

- `GET /api/health`

Additional internal endpoints:

- `GET /api/briefings`
- `POST /api/pipeline/run`
- `POST /api/slack/commands`

## Manual trigger

Planned V1 manual trigger from Slack:

- slash command: `/director`

Examples:

1. `/director daily`
2. `/director midday`
3. `/director weekly`
4. `/director 1on1 matej`
5. `/director outcome`

Current scaffold:

- `src/app/api/slack/commands/route.ts`
- `src/lib/slack/commands.ts`

Slack app configuration still needed:

- slash command pointing to `/api/slack/commands`
- bot token
- signing secret

## Working approach

We will build this iteratively:

1. define `MVP V1`
2. validate output quality on real Slack signal
3. automate delivery
4. add memory, personalization, and skills matrix
