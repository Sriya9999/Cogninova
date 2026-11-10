import type { Metadata } from "next";
import { IconTile } from "@/components/Icon";
import { Button, Card, Container, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { approach, reasons } from "@/content/solutions";

export const metadata: Metadata = {
  title: "About — An AI Product Development Company",
  description:
    "Cogninova is an AI product studio making intelligent technology accessible, practical and scalable. Learn about our vision, mission and approach to responsible AI.",
};

const commitments = [
  { title: "People stay in control", text: "We design for human oversight wherever decisions carry real consequences." },
  { title: "Data is handled with care", text: "Access is limited to what a product needs, and protected throughout." },
  { title: "Behaviour is measurable", text: "We test and monitor our AI so its performance is known, not assumed." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We don't just experiment with AI. We turn it into products that work."
        text="Cogninova is an AI product development and innovation company. We design, build, deploy and scale intelligent products across industries."
      >
        <Button href="/contact">Build With Us</Button>
      </PageHero>

      <section className="pb-20 sm:pb-28">
        <Container className="grid gap-5 md:grid-cols-2">
          <Card className="p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-violet-deep font-sans">Our vision</h2>
            <p className="mt-4 font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              Make intelligent technology accessible, practical, and scalable across industries.
            </p>
          </Card>
          <Card className="p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-violet-deep font-sans">Our mission</h2>
            <p className="mt-4 font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              Streamline business operations and accelerate innovation with purpose-built AI products that solve real-world problems.
            </p>
          </Card>
        </Container>
      </section>

      <section className="border-y border-mist bg-white py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Who we are"
            title="A studio built around outcomes"
            text="AI is easy to demonstrate and hard to put to work. We exist to close that gap: starting from a real business problem, and finishing with a product that people rely on every day."
          />
          <ul className="grid gap-8 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r.title}>
                <IconTile name={r.icon} />
                <h3 className="mt-4 text-lg font-medium">{r.title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{r.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="How we build" title="Product development, not experimentation" text="The same four stages guide every product we ship." />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step, i) => (
              <li key={step.title}>
                <Card className="h-full">
                  <span className="font-display text-sm font-medium text-violet-deep">0{i + 1}</span>
                  <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{step.text}</p>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-mist bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Responsible AI" title="Scalable, and worthy of trust" text="AI that businesses depend on has to be dependable. These commitments shape everything we build." />
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {commitments.map((c) => (
              <li key={c.title} className="border-t-2 border-periwinkle pt-5">
                <h3 className="text-lg font-medium">{c.title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted">{c.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
