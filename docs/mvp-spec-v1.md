# MVP Spec V1

## Product summary

`Director CS Assistant` is a Slack-first assistant that turns noisy communication into a small number of clear leadership outputs for Martin.

It should not behave like a generic summarizer. It should behave like a focused operating layer that answers:

- what matters now
- what needs Martin's intervention
- what should be delegated
- what belongs in a 1:1
- what is worth amplifying as a win

## MVP outputs

The assistant should support both:

- `scheduled push`
- `manual on-demand push`

### 1. Daily agenda

Delivery time: `08:30`

Purpose:

- give Martin the top priorities for the day
- highlight risks and follow-ups before the day accelerates
- suggest immediate actions

Template:

1. `Top 5 priorities today`
2. `Critical risks and escalations`
3. `Important follow-ups`
4. `Wins worth amplifying`
5. `Suggested actions`

### 2. Midday agenda

Delivery time: `12:45`

Purpose:

- re-rank the day based on new Slack signal
- identify what still needs to move today
- reduce missed follow-ups

Template:

1. `What still matters today`
2. `Items to push or unblock`
3. `Delegations to make`
4. `Open loops to close before EOD`

### 3. Weekly wrap-up

Delivery time: `Thursday 15:00`

Purpose:

- provide a leadership-level summary of the week
- separate wins from risks
- show unresolved items and needed interventions

Template:

1. `Top wins`
2. `Top risks`
3. `Open loops`
4. `People topics`
5. `Commercial and product signal`
6. `Leadership actions for next week`

### 4. 1:1 prep

Delivery time: defined per person later

Purpose:

- prepare Martin for high-quality 1:1s with his direct reports
- focus on performance, priorities, blockers, and leadership coaching

Per-person template:

1. `Wins`
2. `Top 3-5 priorities for the upcoming week`
3. `Challenges where Martin's support may be needed`
4. `Any other business`
5. `Martin's feedback and coaching angles`
6. `Questions Martin should ask`
7. `Suggested follow-ups after the 1:1`

### 5. Thread brief

Purpose:

- let Martin provide a Slack thread plus document context on demand
- produce a clean summary of what matters
- identify risks, open questions, and ideal next steps
- suggest a concise reply or leadership steer

Expected output:

1. `Summary`
2. `What the assistant sees`
3. `Recommended next steps`
4. `Suggested Martin reply`

## Manual trigger V1

Martin should be able to request an outcome on demand from Slack.

Preferred interaction:

- slash command: `/director`

Supported examples:

- `/director daily`
- `/director midday`
- `/director weekly`
- `/director 1on1 matej`
- `/director outcome`

Expected behavior:

- assistant acknowledges request immediately
- assistant runs the relevant pipeline
- assistant returns the latest generated briefing in Slack
- manual request should not wait for the normal schedule

## Signal sources

MVP signal sources:

- DMs where Martin is a participant
- channels where Martin is a participant
- public channels for broader context

Design note:

- public channels should primarily improve context and signal detection
- direct action items should be weighted most heavily from DMs, mentions, threads, and channels Martin actively participates in

## Priority model V1

The assistant should score and rank items using this default order:

1. `customer escalation`
2. `renewal risk`
3. `ask from Simon Farthing`
4. `exec ask`
5. `people issue`
6. `strategic project`
7. `process gap`

Secondary ranking modifiers:

- explicit ask for Martin
- time sensitivity
- account value or strategic importance
- repeated mentions across channels
- unresolved follow-up
- sentiment deterioration
- direct report dependency

## Working definitions

### Customer escalation

Any customer situation where business outcome, relationship health, or internal confidence is at risk and leadership intervention is likely needed to unblock or stabilize the situation.

Examples:

- revenue or renewal risk with customer tension
- repeated delivery or product deadlock
- strategic account trust issue
- detractor or negative trend requiring visible action
- executive customer involvement

### Renewal risk

Signals that the current or upcoming renewal can be negatively impacted by adoption issues, unresolved blockers, weak stakeholder support, sentiment decline, or implementation problems.

### Ask from Simon Farthing

Any direct request, follow-up, dependency, expected update, or proactive item Martin should raise or close with Simon should be treated as a high-priority leadership item.

### Exec ask

Requests or dependencies from senior leadership outside Simon that require Martin's response, decision, preparation, or communication.

### People issue

Any signal tied to team health, manager effectiveness, capability gaps, interpersonal friction, resourcing risk, or performance concern.

### Strategic project

A high-value initiative that matters beyond day-to-day execution, such as product influence, positioning of strategic features, enablement, benchmarking, or cross-functional GTM work.

### Process gap

A recurring inefficiency, missing handoff, unclear ownership, or repeated operational friction that lowers team execution quality.

## Suggested actions V1

For each important item, the assistant should try to suggest one of these action types:

- `reply now`
- `delegate`
- `book time`
- `escalate`
- `follow up later today`
- `capture for 1:1`
- `watch only`

The assistant should also be able to draft a short Slack message in Martin's tone when confidence is high.

## Tone of voice V1

Observed tone from Martin's Slack messages:

- direct and concise
- structured asks
- action-oriented
- data-driven
- low fluff
- clear ownership
- supportive when useful, but not overly soft

Output style target:

- short executive summaries first
- concrete asks and next steps
- avoid generic AI phrasing
- prefer specifics over abstract summaries

## Success criteria for MVP

- Martin can review the daily agenda in under `5 minutes`
- important follow-ups are less likely to be missed
- 1:1 prep saves prep time and improves quality of discussion
- weekly wrap-up separates noise from true leadership signal
- suggested actions feel relevant rather than generic

## Explicitly out of scope for V1

- perfect tone cloning
- full skills matrix engine
- automated writing back into Slack without review
- formal performance assessment
- deep historical analytics across every past channel immediately
