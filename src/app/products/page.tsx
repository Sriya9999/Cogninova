import type { Metadata } from "next";
import { ProductExplorer } from "@/components/ProductExplorer";
import { Container, CtaBand, PageHero } from "@/components/ui";
import { industries } from "@/content/industries";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "AI Products — Automation, Voice AI & Document Intelligence",
  description:
    "Explore Cogninova's portfolio of AI products for healthcare, finance, retail, education and enterprise: automation, voice AI agents, conversational AI and analytics.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="AI products built for real work"
        text="Each product solves a specific problem, and is configured for the way your business runs. Filter by industry or function to find a fit."
      />
      <section className="pb-8">
        <Container>
          <ProductExplorer products={products} industries={industries.map((i) => ({ value: i.slug, label: i.name }))} />
        </Container>
      </section>
      <CtaBand
        title="Need something built for you?"
        text="If none of these fit, we design and build custom AI products around your problem."
        label="Talk to Us"
      />
    </>
  );
}
