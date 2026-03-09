const state = {
  activeView: "today",
  selectedPerson: "matej",
};

const people = {
  matej: {
    name: "Matej Cambal",
    wins: [
      "BC enablement sessions are lined up and visible to the wider POW team.",
      "Strong early signal gathering on strategic features and customer fit.",
    ],
    priorities: [
      "Turn feature feedback into a usable adoption and upsell recommendation.",
      "Close the loop on BC input for translation and AI-related opportunities.",
      "Keep BC coverage aligned to the most strategic expansion motions.",
    ],
    challenges: [
      "Needs sharper evidence on what truly converts vs what creates noise.",
      "Could use leadership backing when turning BC signal into cross-functional action.",
    ],
    business: [
      "Follow-up on the strongest customer stories for benchmarking and compound value.",
    ],
    feedback: [
      "Push for clearer prioritization between interesting signal and commercial signal.",
      "Ask for more explicit owner and deadline on BC asks that matter upward.",
    ],
    questions: [
      "Which BC-led insights are strongest enough to influence Product or Simon-level conversations?",
      "Where do you need me to unblock cross-functional follow-through?",
    ],
    followups: [
      "Request a shortlist of top feature opportunities with confidence and effort.",
    ],
  },
  andrea: {
    name: "Andrea Svatikova",
    wins: [
      "CSM enablement cadence is visible and well organized.",
      "Team messaging and readiness support appear structured and scalable.",
    ],
    priorities: [
      "Make sure detractor and neutral NPS follow-ups are real, not only announced.",
      "Keep CSM messaging aligned on AI, Loomi, and adoption positioning.",
      "Surface the highest-risk customer sentiment items early.",
    ],
    challenges: [
      "Needs a tighter loop between team activity and actual customer risk reduction.",
      "Could use help escalating recurring adoption blockers sooner.",
    ],
    business: [
      "Confirm where the team needs stronger support on strategic messaging.",
    ],
    feedback: [
      "Drive one layer deeper from activity to impact: what changed for the customer?",
      "Push for earlier risk flagging on sentiment and adoption slippage.",
    ],
    questions: [
      "Which detractors or neutrals are truly under control and which are still at risk?",
      "What do you need from me to increase follow-through quality?",
    ],
    followups: [
      "Review top at-risk accounts and agree specific owner-based next steps.",
    ],
  },
  anastasia: {
    name: "Anastasia Kutasova",
    wins: [
      "Delivery and TC support remain visible in cross-functional requests.",
      "The team is in the flow of strategic and technical support conversations.",
    ],
    priorities: [
      "Make delivery and TC blockers visible earlier in high-risk customer motions.",
      "Provide realistic input on POC scope, implementation effort, and technical risk.",
      "Support high-priority asks where technical feasibility needs leadership clarity.",
    ],
    challenges: [
      "Needs sharper escalation paths when requests drift into disguised implementation work.",
      "Could use support in separating 'possible' from 'worth doing now'.",
    ],
    business: [
      "Reconfirm where TC leadership input should be built into strategic asks sooner.",
    ],
    feedback: [
      "Push for earlier intervention on delivery deadlocks before they become escalation-level.",
      "Keep technical effort visible when commercial asks start expanding in scope.",
    ],
    questions: [
      "Which current asks are technically feasible but operationally risky?",
      "Where do you need my cover to push back on scope or timing?",
    ],
    followups: [
      "Create a short watchlist of delivery-heavy asks that may need leadership attention.",
    ],
  },
};

const todayData = {
  priorities: [
    {
      title: "APAC POC needs tighter guardrails",
      summary:
        "The POC request discussed with Anna and Simon looks too broad and risks drifting into free implementation without clean success criteria.",
      category: "Ask from Simon Farthing",
      action: "Reply now",
      confidence: "High",
    },
    {
      title: "Rohlik MCP messaging needs to stay disciplined",
      summary:
        "Customer interest is strong, but the wording needs to stay discovery-led and avoid overcommitting on current readiness.",
      category: "Customer escalation",
      action: "Follow up today",
      confidence: "Medium",
    },
    {
      title: "Masterclass AI value story needs owner clarity",
      summary:
        "You were asked for customer participant names and speaker clarity. This is worth closing quickly because it shapes customer-facing positioning.",
      category: "Strategic project",
      action: "Delegate",
      confidence: "Medium",
    },
    {
      title: "Feature signal from POW should be closed into a recommendation",
      summary:
        "Predictions, Recommendation+, Loomi Analytics, and benchmarking stories now need a clear next owner and synthesis.",
      category: "Strategic project",
      action: "Book time",
      confidence: "Medium",
    },
    {
      title: "NPS follow-up quality matters more than the headline score",
      summary:
        "NPS 57 is a strong win, but detractor and neutral follow-ups need a real status check from the manager layer.",
      category: "People issue",
      action: "Capture for 1:1",
      confidence: "Medium",
    },
  ],
  actions: [
    "Reply to the APAC POC thread with a short framework: narrow scope, define pass/fail success metrics, no disguised free implementation.",
    "Close the Rohlik wording with Sofia and keep the message focused on discovery with Product.",
    "Ask for a single owner and deadline on the POW benchmarking and feature evidence threads.",
  ],
  wins: [
    "Boardriders visit already got Simon's green light.",
    "February NPS at 57 is a strong proof point.",
    "POW enablement cadence looks organized and visible across roles.",
  ],
  evidence: [
    {
      title: "APAC POC signal",
      text:
        "Anna asked for guidance after Simon suggested reaching out, and Steve's answer already points to over-scoped PoC design.",
    },
    {
      title: "Rohlik / MCP signal",
      text:
        "Sofia is actively shaping external wording and there is clear need to manage customer expectations carefully.",
    },
    {
      title: "POW strategic signal",
      text:
        "Benchmarking stories, feature adoption feedback, and NPS follow-ups are all active but still need closure and ownership.",
    },
  ],
};

const weeklyData = {
  wins: [
    "Strong NPS headline with visible momentum around follow-ups.",
    "Boardriders visit got leadership approval and supports relationship repair plus growth.",
    "POW enablement sessions are running with clear role-based structure.",
  ],
  risks: [
    "POC scope creep remains a real risk where commercial ambition outruns realistic delivery boundaries.",
    "AI/MCP messaging could overpromise if not kept tightly aligned with product reality.",
    "Some strategic asks still look like open collection exercises without named closure owners.",
  ],
  loops: [
    "Benchmarking evidence still needs a clear collection deadline.",
    "Feature feedback should turn into a recommendation, not remain a thread.",
    "Need a clean view of detractor and neutral follow-up completion.",
  ],
  actions: [
    "Push managers for a status readout on customer risk and NPS follow-through.",
    "Close the APAC POC framing and document a reusable CS point of view on PoC scope.",
    "Confirm ownership for AI event messaging and customer story collection.",
  ],
};

const threadSample = {
  link: "Rohlik MCP / Product discovery thread",
  text:
    "Customer wants to test MCP and assumes the capability is already available for broader usage. Sofia is preparing the wording, Product will join the call, and there is uncertainty around what is actually ready vs still exploratory.",
  docs:
    "Notes:\n- Goal of the call is discovery and use-case understanding\n- Avoid overpromising on production readiness\n- Position Product involvement as a way to understand needs and shape next steps\n- Keep the message focused on customer value and realistic scope",
};

function setHero(view) {
  const title = document.getElementById("hero-title");
  const subtitle = document.getElementById("hero-subtitle");

  const map = {
    today: [
      "Today",
      "Review the signal that matters now and test the intended briefing format.",
    ],
    weekly: [
      "Weekly",
      "Use a leadership wrap-up that separates signal, risk, and action.",
    ],
    oneOnOne: [
      "1:1 Prep",
      "Prepare for direct-report check-ins using your actual agenda plus the Martin layer.",
    ],
    thread: [
      "Thread Brief",
      "Paste a Slack thread and related document notes to get a fast summary, risks, and recommended next steps.",
    ],
    manual: [
      "Manual Generate",
      "Preview on-demand outcomes before we wire the real backend and Slack delivery.",
    ],
  };

  title.textContent = map[view][0];
  subtitle.textContent = map[view][1];
}

function renderToday() {
  const priorities = document.getElementById("today-priorities");
  priorities.innerHTML = todayData.priorities
    .map(
      (item) => `
        <article class="priority-card">
          <div class="priority-meta">
            <span class="meta-pill">${item.category}</span>
            <span class="meta-pill">${item.action}</span>
            <span class="meta-pill">${item.confidence}</span>
          </div>
          <h4>${item.title}</h4>
          <p>${item.summary}</p>
        </article>
      `,
    )
    .join("");

  document.getElementById("today-actions").innerHTML = bulletListHtml(todayData.actions);
  document.getElementById("today-wins").innerHTML = bulletListHtml(todayData.wins);
  document.getElementById("today-evidence").innerHTML = todayData.evidence
    .map(
      (item) => `
        <article class="evidence-card">
          <h4>${item.title}</h4>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderWeekly() {
  document.getElementById("weekly-wins").innerHTML = bulletListHtml(weeklyData.wins);
  document.getElementById("weekly-risks").innerHTML = bulletListHtml(weeklyData.risks);
  document.getElementById("weekly-loops").innerHTML = bulletListHtml(weeklyData.loops);
  document.getElementById("weekly-actions").innerHTML = bulletListHtml(weeklyData.actions);
}

function renderPeopleSelector() {
  const container = document.getElementById("people-selector");
  container.innerHTML = Object.entries(people)
    .map(
      ([key, person]) => `
        <button class="person-button ${state.selectedPerson === key ? "is-active" : ""}" data-person="${key}">
          ${person.name}
        </button>
      `,
    )
    .join("");

  container.querySelectorAll("[data-person]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedPerson = button.getAttribute("data-person");
      renderPeopleSelector();
      renderOneOnOne();
    });
  });
}

function renderOneOnOne() {
  const person = people[state.selectedPerson];
  document.getElementById("oneOnOne-name").textContent = person.name;
  document.getElementById("oneOnOne-wins").innerHTML = bulletListHtml(person.wins);
  document.getElementById("oneOnOne-priorities").innerHTML = bulletListHtml(person.priorities);
  document.getElementById("oneOnOne-challenges").innerHTML = bulletListHtml(person.challenges);
  document.getElementById("oneOnOne-business").innerHTML = bulletListHtml(person.business);
  document.getElementById("oneOnOne-feedback").innerHTML = bulletListHtml(person.feedback);
  document.getElementById("oneOnOne-questions").innerHTML = bulletListHtml(person.questions);
  document.getElementById("oneOnOne-followups").innerHTML = bulletListHtml(person.followups);
}

function bulletListHtml(items) {
  return `<ul class="bullet-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function setView(view) {
  state.activeView = view;

  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });

  document.querySelectorAll(".view").forEach((element) => {
    element.classList.toggle("is-visible", element.id === `${view}-view`);
  });

  setHero(view);
}

function generateManualOutput() {
  const type = document.getElementById("manual-type").value;
  const personKey = document.getElementById("manual-person").value;
  const person = people[personKey];

  if (type === "weekly") {
    return [
      "Weekly wrap-up.",
      "",
      "Wins:",
      ...weeklyData.wins.map((item) => `- ${item}`),
      "",
      "Risks:",
      ...weeklyData.risks.map((item) => `- ${item}`),
      "",
      "Actions for next week:",
      ...weeklyData.actions.map((item) => `- ${item}`),
    ].join("\n");
  }

  if (type === "oneOnOne") {
    return [
      `1:1 prep for ${person.name}.`,
      "",
      "Wins from the recent week:",
      ...person.wins.map((item) => `- ${item}`),
      "",
      "Top 3-5 priorities for the upcoming week:",
      ...person.priorities.map((item) => `- ${item}`),
      "",
      "Challenges where Martin's support may be needed:",
      ...person.challenges.map((item) => `- ${item}`),
      "",
      "Any other business:",
      ...person.business.map((item) => `- ${item}`),
      "",
      "Martin's feedback and coaching angles:",
      ...person.feedback.map((item) => `- ${item}`),
    ].join("\n");
  }

  const title = type === "midday" ? "Midday reset." : "Daily agenda.";

  return [
    title,
    "",
    "Top priorities:",
    ...todayData.priorities.slice(0, 4).map((item) => `- ${item.title}: ${item.summary}`),
    "",
    "Suggested actions:",
    ...todayData.actions.map((item) => `- ${item}`),
  ].join("\n");
}

function buildThreadBrief() {
  const link = document.getElementById("thread-link").value.trim();
  const threadText = document.getElementById("thread-text").value.trim();
  const docsText = document.getElementById("thread-docs").value.trim();

  const combined = `${threadText}\n${docsText}`.toLowerCase();
  const mentionsProduct =
    combined.includes("product") ||
    combined.includes("mcp") ||
    combined.includes("feature") ||
    combined.includes("roadmap");
  const mentionsCustomer =
    combined.includes("customer") ||
    combined.includes("renewal") ||
    combined.includes("prospect") ||
    combined.includes("account");
  const mentionsRisk =
    combined.includes("risk") ||
    combined.includes("uncertain") ||
    combined.includes("blocked") ||
    combined.includes("overpromise") ||
    combined.includes("scope");

  const summaryLine = threadText
    ? threadText.split(". ").slice(0, 2).join(". ").trim()
    : "No thread text provided.";

  const risks = [
    mentionsRisk
      ? "Expectation risk is visible and should be managed explicitly."
      : "No obvious hard risk language found, but ownership should still be clear.",
    mentionsProduct
      ? "Product-facing topics need disciplined wording to avoid accidental commitments."
      : "Cross-functional dependency should be checked before committing externally.",
    mentionsCustomer
      ? "Customer-facing communication should stay tied to value, scope, and next owner."
      : "The thread should be translated into a clear internal action with one owner.",
  ];

  const nextSteps = [
    "State the exact purpose of the thread in one sentence.",
    "Name the owner, deadline, and required output.",
    mentionsProduct
      ? "Separate what is available now from what is exploratory or future-facing."
      : "Clarify what is confirmed versus still assumed.",
    mentionsCustomer
      ? "Prepare one external-safe message that does not overpromise."
      : "Prepare one concise internal summary for leadership visibility.",
  ];

  const assistantReply = mentionsCustomer
    ? "Thanks all. My take is we should keep this focused on customer value and realistic scope. Let us align on what is confirmed today, what still needs Product input, and who owns the next step. Please come back with one clear recommendation and timeline."
    : "Thanks all. Let us turn this into one clear recommendation with owner, timing, and expected output. I would like to avoid leaving this as an open discussion thread.";

  return [
    `Thread brief${link ? `: ${link}` : ""}`,
    "",
    "Summary:",
    `- ${summaryLine}`,
    "",
    "What the assistant sees:",
    ...risks.map((item) => `- ${item}`),
    "",
    "Recommended next steps:",
    ...nextSteps.map((item) => `- ${item}`),
    "",
    "Suggested Martin reply:",
    assistantReply,
  ].join("\n");
}

function loadThreadSample() {
  document.getElementById("thread-link").value = threadSample.link;
  document.getElementById("thread-text").value = threadSample.text;
  document.getElementById("thread-docs").value = threadSample.docs;
  document.getElementById("thread-output").textContent = buildThreadBrief();
}

function wireEvents() {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  document.getElementById("generate-preview").addEventListener("click", () => {
    document.getElementById("manual-output").textContent = generateManualOutput();
  });

  document.getElementById("copy-output").addEventListener("click", async () => {
    const output = document.getElementById("manual-output").textContent;
    await navigator.clipboard.writeText(output);
  });

  document.getElementById("refresh-demo").addEventListener("click", () => {
    renderToday();
    renderWeekly();
    renderOneOnOne();
    document.getElementById("manual-output").textContent = generateManualOutput();
  });

  document.getElementById("send-sample").addEventListener("click", () => {
    setView("manual");
    document.getElementById("manual-output").textContent = generateManualOutput();
  });

  document.getElementById("generate-thread-brief").addEventListener("click", () => {
    document.getElementById("thread-output").textContent = buildThreadBrief();
  });

  document.getElementById("load-thread-sample").addEventListener("click", () => {
    loadThreadSample();
  });
}

function init() {
  renderToday();
  renderWeekly();
  renderPeopleSelector();
  renderOneOnOne();
  document.getElementById("manual-output").textContent = generateManualOutput();
  document.getElementById("thread-output").textContent =
    "Paste a Slack thread and any document notes, then click Generate thread brief.";
  wireEvents();
}

init();
