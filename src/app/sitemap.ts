import type { MetadataRoute } from "next";
import { SEO } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SEO.url.replace(/\/$/, "");
  const now = new Date();

  const routes = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/ce-este-bowen", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/despre", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/confidentialitate", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/en", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/en/ce-este-bowen", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/en/despre", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/en/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/en/faq", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/en/confidentialitate", priority: 0.1, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
