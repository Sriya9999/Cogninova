"use client";

import { useState } from "react";
import type { Product } from "@/content/products";
import { ProductCard } from "./ProductCard";

type Filter = { value: string; label: string };

export function ProductExplorer({ products, industries }: { products: Product[]; industries: Filter[] }) {
  const [industry, setIndustry] = useState("all");
  const [category, setCategory] = useState("all");
  const categories = Array.from(new Set(products.map((p) => p.category)));

  const shown = products.filter(
    (p) => (industry === "all" || p.industries.includes(industry)) && (category === "all" || p.category === category),
  );

  const group = (label: string, value: string, set: (v: string) => void, options: Filter[]) => (
    <div role="group" aria-label={`Filter by ${label}`} className="flex flex-wrap items-center gap-2">
      <span className="mr-1 w-20 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</span>
      {[{ value: "all", label: "All" }, ...options].map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => set(o.value)}
          className={`h-9 rounded-full border px-4 text-sm transition-colors ${
            value === o.value ? "border-ink bg-ink text-white" : "border-mist bg-white text-ink/80 hover:border-periwinkle"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );

  return (
    <div>
      <div className="space-y-3">
        {group("Industry", industry, setIndustry, industries)}
        {group("Function", category, setCategory, categories.map((c) => ({ value: c, label: c })))}
      </div>
      <p className="mt-6 text-sm text-muted" aria-live="polite">
        {shown.length} {shown.length === 1 ? "product" : "products"}
      </p>
      {shown.length ? (
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <li key={p.slug}><ProductCard product={p} /></li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 rounded-2xl border border-dashed border-mist bg-white p-10 text-center text-muted">
          No products match these filters yet. Try a different combination, or ask us about a custom build.
        </p>
      )}
    </div>
  );
}
