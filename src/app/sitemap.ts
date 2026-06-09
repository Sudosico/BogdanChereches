import type { MetadataRoute } from "next";
import { SEO } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SEO.url.replace(/\/$/, "");
  const now = new Date();

  const routes = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/ce-este-bowen", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/despre", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/confidentialitate", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
