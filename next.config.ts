import type { NextConfig } from "next";

// Content Security Policy. 'unsafe-inline' is required for Next's inline runtime
// + the JSON-LD structured-data scripts + framer-motion inline styles. The site
// has no user input or auth surface, so the main value here is clickjacking
// protection (frame-ancestors), locking base-uri/form-action, and blocking
// plugins/object embeds. Google Maps embed is explicitly allowed in frame-src.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "img-src 'self' data: blob: https:",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://connect.facebook.net https://*.facebook.com https://vitals.vercel-insights.com",
  "frame-src 'self' https://www.google.com https://maps.google.com https://www.facebook.com",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  // Hide the on-screen Next.js dev indicator (bottom-left). It only renders in
  // development, but we disable it explicitly.
  devIndicators: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
