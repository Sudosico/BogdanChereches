import type { MetadataRoute } from "next";
import { SEO } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const base = SEO.url.replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
