import type { IconName } from "@/components/Icon";

export type Solution = { slug: string; name: string; icon: IconName; text: string; points: string[] };

export const solutions: Solution[] = [
  {
    slug: "automation",
    name: "AI-powered automation",
    icon: "zap",
    text: "Automate repetitive, rules-heavy work end to end, with people in the loop where judgement matters.",
    points: ["Task and process automation", "Exception handling", "System integrations"],
  },
  {
    slug: "conversational-ai",
    name: "Conversational AI",
    icon: "chat",
    text: "Assistants that answer accurately from your own knowledge and complete tasks, not just conversations.",
    points: ["Customer and employee assistants", "Knowledge-grounded answers", "Multi-channel deployment"],
  },
  {
    slug: "voice-ai",
    name: "Voice AI agents",
    icon: "voice",
    text: "Natural voice agents for inbound and outbound calls: scheduling, support, reminders and follow-ups.",
    points: ["Real-time voice conversations", "Telephony integration", "Human hand-off"],
  },
  {
    slug: "workflow-orchestration",
    name: "AI workflow orchestration",
    icon: "workflow",
    text: "Coordinate multiple AI agents, tools and teams into one dependable, observable workflow.",
    points: ["Multi-agent workflows", "Monitoring and guardrails", "Approval steps"],
  },
  {
    slug: "predictive-analytics",
    name: "Predictive analytics",
    icon: "trend",
    text: "Forecast demand, risk and performance so decisions are made ahead of events, not after them.",
    points: ["Forecasting models", "Anomaly detection", "Decision dashboards"],
  },
  {
    slug: "document-processing",
    name: "Intelligent document processing",
    icon: "document",
    text: "Extract, validate and route information from any document, at volume and with confidence scoring.",
    points: ["Data extraction", "Validation rules", "Review workflows"],
  },
  {
    slug: "custom-development",
    name: "Custom AI application development",
    icon: "code",
    text: "Purpose-built AI products designed around your users, your data and your constraints.",
    points: ["Product strategy and design", "Full-stack engineering", "Deployment and support"],
  },
  {
    slug: "data-intelligence",
    name: "Data intelligence & business automation",
    icon: "database",
    text: "Bring scattered data together and put it to work across reporting and day-to-day operations.",
    points: ["Data pipelines", "AI-powered reporting", "Operational automation"],
  },
];

export const approach = [
  { title: "Discover", text: "We start with the business problem, the users and the data, and define what success looks like." },
  { title: "Design", text: "We shape the product experience and the AI behind it together, then validate with a working prototype." },
  { title: "Build", text: "We engineer for production from day one: secure, tested, observable and integrated with your systems." },
  { title: "Scale", text: "We measure real-world performance and keep improving as usage and requirements grow." },
];

export const reasons: { title: string; text: string; icon: IconName }[] = [
  { icon: "sparkles", title: "Product thinking first", text: "We build products people use, not demos. Every decision starts with the user and the outcome." },
  { icon: "grid", title: "Depth across industries", text: "Shared foundations, tailored to the workflows and constraints of each sector we serve." },
  { icon: "layers", title: "Built to scale", text: "Reliable architecture and clean integration, ready for real volumes from the first release." },
  { icon: "shield", title: "Responsible by design", text: "Human oversight, clear guardrails and careful handling of data, built in rather than added on." },
];
