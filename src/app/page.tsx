import Link from "next/link";

import { appConfig } from "@/lib/config";
import { mockBriefings } from "@/lib/mock-data";
import { pilotPeople } from "@/lib/people/seed";

const capabilities = [
  "Daily agenda at 08:30",
  "Midday agenda at 12:45",
  "Weekly wrap-up on Thursday 15:00",
  "1:1 prep for direct reports",
  "Priority scoring based on Martin's leadership order",
  "Slack DM delivery to @Martin",
];

const nextMilestones = [
  "Connect Slack retrieval and normalization",
  "Add Postgres persistence for messages and briefings",
  "Implement classification and ranking pipeline",
  "Generate briefing content from live Slack signal",
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-10">
      <section className="rounded-3xl border border-white/10 bg-panel/80 p-8 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-accent">
              MVP scaffold
            </p>
            <h1 className="text-4xl font-semibold text-white">
              {appConfig.name}
            </h1>
            <p className="mt-3 max-w-3xl text-base text-slate-300">
              Slack-first leadership assistant for Martin. This scaffold is ready
              for Railway deployment once the runtime and package installation are
              available.
            </p>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-slate-200">
            <div>Primary delivery: {appConfig.primaryDelivery}</div>
            <div>Hosting: {appConfig.hosting}</div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-surface/70 p-4 text-sm text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-panel/80 p-8">
          <h2 className="text-2xl font-semibold text-white">Mock briefing view</h2>
          <p className="mt-2 text-sm text-muted">
            Placeholder content showing how the briefing layer will be structured.
          </p>

          <div className="mt-6 space-y-4">
            {mockBriefings.map((briefing) => (
              <article
                key={`${briefing.type}-${briefing.scheduledFor}`}
                className="rounded-2xl border border-white/10 bg-surface/70 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-medium text-white">
                    {briefing.title}
                  </h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    {briefing.scheduledFor}
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {briefing.priorities.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-white/10 bg-panel px-4 py-3"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium text-white">
                          {item.title}
                        </span>
                        <span className="rounded-full bg-white/5 px-2 py-1 text-[11px] uppercase tracking-wide text-muted">
                          {item.category.replaceAll("_", " ")}
                        </span>
                        <span className="rounded-full bg-white/5 px-2 py-1 text-[11px] uppercase tracking-wide text-muted">
                          {item.actionType.replaceAll("_", " ")}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-300">{item.summary}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <section className="rounded-3xl border border-white/10 bg-panel/80 p-6">
            <h2 className="text-xl font-semibold text-white">Next milestones</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {nextMilestones.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-surface/70 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-panel/80 p-6">
            <h2 className="text-xl font-semibold text-white">Pilot people</h2>
            <div className="mt-4 space-y-3">
              {pilotPeople.map((person) => (
                <div
                  key={person.id}
                  className="rounded-xl border border-white/10 bg-surface/70 p-3 text-sm text-slate-300"
                >
                  <div className="font-medium text-white">{person.name}</div>
                  <div>{person.role}</div>
                  <div className="mt-1 text-muted">{person.group}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-panel/80 p-6">
            <h2 className="text-xl font-semibold text-white">Project docs</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
              <Link href="/api/health" className="rounded-xl border border-white/10 bg-surface/70 p-3">
                API health endpoint
              </Link>
              <div className="rounded-xl border border-white/10 bg-surface/70 p-3">
                `docs/mvp-spec-v1.md`
              </div>
              <div className="rounded-xl border border-white/10 bg-surface/70 p-3">
                `docs/architecture-v1.md`
              </div>
              <div className="rounded-xl border border-white/10 bg-surface/70 p-3">
                `docs/output-templates-v1.md`
              </div>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
