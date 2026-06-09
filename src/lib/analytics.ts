// Provider-agnostic conversion tracking. Every function is a safe no-op until
// the owner adds GA4 (gtag), Google Tag Manager (dataLayer) or Meta Pixel (fbq).
// Wiring the events now means conversions are measured from day one of ads.

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
