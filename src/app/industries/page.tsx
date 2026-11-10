import type { Metadata } from "next";
import Link from "next/link";
import { Icon, IconTile } from "@/components/Icon";
import { Container, CtaBand, PageHero } from "@/components/ui";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries — AI-Powered Business Solutions by Sector",
  description:
    "How Cogninova applies AI across healthcare, finance, retail and e-commerce, education, and enterprise and manufacturing.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="AI that understands your industry"
        text="The same technology means different things in a clinic, a bank and a factory. We build for the realities of each."
      />
      <section className="pb-8">
        <Container>
          <ul className="space-y-5">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link
                  href={`/industries/${i.slug}`}
                  className="group grid gap-6 rounded-2xl border border-mist bg-white p-7 shadow-soft transition-shadow duration-200 hover:shadow-lift md:grid-cols-[1fr_1.3fr] md:gap-10 md:p-9"
                >
                  <div>
                    <IconTile name={i.icon} className="!size-12" />
                    <h2 className="mt-5 text-2xl font-medium sm:text-3xl">{i.name}</h2>
                    <p className="mt-2 leading-relaxed text-muted">{i.headline}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-violet-deep">
                      Explore {i.name} <Icon name="arrow" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                  <ul className="grid content-center gap-x-6 gap-y-3 sm:grid-cols-2">
                    {i.useCases.map((u) => (
                      <li key={u.title} className="flex gap-2.5 text-[0.95rem] text-ink/85">
                        <Icon name="check" className="mt-1 size-4 shrink-0 text-violet-deep" />
                        {u.title}
                      </li>
                    ))}
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
