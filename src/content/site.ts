/**
 * Site-wide settings. Contact details below are placeholders — replace them
 * with Cogninova's official channels before launch.
 */
export const site = {
  name: "Cogninova",
  tagline: "Build · Automate · Scale",
  statement: "From intelligence to impact. We build AI that works.",
  description:
    "Cogninova is an AI product studio. We design, develop and deploy intelligent AI products that simplify workflows, solve complex challenges and unlock new possibilities across industries.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  email: "hello@cogninova.ai",
  linkedin: "https://www.linkedin.com/company/cogninova",
  keywords: [
    "AI product development company",
    "AI automation company",
    "custom AI solutions",
    "enterprise AI development",
    "AI-powered business solutions",
    "voice AI development",
    "AI agents development",
    "AI workflow automation",
  ],
};

export const nav = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];

export const interestAreas = [
  "Request a product demo",
  "Custom AI development",
  "AI automation",
  "Conversational or voice AI",
  "Predictive analytics",
  "Partnership",
  "Something else",
];
