import Link from "next/link";
import type { Product } from "@/content/products";
import { Icon, IconTile } from "./Icon";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-mist bg-white p-6 shadow-soft transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-lift"
    >
      <div className="flex items-center justify-between">
        <IconTile name={product.icon} />
        <span className="rounded-full bg-cloud px-3 py-1 text-xs text-muted">{product.category}</span>
      </div>
      <h3 className="mt-5 text-xl font-medium">{product.name}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-muted">{product.tagline}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-violet-deep">
        Explore product
        <Icon name="arrow" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
