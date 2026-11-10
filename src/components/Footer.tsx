import Link from "next/link";
import { industries } from "@/content/industries";
import { site } from "@/content/site";
import { Logo } from "./Logo";
import { Container } from "./ui";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Solutions", href: "/solutions" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Industries",
    links: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-mist bg-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{site.statement}</p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-sans text-sm font-semibold tracking-normal">{col.title}</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-violet-deep">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div>
          <h2 className="font-sans text-sm font-semibold tracking-normal">Get in touch</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li><a href={`mailto:${site.email}`} className="transition-colors hover:text-violet-deep">{site.email}</a></li>
            <li><a href={site.linkedin} rel="noopener noreferrer" target="_blank" className="transition-colors hover:text-violet-deep">LinkedIn</a></li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-mist py-6 text-xs text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Cogninova. All rights reserved.</p>
        <p className="uppercase tracking-[0.2em]">{site.tagline}</p>
      </Container>
    </footer>
  );
}
