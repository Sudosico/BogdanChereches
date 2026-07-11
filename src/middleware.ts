import { NextResponse, type NextRequest } from "next/server";

// Search engines + social/link crawlers. These are NEVER geo-redirected, so
// Googlebot (which crawls from non-RO IPs) always sees the Romanian site and
// the "bowen zalău / șimleu" ranking is preserved.
const BOT_RE =
  /bot|crawl|spider|slurp|googlebot|bingbot|duckduckbot|baiduspider|yandex|sogou|exabot|facebookexternalhit|facebot|ia_archiver|linkedinbot|embedly|quora link preview|pinterest|slackbot|vkshare|w3c_validator|twitterbot|telegrambot|whatsapp|discordbot|applebot|petalbot|semrush|ahrefs|mj12bot|dotbot/i;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const locale = isEn ? "en" : "ro";

  // Only Romanian paths are eligible for a geo redirect to /en.
  if (!isEn) {
    const country = request.headers.get("x-vercel-ip-country"); // e.g. "US", "RO"
    const ua = request.headers.get("user-agent") || "";
    const isBot = BOT_RE.test(ua);
    const chosen = request.cookies.get("locale")?.value; // manual override, if any

    // Redirect only genuine foreign human visitors who have not chosen Romanian.
    if (country && country !== "RO" && !isBot && chosen !== "ro") {
      const url = request.nextUrl.clone();
      url.pathname = "/en" + (pathname === "/" ? "" : pathname);
      return NextResponse.redirect(url, 307);
    }
  }

  // Pass the resolved locale to the app (read in the root layout).
  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  // Run on page routes only: skip _next internals, api, and any file with an
  // extension (images, sitemap.xml, robots.txt, icon.svg, og-image, ...).
  matcher: ["/((?!_next/|api/|.*\\.).*)"],
};
