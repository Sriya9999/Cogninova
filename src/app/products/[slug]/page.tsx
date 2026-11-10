import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon, IconTile } from "@/components/Icon";
import { ProductCard } from "@/components/ProductCard";
import { Button, Card, Container, CtaBand, Eyebrow, SectionHeading } from "@/components/ui";
import { getIndustry } from "@/content/industries";
import { getProduct, products } from "@/content/products";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return { title: `${product.name} — ${product.tagline.replace(/\.$/, "")}`, description: product.overview };
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const demoHref = `/contact?product=${product.slug}`;
  const related = products.filter((p) => p.slug !== product.slug && p.industries.some((i) => product.industries.includes(i))).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] size-[34rem] rounded-full bg-periwinkle/30 blur-3xl" />
        <Container className="relative pb-14 pt-10 sm:pb-20 sm:pt-14">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/products" className="hover:text-violet-deep">Products</Link>
            <span aria-hidden className="mx-2">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>
          <div className="mt-10 max-w-3xl animate-rise">
            <div className="flex items-center gap-3">
              <IconTile name={product.icon} className="!size-12" />
              <Eyebrow>{product.category}</Eyebrow>
            </div>
            <h1 className="mt-5 text-4xl font-medium leading-[1.05] sm:text-6xl">{product.name}</h1>
            <p className="mt-4 font-display text-xl tracking-tight text-ink/80 sm:text-2xl">{product.tagline}</p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{product.overview}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button href={demoHref}>Request a Demo</Button>
              <Button href="/products" variant="ghost">All products</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-mist bg-white py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <Eyebrow>The problem</Eyebrow>
            <p className="mt-4 font-display text-2xl font-medium leading-snug tracking-tight">{product.problem}</p>
          </div>
          <div>
            <Eyebrow>Key capabilities</Eyebrow>
            <ul className="mt-4 divide-y divide-mist border-y border-mist">
              {product.capabilities.map((c) => (
                <li key={c.title} className="grid gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                  <h2 className="font-sans text-base font-semibold tracking-normal">{c.title}</h2>
                  <p className="text-muted">{c.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-5 lg:grid-cols-3">
          <Card className="p-8">
            <h2 className="text-xl font-medium">Features</h2>
            <ul className="mt-5 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3 text-muted">
                  <Icon name="check" className="mt-1 size-4 shrink-0 text-violet-deep" />
                  {f}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8">
            <h2 className="text-xl font-medium">Who it&apos;s for</h2>
            <ul className="mt-5 space-y-3">
              {product.audience.map((a) => (
                <li key={a} className="flex gap-3 text-muted">
                  <Icon name="check" className="mt-1 size-4 shrink-0 text-violet-deep" />
                  {a}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8">
            <h2 className="text-xl font-medium">Industries</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {product.industries.map((slug) => {
                const industry = getIndustry(slug);
                return industry ? (
                  <li key={slug}>
                    <Link href={`/industries/${slug}`} className="inline-flex h-9 items-center rounded-full border border-mist bg-cloud px-4 text-sm transition-colors hover:border-periwinkle hover:text-violet-deep">
                      {industry.name}
                    </Link>
                  </li>
                ) : null;
              })}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              See it working with your own workflows and data in a guided demo.
            </p>
            <Button href={demoHref} variant="ghost" className="mt-2">Request a demo</Button>
          </Card>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-mist bg-white py-16 sm:py-24">
          <Container>
            <SectionHeading eyebrow="Related products" title="Works well alongside" />
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}><ProductCard product={p} /></li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CtaBand title={`See ${product.name} in action.`} text="Book a walkthrough tailored to your team and use case." label="Request a Demo" href={demoHref} />
    </>
  );
}
