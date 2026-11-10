import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconTile } from "@/components/Icon";
import { ProductCard } from "@/components/ProductCard";
import { Button, Card, Container, CtaBand, Eyebrow, SectionHeading } from "@/components/ui";
import { getIndustry, industries } from "@/content/industries";
import { productsForIndustry } from "@/content/products";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => industries.map((i) => ({ slug: i.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = getIndustry((await params).slug);
  if (!industry) return {};
  return { title: industry.seoTitle, description: industry.seoDescription };
}

export default async function IndustryPage({ params }: Props) {
  const industry = getIndustry((await params).slug);
  if (!industry) notFound();
  const recommended = productsForIndustry(industry.slug);

  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] size-[34rem] rounded-full bg-periwinkle/30 blur-3xl" />
        <Container className="relative pb-14 pt-10 sm:pb-20 sm:pt-14">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/industries" className="hover:text-violet-deep">Industries</Link>
            <span aria-hidden className="mx-2">/</span>
            <span aria-current="page">{industry.name}</span>
          </nav>
          <div className="mt-10 max-w-3xl animate-rise">
            <div className="flex items-center gap-3">
              <IconTile name={industry.icon} className="!size-12" />
              <Eyebrow>AI for {industry.name}</Eyebrow>
            </div>
            <h1 className="mt-5 text-4xl font-medium leading-[1.05] sm:text-6xl">{industry.headline}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{industry.intro}</p>
            <div className="mt-8">
              <Button href={`/contact?industry=${industry.slug}`}>Talk to Us</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-mist bg-white py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <Eyebrow>The challenges</Eyebrow>
            <ul className="mt-5 space-y-4">
              {industry.challenges.map((c) => (
                <li key={c} className="border-l-2 border-periwinkle pl-4 font-display text-lg leading-snug tracking-tight">{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>How we help</Eyebrow>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {industry.useCases.map((u) => (
                <li key={u.title}>
                  <Card className="h-full !bg-cloud !shadow-none">
                    <h2 className="font-sans text-base font-semibold tracking-normal">{u.title}</h2>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{u.text}</p>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {recommended.length > 0 && (
        <section className="py-16 sm:py-24">
          <Container>
            <SectionHeading eyebrow="Recommended products" title={`Built for ${industry.name.toLowerCase()} teams`} />
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recommended.map((p) => (
                <li key={p.slug}><ProductCard product={p} /></li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CtaBand href={`/contact?industry=${industry.slug}`} />
    </>
  );
}
