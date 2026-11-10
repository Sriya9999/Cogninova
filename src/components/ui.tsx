import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

const variants = {
  primary: "bg-ink text-white hover:bg-violet-deep shadow-soft",
  light: "bg-white text-ink hover:bg-periwinkle",
  ghost: "text-ink hover:text-violet-deep",
};

export function Button({
  href, children, variant = "primary", arrow = true, className = "",
}: { href: string; children: ReactNode; variant?: keyof typeof variants; arrow?: boolean; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-200 ${
        variant === "ghost" ? "px-1" : "px-5"
      } ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && <Icon name="arrow" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-deep">{children}</p>;
}

export function SectionHeading({
  eyebrow, title, text, className = "",
}: { eyebrow?: string; title: string; text?: string; className?: string }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl font-medium leading-[1.1] sm:text-[2.6rem]">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-muted">{text}</p>}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-mist bg-white p-6 shadow-soft ${className}`}>{children}</div>;
}

export function PageHero({
  eyebrow, title, text, children,
}: { eyebrow: string; title: string; text: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] size-[34rem] rounded-full bg-periwinkle/30 blur-3xl" />
      <Container className="relative pb-14 pt-16 sm:pb-20 sm:pt-24">
        <div className="max-w-3xl animate-rise">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl font-medium leading-[1.05] sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{text}</p>
          {children && <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}

export function CtaBand({
  title = "Let's build what's next — together.",
  text = "Tell us about the problem you want to solve. We'll show you how AI can help.",
  label = "Let's Talk About Your AI Project",
  href = "/contact",
}: { title?: string; text?: string; label?: string; href?: string }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-12 text-white sm:px-14 sm:py-16">
          <svg aria-hidden viewBox="0 0 600 300" className="pointer-events-none absolute -right-20 top-0 h-full w-[38rem] text-periwinkle/20" fill="none" stroke="currentColor">
            <ellipse cx="380" cy="210" rx="330" ry="150" transform="rotate(-18 380 210)" />
            <ellipse cx="420" cy="250" rx="330" ry="150" transform="rotate(-18 420 250)" />
          </svg>
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-medium leading-tight sm:text-4xl">{title}</h2>
              <p className="mt-3 text-lg text-white/70">{text}</p>
            </div>
            <Button href={href} variant="light" className="self-start lg:self-auto">{label}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
