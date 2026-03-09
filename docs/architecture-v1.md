# Architecture V1

## Recommended build shape

Build the product as a `Slack-first assistant` with a lightweight private dashboard.

Core components:

1. `Slack ingestion layer`
2. `Normalization and storage layer`
3. `Classification and prioritization layer`
4. `Briefing generation layer`
5. `Delivery layer`
6. `Private dashboard`

## Recommended MVP stack

### Option A: recommended MVP

- frontend/dashboard: `Next.js`
- backend API: `Next.js API routes` or lightweight server functions
- database: `Postgres`
- scheduler: `cron jobs`
- hosting: `Railway`

Why this option:

- fast to ship
- simple deployment model
- easy to add scheduled jobs
- good enough for private internal MVP

### Option B: stronger production path

- frontend/dashboard: `Next.js`
- backend API: `Node.js`
- database: `Postgres`
- scheduler: `Cloud Scheduler` + worker
- hosting: `GCP Cloud Run`

Why this option:

- more enterprise-friendly
- cleaner scaling path
- easier long-term separation of services

## System flow

### 1. Ingest

Collect signal from Slack:

- DMs involving Martin
- channels involving Martin
- public channels used for broader contextual retrieval

Captured fields:

- channel or DM id
- participants
- message timestamp
- author
- text
- thread metadata
- reactions
- links

### 2. Normalize

Store normalized records and derived metadata:

- source type
- relationship to Martin
- whether Martin is asked directly
- whether item references customer, product, person, renewal, escalation, or leadership

### 3. Classify

For each candidate item, classify into:

- `win`
- `risk`
- `follow-up`
- `customer escalation`
- `renewal risk`
- `ask from Simon Farthing`
- `exec ask`
- `people issue`
- `strategic project`
- `process gap`
- `1:1 topic`

### 4. Rank

Rank using:

- default priority order
- urgency
- recency
- direct mention or ask
- customer/account importance
- repeated references
- unresolved state

### 5. Generate briefings

Generate four briefing types:

- `daily agenda`
- `midday agenda`
- `weekly wrap-up`
- `1:1 prep`

### 6. Deliver

Primary delivery:

- Slack DM to `@Martin`

Secondary delivery:

- dashboard page with archived briefings and ability to inspect source items

Manual trigger path:

- Slack slash command or DM command
- internal command route parses requested briefing type
- pipeline runs immediately
- response is returned to Slack and stored in briefing history

## Data model V1

Suggested core tables:

### `messages`

- `id`
- `source_id`
- `source_type`
- `channel_id`
- `channel_name`
- `author_id`
- `author_name`
- `text`
- `ts`
- `thread_ts`
- `is_dm`
- `is_public_channel`
- `mentions_martin`

### `entities`

- `id`
- `message_id`
- `entity_type`
- `entity_value`

Examples:

- customer name
- person
- product area
- leadership stakeholder

### `classified_items`

- `id`
- `message_id`
- `category`
- `score`
- `confidence`
- `reasoning_summary`
- `action_type`
- `owner`
- `status`

### `briefings`

- `id`
- `briefing_type`
- `generated_at`
- `scheduled_for`
- `content_markdown`

### `people_profiles`

- `id`
- `person_name`
- `role`
- `manager_relationship`
- `coaching_notes`
- `one_on_one_schedule`

## Privacy and safety guardrails

MVP should include:

- internal-only access
- explicit logging of what source messages informed a briefing
- no auto-send on Martin's behalf without review
- clear distinction between `observed signal` and `AI inference`

## Dashboard V1

Minimal dashboard pages:

1. `Today`
   - latest daily and midday briefing
2. `Weekly`
   - latest weekly wrap-up
3. `People`
   - 1:1 prep pages for direct reports
4. `Source items`
   - inspect high-priority evidence behind each briefing

## Delivery format recommendation

Slack DM should stay concise:

- summary first
- then top items
- then suggested actions

Dashboard can hold:

- full context
- evidence list
- historical archive

## Manual trigger recommendation

Preferred V1 implementation:

- slash command `/director`

Fallback:

- DM to the app with simple commands such as `daily`, `weekly`, or `1on1 matej`

Recommended V1 command set:

- `/director daily`
- `/director midday`
- `/director weekly`
- `/director 1on1 <name>`
- `/director outcome`

## Build sequence

1. `Spec and taxonomy`
2. `Slack retrieval and storage`
3. `Classification and ranking`
4. `Slack DM briefing generation`
5. `Dashboard`
6. `1:1 memory and skills matrix`

## Recommendation

For MVP, choose:

- `Slack-first`
- `Railway`
- `Next.js`
- `Postgres`

This gets value into Martin's hands fastest while keeping a clean path to a more robust setup later.

Current decision:

- MVP hosting confirmed as `Railway`
