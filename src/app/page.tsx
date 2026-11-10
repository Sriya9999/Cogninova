import Link from "next/link";
import { HeroVisual } from "@/components/HeroVisual";
import { Icon, IconTile } from "@/components/Icon";
import { ProductCard } from "@/components/ProductCard";
import { Button, Card, Container, CtaBand, SectionHeading } from "@/components/ui";
import { industries } from "@/content/industries";
import { products } from "@/content/products";
import { site } from "@/content/site";
import { approach, reasons, solutions } from "@/content/solutions";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
  sameAs: [site.linkedin],
};

export default function HomePage() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="overflow-hidden">
        <Container className="grid items-center gap-10 pb-14 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:pb-20">
          <div className="animate-rise">
            <p className="inline-flex items-center gap-2 rounded-full border border-mist bg-white px-3.5 py-1.5 text-sm font-medium shadow-soft">
              <Icon name="sparkles" className="size-4 text-violet-deep" />
              The AI Product Studio
            </p>
            <h1 className="mt-6 text-[2.75rem] font-medium leading-[1.02] sm:text-7xl">
              Intelligence that moves business{" "}
              <span className="bg-gradient-to-r from-violet-deep to-[#2f86d6] bg-clip-text text-transparent">forward.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Cogninova designs, develops, and deploys intelligent AI products that simplify workflows, solve complex
              challenges, and unlock new possibilities across industries.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button href="/solutions">Explore Our Solutions</Button>
              <Button href="/contact" variant="ghost">Build With Us</Button>
            </div>
          </div>
          <div className="hidden sm:block">
            <HeroVisual />
          </div>
        </Container>

        <Container>
          <div className="rounded-2xl border border-mist bg-white/70 px-4 py-6">
            <p className="text-center text-sm text-muted">AI products for the industries that run on complex work</p>
            <ul className="mt-5 grid grid-cols-2 gap-y-5 sm:grid-cols-5 sm:divide-x sm:divide-mist">
              {industries.map((i) => (
                <li key={i.slug} className="last:col-span-2 sm:last:col-span-1">
                  <Link href={`/industries/${i.slug}`} className="group flex flex-col items-center gap-2 px-2 text-center text-sm text-muted transition-colors hover:text-violet-deep">
                    <Icon name={i.icon} className="size-6 text-ink/45 transition-colors group-hover:text-violet-deep" />
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Introduction + what we do */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="What we do"
              title="From idea to impact — with Cogninova"
              text="We are an AI product studio. We find the problems worth solving, then design, build and scale the intelligent products that solve them."
            />
            <Button href="/about" variant="ghost" className="mt-6">About Cogninova</Button>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {solutions.slice(0, 4).map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions#${s.slug}`} className="block h-full rounded-2xl border border-mist bg-white p-6 shadow-soft transition-shadow duration-200 hover:shadow-lift">
                  <IconTile name={s.icon} />
                  <h3 className="mt-4 text-lg font-medium first-letter:uppercase">{s.name}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{s.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Featured products */}
      <section className="border-y border-mist bg-white py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Featured products" title="AI products, ready to work" text="Purpose-built for specific problems. Proven foundations, configured for your business." />
            <Button href="/products" variant="ghost">View all products</Button>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <li key={p.slug}><ProductCard product={p} /></li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Industries */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Industries we serve" title="One studio. Many verticals." text="Every industry has its own workflows, data and constraints. We build with them in mind." />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`} className="group flex h-full flex-col rounded-2xl border border-mist bg-white p-6 shadow-soft transition-shadow duration-200 hover:shadow-lift">
                  <IconTile name={i.icon} />
                  <h3 className="mt-4 text-xl font-medium">{i.name}</h3>
                  <p className="mt-1.5 flex-1 leading-relaxed text-muted">{i.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-violet-deep">
                    See use cases <Icon name="arrow" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-periwinkle p-6 transition-colors hover:bg-white">
                <h3 className="text-xl font-medium">Something else?</h3>
                <p className="mt-1.5 leading-relaxed text-muted">If your industry isn&apos;t listed, tell us about it. Good problems come from everywhere.</p>
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      {/* Why Cogninova */}
      <section className="border-y border-mist bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Why Cogninova" title="We turn AI into products that work." />
          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Approach */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Our approach" title="A clear path from problem to product" />
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

      <CtaBand />
    </>
  );
}
