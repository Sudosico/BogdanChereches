"use client";

import { useEffect, useRef, useCallback, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";

const NAV_OFFSET = -80; // height of the fixed navbar

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number>(0);

  const raf = useCallback((time: number) => {
    lenisRef.current?.raf(time);
    rafIdRef.current = requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    // On iOS we skip Lenis; native anchor scrolling works there (scroll-margin
    // handles the navbar offset, see globals.css).
    if (isIOS) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    rafIdRef.current = requestAnimationFrame(raf);

    // Lenis hijacks scrolling, so native `#anchor` links stop working. Intercept
    // same-page hash links and drive Lenis to the target instead.
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return;
      const anchor = (e.target as HTMLElement | null)?.closest(
        'a[href*="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const url = new URL(anchor.href, window.location.href);
      // Only handle in-page links (same path, has a hash).
      if (url.pathname !== window.location.pathname || !url.hash) return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, {
        offset: NAV_OFFSET,
        duration: 1.1,
      });
      history.pushState(null, "", url.hash);
    }

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafIdRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [raf]);

  // reducedMotion="user" makes every framer-motion animation honor the OS
  // "reduce motion" setting (WCAG 2.3.3) — movement is dropped, fades remain.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
