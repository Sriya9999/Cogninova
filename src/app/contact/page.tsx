import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { Container, Eyebrow } from "@/components/ui";
import { getIndustry, industries } from "@/content/industries";
import { getProduct } from "@/content/products";
import { interestAreas, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact — Let's Build Together",
  description: "Tell Cogninova about your AI project. Request a product demo, discuss a custom AI solution or explore a partnership.",
};

type Props = { searchParams: Promise<{ product?: string; industry?: string }> };

const steps = [
  "We review your enquiry and reply by email.",
  "A short call to understand the problem and your goals.",
  "A clear proposal: approach, scope and next steps.",
];

export default async function ContactPage({ searchParams }: Props) {
  const query = await searchParams;
  const product = query.product ? getProduct(query.product) : undefined;
  const industry = query.industry ? getIndustry(query.industry) : undefined;

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-[-10%] size-[34rem] rounded-full bg-periwinkle/30 blur-3xl" />
      <Container className="relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <div className="animate-rise">
          <Eyebrow>{product ? "Request a demo" : "Contact"}</Eyebrow>
          <h1 className="mt-4 text-4xl font-medium leading-[1.05] sm:text-6xl">
            {product ? `See ${product.name} in action.` : "Let's build together."}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Tell us what you&apos;re trying to solve. Whether it&apos;s a product demo, a custom build or a partnership, we&apos;d like to hear about it.
          </p>

          <h2 className="mt-10 font-sans text-sm font-semibold tracking-normal">What happens next</h2>
          <ol className="mt-4 space-y-3">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-3 text-muted">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-violet/10 text-xs font-semibold text-violet-deep">{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>

          <h2 className="mt-10 font-sans text-sm font-semibold tracking-normal">Prefer to reach us directly?</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 hover:text-violet-deep">
                <Icon name="mail" className="size-4 text-violet-deep" /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 hover:text-violet-deep">
                <Icon name="arrow" className="size-4 -rotate-45 text-violet-deep" /> Cogninova on LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <ContactForm
          key={`${product?.slug}-${industry?.slug}`}
          industries={industries.map((i) => i.name)}
          interests={interestAreas}
          email={site.email}
          defaultInterest={product ? interestAreas[0] : undefined}
          defaultIndustry={industry?.name}
          defaultMessage={product ? `I'd like to see a demo of ${product.name}.\n\n` : undefined}
        />
      </Container>
    </section>
  );
}
