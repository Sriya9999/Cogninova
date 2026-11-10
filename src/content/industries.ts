import type { IconName } from "@/components/Icon";

export type Industry = {
  slug: string;
  name: string;
  icon: IconName;
  summary: string;
  headline: string;
  intro: string;
  challenges: string[];
  useCases: { title: string; text: string }[];
  seoTitle: string;
  seoDescription: string;
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "healthcare",
    summary: "Revenue cycle, patient engagement and clinical workflow automation.",
    headline: "Less administration. More time for care.",
    intro:
      "Healthcare teams lose hours every day to manual verification, follow-ups and paperwork. We build AI that takes on that work reliably, so staff can focus on patients.",
    challenges: [
      "Eligibility checks and claims work done by hand",
      "Front-desk teams stretched across phones and portals",
      "Clinical documentation that pulls time away from care",
    ],
    useCases: [
      { title: "Revenue cycle automation", text: "Move claims from submission to payment with fewer touches and fewer denials." },
      { title: "Patient engagement", text: "Reminders, intake and follow-ups that reach patients on the channel they prefer." },
      { title: "Eligibility verification", text: "Confirm coverage before the visit, without the phone queue." },
      { title: "Clinical workflow automation", text: "Route tasks, summarise records and keep documentation moving." },
      { title: "Healthcare voice AI", text: "Voice agents that handle scheduling and routine calls around the clock." },
    ],
    seoTitle: "AI for Healthcare — Revenue Cycle, Patient Engagement & Voice AI",
    seoDescription:
      "Cogninova builds AI products for healthcare: revenue cycle automation, eligibility verification, patient engagement, clinical workflow automation and voice AI.",
  },
  {
    slug: "finance",
    name: "Finance",
    icon: "finance",
    summary: "Document processing, risk analytics and workflow automation.",
    headline: "Faster decisions, built on cleaner data.",
    intro:
      "Financial teams run on documents and judgement. We automate the first and sharpen the second, with AI designed for accuracy, auditability and control.",
    challenges: [
      "High volumes of unstructured documents",
      "Risk signals scattered across systems",
      "Support teams handling the same questions repeatedly",
    ],
    useCases: [
      { title: "Intelligent document processing", text: "Extract, validate and route data from statements, forms and contracts." },
      { title: "Risk analytics", text: "Surface patterns and anomalies early enough to act on them." },
      { title: "Financial workflow automation", text: "Take repetitive review and reconciliation steps off your team's desk." },
      { title: "Customer support automation", text: "Resolve routine queries instantly and hand off the complex ones with context." },
    ],
    seoTitle: "AI for Financial Services — Document Processing & Risk Analytics",
    seoDescription:
      "AI solutions for finance from Cogninova: intelligent document processing, risk analytics, financial workflow automation and customer support automation.",
  },
  {
    slug: "retail",
    name: "Retail & E-commerce",
    icon: "retail",
    summary: "Customer support, forecasting and personalised recommendations.",
    headline: "Know what customers want, and have it ready.",
    intro:
      "Retail moves quickly and margins are thin. We build AI that answers customers, anticipates demand and keeps the right stock in the right place.",
    challenges: [
      "Support volumes that spike with every campaign",
      "Forecasts that lag behind real demand",
      "Generic experiences that fail to convert",
    ],
    useCases: [
      { title: "AI customer support", text: "Answer order, delivery and product questions on every channel, at any hour." },
      { title: "Demand forecasting", text: "Plan buying and staffing around what is likely to sell, not what sold last year." },
      { title: "Personalised recommendations", text: "Show each customer products that fit what they are actually looking for." },
      { title: "Inventory intelligence", text: "Spot stock-outs and overstock before they cost you." },
    ],
    seoTitle: "AI for Retail & E-commerce — Support, Forecasting & Personalisation",
    seoDescription:
      "Cogninova builds AI for retail and e-commerce: AI customer support, demand forecasting, personalised recommendations and inventory intelligence.",
  },
  {
    slug: "education",
    name: "Education",
    icon: "education",
    summary: "Learning assistants, assessments and administrative automation.",
    headline: "Support every learner, without adding workload.",
    intro:
      "Educators want more time with students and less with administration. We build AI that helps learners progress and takes routine work off staff.",
    challenges: [
      "One teacher, many learners at different levels",
      "Assessment and feedback that takes days",
      "Administrative work that crowds out teaching",
    ],
    useCases: [
      { title: "AI learning assistants", text: "Guidance and practice that adapts to each student's pace." },
      { title: "Automated assessments", text: "Consistent marking and faster feedback, with educators in control." },
      { title: "Student engagement", text: "Timely nudges and support that keep learners on track." },
      { title: "Administrative automation", text: "Admissions, scheduling and enquiries handled with less manual effort." },
    ],
    seoTitle: "AI for Education — Learning Assistants & Automated Assessment",
    seoDescription:
      "AI products for education from Cogninova: AI learning assistants, automated assessments, student engagement and administrative automation.",
  },
  {
    slug: "enterprise-manufacturing",
    name: "Enterprise & Manufacturing",
    icon: "manufacturing",
    summary: "Process automation, predictive maintenance and operational intelligence.",
    headline: "Operations that see problems coming.",
    intro:
      "Complex operations generate more data than any team can read. We turn it into early warnings, clear reporting and processes that run themselves.",
    challenges: [
      "Unplanned downtime and reactive maintenance",
      "Manual processes spread across departments",
      "Reporting that arrives too late to act on",
    ],
    useCases: [
      { title: "Process automation", text: "Connect systems and automate hand-offs across teams." },
      { title: "Predictive maintenance", text: "Detect equipment issues before they stop the line." },
      { title: "Operational intelligence", text: "One live view of what is happening and what needs attention." },
      { title: "AI-powered reporting", text: "Ask a question in plain language and get an answer you can trust." },
    ],
    seoTitle: "AI for Enterprise & Manufacturing — Automation & Predictive Maintenance",
    seoDescription:
      "Cogninova builds enterprise AI: process automation, predictive maintenance, operational intelligence and AI-powered reporting for manufacturing and operations.",
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
