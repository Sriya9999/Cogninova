import type { Metadata } from "next";
import { Icon, IconTile } from "@/components/Icon";
import { Button, Card, Container, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { approach, solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Custom AI Solutions — Automation, AI Agents & Voice AI Development",
  description:
    "Custom AI solutions from Cogninova: AI workflow automation, conversational AI, voice AI agents, predictive analytics, intelligent document processing and enterprise AI development.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Custom AI, built around your business"
        text="When an off-the-shelf product won't do, we design and build AI solutions for your workflows, your data and your goals."
      >
        <Button href="/contact">Build With Us</Button>
        <Button href="/products" variant="ghost">Explore products</Button>
      </PageHero>

      <section className="pb-20 sm:pb-28">
        <Container>
          <ul className="grid gap-5 md:grid-cols-2">
            {solutions.map((s) => (
              <li key={s.slug} id={s.slug} className="scroll-mt-24">
                <Card className="flex h-full flex-col p-7 sm:flex-row sm:gap-6">
                  <IconTile name={s.icon} className="!size-12" />
                  <div className="mt-4 sm:mt-0">
                    <h2 className="text-xl font-medium first-letter:uppercase">{s.name}</h2>
                    <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-ink/80">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-1.5">
                          <Icon name="check" className="size-3.5 text-violet-deep" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-mist bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="How we work" title="From first conversation to production" />
          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step, i) => (
              <li key={step.title} className="border-t-2 border-periwinkle pt-5">
                <span className="font-display text-sm font-medium text-violet-deep">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-medium">{step.title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
