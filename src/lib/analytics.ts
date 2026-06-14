// Provider-agnostic conversion tracking. Sends each contact tap to whatever is
// connected: Vercel Analytics (always, once enabled in the dashboard), GA4
// (gtag), Google Tag Manager (dataLayer) and Meta Pixel (fbq) when present.
import { track as vercelTrack } from "@vercel/analytics";

type Channel = "whatsapp" | "messenger" | "phone";

interface WindowWithTrackers {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
  fbq?: (...args: unknown[]) => void;
}

export function trackContactClick(channel: Channel, location = "unknown") {
  if (typeof window === "undefined") return;
  const w = window as unknown as WindowWithTrackers;
  const eventName = `${channel}_click`;

  // Vercel Web Analytics — custom event (shows in the Analytics tab)
  vercelTrack(eventName, { channel, location });

  // GA4
  w.gtag?.("event", eventName, { cta_location: location, channel });

  // Google Tag Manager
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: eventName, cta_location: location, channel });
  }

  // Meta Pixel — standard "Contact" event with channel detail
  w.fbq?.("track", "Contact", { method: channel, location });
}

export function channelFromHref(href: string | null): Channel | null {
  if (!href) return null;
  if (href.includes("wa.me") || href.includes("whatsapp")) return "whatsapp";
  if (href.includes("m.me") || href.includes("messenger")) return "messenger";
  if (href.startsWith("tel:")) return "phone";
  return null;
}
