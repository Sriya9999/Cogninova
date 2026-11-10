import type { IconName } from "@/components/Icon";

/**
 * Product catalogue. Adding an entry here creates its listing card, detail
 * page, sitemap entry and industry cross-links — no layout changes needed.
 *
 * NOTE: the entries below are illustrative placeholders based on the PRD's
 * capability areas. Replace names and copy with the real product portfolio.
 */
export type Product = {
  slug: string;
  name: string;
  category: "Automation" | "Voice AI" | "Conversational AI" | "Document Intelligence" | "Analytics";
  icon: IconName;
  tagline: string;
  overview: string;
  problem: string;
  capabilities: { title: string; text: string }[];
  features: string[];
  audience: string[];
  industries: string[]; // industry slugs
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "nova-claims",
    name: "Nova Claims",
    category: "Automation",
    icon: "workflow",
    tagline: "Revenue cycle automation for healthcare providers.",
    overview:
      "Nova Claims automates eligibility checks, claim preparation and follow-up, so revenue teams spend their time on exceptions rather than data entry.",
    problem:
      "Revenue cycle teams re-key the same information across payer portals and chase claims by phone. Errors lead to denials, and denials delay payment.",
    capabilities: [
      { title: "Eligibility verification", text: "Coverage confirmed automatically before the appointment." },
      { title: "Claim preparation", text: "Claims checked against payer rules before they are submitted." },
      { title: "Denial follow-up", text: "Denied claims prioritised, with the likely fix attached." },
    ],
    features: [
      "Works alongside your existing practice management system",
      "Human review queue for exceptions",
      "Full audit trail on every action",
      "Role-based access controls",
    ],
    audience: ["Revenue cycle leaders", "Practice managers", "Billing teams"],
    industries: ["healthcare"],
    featured: true,
  },
  {
    slug: "nova-voice",
    name: "Nova Voice",
    category: "Voice AI",
    icon: "voice",
    tagline: "Voice agents that handle routine calls, start to finish.",
    overview:
      "Nova Voice answers and places calls in natural language: scheduling, reminders, status updates and first-line support, with a clean hand-off to your team when needed.",
    problem:
      "Phone lines are still where much of business happens, and they are hard to staff. Callers wait, calls are missed, and teams repeat the same conversations all day.",
    capabilities: [
      { title: "Natural conversation", text: "Understands intent, handles interruptions and stays on task." },
      { title: "Connected to your systems", text: "Books, updates and looks up records during the call." },
      { title: "Warm hand-off", text: "Transfers to a person with a summary of the conversation so far." },
    ],
    features: [
      "Inbound and outbound calling",
      "Configurable scripts and guardrails",
      "Call summaries and transcripts",
      "Available around the clock",
    ],
    audience: ["Operations leaders", "Contact centre managers", "Front-desk teams"],
    industries: ["healthcare", "finance", "retail"],
    featured: true,
  },
  {
    slug: "nova-docs",
    name: "Nova Docs",
    category: "Document Intelligence",
    icon: "document",
    tagline: "Turn documents into structured, validated data.",
    overview:
      "Nova Docs reads forms, statements and contracts, extracts what matters, validates it against your rules and routes it to the right system or person.",
    problem:
      "Critical information arrives as PDFs, scans and emails. Teams read, re-type and cross-check it by hand, which is slow, costly and error-prone.",
    capabilities: [
      { title: "Extraction", text: "Pulls fields and tables from structured and unstructured documents." },
      { title: "Validation", text: "Checks values against business rules and flags what needs review." },
      { title: "Routing", text: "Sends clean data to downstream systems and exceptions to people." },
    ],
    features: [
      "Handles scans, PDFs and email attachments",
      "Confidence scoring on every field",
      "Review interface for exceptions",
      "API and export options",
    ],
    audience: ["Operations teams", "Finance and compliance leaders", "Back-office managers"],
    industries: ["finance", "healthcare", "enterprise-manufacturing"],
    featured: true,
  },
  {
    slug: "nova-assist",
    name: "Nova Assist",
    category: "Conversational AI",
    icon: "chat",
    tagline: "Customer support that answers instantly and accurately.",
    overview:
      "Nova Assist resolves routine customer questions across chat and messaging using your own knowledge and order data, and escalates the rest with full context.",
    problem:
      "Support teams answer the same questions thousands of times. Response times slip during peaks, and customers leave when they cannot get a quick answer.",
    capabilities: [
      { title: "Grounded answers", text: "Responds from your policies, catalogue and order data." },
      { title: "Actions, not just answers", text: "Tracks orders, starts returns and updates details." },
      { title: "Smart escalation", text: "Knows when to bring in a person, and briefs them first." },
    ],
    features: [
      "Web chat and messaging channels",
      "Knowledge base sync",
      "Conversation analytics",
      "Tone and policy controls",
    ],
    audience: ["Customer experience leaders", "Support managers", "E-commerce teams"],
    industries: ["retail", "finance"],
  },
  {
    slug: "nova-learn",
    name: "Nova Learn",
    category: "Conversational AI",
    icon: "education",
    tagline: "An AI learning assistant for every student.",
    overview:
      "Nova Learn gives students guided practice and explanations at their own pace, and gives educators a clear picture of where each learner needs help.",
    problem:
      "Learners progress at different speeds, but teaching time is fixed. Feedback arrives late, and students who fall behind are often noticed too late.",
    capabilities: [
      { title: "Adaptive guidance", text: "Explains concepts and sets practice at the right level." },
      { title: "Assessment support", text: "Drafts marking and feedback for educators to review." },
      { title: "Progress insight", text: "Shows who is on track and who needs attention." },
    ],
    features: [
      "Aligned to your curriculum and materials",
      "Educator controls and oversight",
      "Student progress dashboards",
      "Administrative query handling",
    ],
    audience: ["Schools and universities", "Training providers", "EdTech teams"],
    industries: ["education"],
  },
  {
    slug: "nova-ops",
    name: "Nova Ops",
    category: "Analytics",
    icon: "analytics",
    tagline: "Operational intelligence and predictive maintenance.",
    overview:
      "Nova Ops brings operational data into one view, predicts issues before they cause downtime and answers reporting questions in plain language.",
    problem:
      "Operational data sits in separate systems. Teams find out about problems after they happen, and reports take days to assemble.",
    capabilities: [
      { title: "Early warning", text: "Detects anomalies in equipment and process data." },
      { title: "Forecasting", text: "Projects demand, capacity and inventory needs." },
      { title: "Ask your data", text: "Plain-language questions, answered with sources." },
    ],
    features: [
      "Connects to existing data sources",
      "Configurable alerts and thresholds",
      "Scheduled and on-demand reports",
      "Scales from one site to many",
    ],
    audience: ["Operations and plant leaders", "CIOs and CTOs", "Supply chain teams"],
    industries: ["enterprise-manufacturing", "retail"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productsForIndustry = (slug: string) => products.filter((p) => p.industries.includes(slug));
