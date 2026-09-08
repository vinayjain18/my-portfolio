/**
 * The two things currently being built.
 *
 * Every claim here traces to something verifiable: Karyalo from the product
 * itself, Voice Agent from its public README at
 * https://github.com/vinayjain18/voice-agent. Nothing about adoption, revenue,
 * customers or performance beyond what the repo itself states.
 */

export interface IBuildingItem {
  id: string;
  name: string;
  /** One line, shown under the name on the card. */
  kicker: string;
  summary: string;
  status: string;
  href: string;
  /** Where the card's arrow goes, if anywhere public. */
  hrefLabel: string;
  sectionId: string;
}

const building: IBuildingItem[] = [
  {
    id: "karyalo",
    name: "Karyalo",
    kicker: "Contract management software",
    summary:
      "Contracts from first draft to signature in one place — drafting from a team's own precedents and clause library, reviewing against their playbook, sending, and signing.",
    status: "Live",
    href: "https://karyalo.in/",
    hrefLabel: "Visit karyalo.in",
    sectionId: "karyalo",
  },
  {
    id: "voice-agents",
    name: "AI Voice Agents",
    kicker: "Voice agents that answer the phone",
    summary:
      "A low-latency voice agent that answers a call, holds a real conversation about the business, and books a callback. The same code runs in a terminal, a browser, on a real phone number and on WhatsApp.",
    status: "Live · open source",
    href: "https://github.com/vinayjain18/voice-agent",
    hrefLabel: "View the repository",
    sectionId: "voice-agents",
  },
];

export default building;

/** Use cases the agents are built to cover. */
export const voiceAgentUseCases = [
  { title: "Inbound calls", detail: "Answers, and talks about the business." },
  { title: "Receptionist", detail: "Handles the call the way a person would." },
  { title: "Cold outreach", detail: "Runs the outbound conversation." },
  { title: "Follow-ups", detail: "Calls back rather than letting it lapse." },
  { title: "Callbacks", detail: "Books them from the number on the call." },
];

/**
 * Capabilities stated in the repository README. Kept as short factual lines —
 * no benchmark claims beyond what the project documents about itself.
 */
export const voiceAgentCapabilities = [
  {
    title: "Sub-two-second replies",
    detail:
      "End-of-turn detection runs inside the speech model, and the LLM starts generating before the caller has finished speaking.",
  },
  {
    title: "Interruptible",
    detail:
      "Talk over it and it stops, like a person would — and it knows when to hang up without cutting a caller off mid-sentence.",
  },
  {
    title: "English, Hindi and Hinglish",
    detail:
      "US-accented English by default, one environment variable away from Hindi and Hinglish with mid-sentence switching.",
  },
  {
    title: "Costed per call",
    detail:
      "Tokens, characters, audio seconds and a total, itemised for every conversation.",
  },
];

/** Where the same agent can run, unchanged. */
export const voiceAgentSurfaces = [
  "Terminal",
  "Browser",
  "Phone number",
  "WhatsApp",
];

/** Providers named in the repository. */
export const voiceAgentStack = [
  "Python",
  "LiveKit Agents",
  "Deepgram",
  "Groq",
  "Rumik",
  "FastAPI",
];

/**
 * Karyalo's contract lifecycle, in the product's own four steps.
 * These are the stages the product describes, presented as a flow —
 * the interface drawn alongside them is a diagram, not a screenshot.
 */
export const karyaloFlow = [
  {
    step: "Draft",
    detail: "From your own precedents, approved wording and clause library.",
  },
  {
    step: "Check",
    detail: "Every clause graded against your playbook, redline written.",
  },
  {
    step: "Send",
    detail: "One revocable link, no account needed at the other end.",
  },
  {
    step: "Sign",
    detail: "Bound to the exact version reviewed, executed PDF to everyone.",
  },
];
