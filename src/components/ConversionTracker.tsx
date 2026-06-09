"use client";

import { useEffect } from "react";
import { trackContactClick, channelFromHref } from "@/lib/analytics";

/**
 * Mounted once at the app root. Uses a single delegated click listener to catch
 * every contact action on the page (WhatsApp / Messenger / phone), no matter
 * which component renders it, and forwards a conversion event to whatever
 * analytics provider is installed. Zero cost until a provider exists.
 */
export function ConversionTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement | null)?.closest("a");
      if (!target) return;
      const channel = channelFromHref(target.getAttribute("href"));
      if (!channel) return;
      const location =
        target.getAttribute("data-cta-location") ||
        target.closest("[data-section]")?.getAttribute("data-section") ||
        "page";
      trackContactClick(channel, location);
    }
    document.addEventListener("click", onClick, { capture: true, passive: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
