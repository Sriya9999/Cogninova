import type { MetadataRoute } from "next";
import { industries } from "@/content/industries";
import { products } from "@/content/products";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "", "/about", "/products", "/solutions", "/industries", "/contact",
    ...products.map((p) => `/products/${p.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
  ];
  return paths.map((path) => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 }));
}
