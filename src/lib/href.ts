import type { Locale } from "@/lib/content";

// Prefix internal absolute paths with /en on the English side. Anchors (#...)
// and external URLs (http, wa.me, tel:, mailto:) are returned unchanged.
export function localizeHref(href: string, locale: Locale): string {
  if (locale !== "en") return href;
  if (!href.startsWith("/")) return href;
  if (href === "/en" || href.startsWith("/en/")) return href;
  return href === "/" ? "/en" : "/en" + href;
}
