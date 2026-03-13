const state = {
  activeView: "today",
  selectedPerson: "matej",
};

const people = {
  matej: {
    name: "Matej Cambal",
    wins: [
      "BC signal is helping shape event support and technical-commercial follow-up threads.",
      "Coverage on strategic feature and market asks remains visible across accounts.",
    ],
    priorities: [
      "Support the highest-priority account asks where scope, feasibility, and audience matter.",
      "Turn strategic asks into concise recommendations with owner and next step.",
      "Keep BC focus on the accounts with the strongest commercial or exec visibility.",
    ],
    challenges: [
      "Needs faster synthesis when multiple people contribute to one strategic ask.",
      "Could use your backing when a request needs sharper commercial framing.",
    ],
    business: [
      "Confirm where BC effort should go first after your PTO catch-up.",
    ],
    feedback: [
      "Keep separating interesting input from input that changes leadership action.",
      "Ask for owner plus deadline earlier when a thread will need your decision.",
    ],
    questions: [
      "Which BC-led asks over the last three days actually require your intervention?",
      "Where do you need me to unblock cross-functional follow-through this week?",
    ],
    followups: [
      "Ask for a shortlist of the top account asks that deserve leadership airtime.",
    ],
  },
  andrea: {
    name: "Andrea Svatikova",
    wins: [
      "Customer-facing event and invite coordination kept moving while you were out.",
      "POW benchmarking discussion now has clear customer examples and stronger field perspective.",
    ],
    priorities: [
      "Turn benchmarking discussion into a clear point of view the team can use externally.",
      "Keep event/customer invite threads moving without losing ownership.",
      "Surface any account sentiment issues that need leader involvement early.",
    ],
    challenges: [
      "Needs a clean line between useful customer context and true escalation signal.",
      "Could use your support where customer asks need stronger commercial framing.",
    ],
    business: [
      "Decide which benchmarking or event-related threads deserve wider leadership escalation.",
    ],
    feedback: [
      "Push the team from descriptive updates to recommendation plus owner.",
      "Make sure follow-up quality matters more than thread activity.",
    ],
    questions: [
      "Which customer-facing topics from the last three days still need your intervention?",
      "What do you need from me to improve the quality and speed of follow-through?",
    ],
    followups: [
      "Review the top customer-facing threads and lock owner plus next step.",
    ],
  },
  anastasia: {
    name: "Anastasia Kutasova",
    wins: [
      "Delivery and TC angle remains part of strategic asks rather than arriving too late.",
      "Technical support visibility stayed present in multi-party threads while you were away.",
    ],
    priorities: [
      "Keep delivery or TC effort visible in any ask that may drift into implementation work.",
      "Flag technical feasibility and effort earlier on strategic customer motions.",
      "Support the few asks that need realism rather than optimism.",
    ],
    challenges: [
      "Needs a sharper line between technically possible and worth doing now.",
      "Could use your backing when a thread needs scope control or pushback.",
    ],
    business: [
      "Review where TC input should be mandatory before a customer-facing commitment is made.",
    ],
    feedback: [
      "Push for earlier intervention before a delivery concern becomes an escalation.",
      "Keep technical effort visible when requests start expanding in scope.",
    ],
    questions: [
      "Which current asks are technically feasible but operationally risky?",
      "Where do you need my cover to push back on scope, timing, or staffing?",
    ],
    followups: [
      "Create a watchlist of delivery-heavy asks that may need leadership attention this week.",
    ],
  },
};

const todayData = {
  priorities: [
    {
      title: "indrive situation needs a short sync and risk framing",
      summary:
        "Jan asked for a short sync because there is a situation around indrive. This is your clearest immediate backlog item after PTO and likely needs quick triage.",
      category: "Customer escalation",
      action: "Reply now",
      confidence: "High",
    },
    {
      title: "Rohlik next steps need internal alignment before the follow-up",
      summary:
        "The follow-up after the Rohlik meeting is moving toward a demo and deeper product discussion. The team needs one aligned internal sync before the next external step.",
      category: "Strategic project",
      action: "Follow up today",
      confidence: "High",
    },
    {
      title: "PUIG APAC channel request looks detailed and executive-facing",
      summary:
        "Jakub shared a dense agenda request for PUIG covering KakaoTalk, Line, integration setup, data identity, and training. This needs clear ownership and likely a scoped response.",
      category: "Strategic project",
      action: "Book time",
      confidence: "High",
    },
    {
      title: "Simon-related AI and note-taking direction is becoming a real signal",
      summary:
        "Simon is actively shaping a view around note-taking, knowledge management, MCP-style connectivity, and weekly summarization. This aligns closely with what you are building here and is worth tracking as proactive context.",
      category: "Ask from Simon Farthing",
      action: "Watch only",
      confidence: "Medium",
    },
    {
      title: "POW benchmarking thread produced useful customer proof points",
      summary:
        "Hugo, Sofia, Andrea, and Lukas added real field perspective on why Bloomreach-owned benchmarks matter and where current data is weak. This is one of the strongest strategic threads from your time away.",
      category: "Strategic project",
      action: "Delegate",
      confidence: "Medium",
    },
  ],
  actions: [
    "Sync with Jan on indrive first and decide if it is true escalation, renewal risk, or just monitoring.",
    "Ask Sofia for the agreed Rohlik internal sync plan, owner list, and timing before the next customer-facing step.",
    "Push PUIG into a clearer owner-based action plan instead of leaving it as a dense requirements message.",
  ],
  wins: [
    "POW benchmarking thread now contains stronger real customer examples and practical field insight.",
    "Rohlik conversation moved into concrete next steps instead of staying at curiosity level.",
    "Customer event and invite coordination kept moving while you were out.",
  ],
  evidence: [
    {
      title: "indrive signal",
      text:
        "Jan asked for a short sync because of a situation around indrive and suggested you should be mentally ready for the topic.",
    },
    {
      title: "Rohlik signal",
      text:
        "Sofia summarized next steps with Meera, Pieter, and others: follow-up demo, internal alignment, and a tighter approach before the next customer call.",
    },
    {
      title: "POW benchmarking signal",
      text:
        "Over the last days the team added both business value arguments and reliability concerns around benchmarking, plus several customer examples.",
    },
  ],
};

const weeklyData = {
  wins: [
    "Benchmarking conversation in POW became materially stronger with real stories and practitioner feedback.",
    "Rohlik moved from exploratory interest into a more structured next-step motion with Product involvement.",
    "Customer event preparation and invite coordination stayed active and visible while you were OOO.",
  ],
  risks: [
    "indrive may require immediate attention and is your clearest short-term escalation signal.",
    "PUIG/APAC ask is detailed enough to become messy unless ownership and scope are tightened quickly.",
    "Rohlik can still drift into expectation risk if the team does not align internally before the next customer-facing step.",
  ],
  loops: [
    "Need a single summary and owner for benchmarking next steps out of the POW thread.",
    "Need a named owner and response structure for the PUIG APAC channel request.",
    "Need clarity on whether Simon's note-taking and weekly summary signal should influence your assistant roadmap now or later.",
  ],
  actions: [
    "Triage indrive first, then lock the next two or three strategic threads rather than trying to clear everything at once.",
    "Ask for concise owner/deadline based summaries on Rohlik, PUIG, and benchmarking.",
    "Decide which of the last-three-day threads belong in 1:1s versus your own leadership queue.",
  ],
};

const threadSample = {
  link: "Rohlik follow-up / Product alignment thread",
  text:
    "The customer is interested in MCP and agent-related use cases. Product and supporting teams joined the call and the next move is likely a follow-up demo plus an internal alignment before going back to the customer.",
  docs:
    "Notes:\n- Goal is to understand the use cases and shape the next step responsibly\n- Avoid overpromising on current production readiness\n- Internal sync should happen before the next customer-facing call\n- Keep the message focused on value, realistic scope, and owner clarity",
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
