"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CONTACT, waLink } from "@/lib/constants";
import { useContent, useLocale } from "@/components/ContentProvider";
import { localizeHref } from "@/lib/href";
import { cn } from "@/lib/utils";

const SUBPAGE_NAV = [
  { ro: "Ce este Bowen", en: "What is Bowen", href: "/ce-este-bowen" },
  { ro: "Despre", en: "About", href: "/despre" },
  { ro: "Contact", en: "Contact", href: "/contact" },
  { ro: "Întrebări", en: "FAQ", href: "/faq" },
];

const HOME_NAV = [
  { ro: "Ce este Bowen", en: "What is Bowen", href: "#ce-este-bowen" },
  { ro: "Ședința", en: "The session", href: "#sedinta" },
  { ro: "Despre", en: "About", href: "#despre" },
  { ro: "Locații", en: "Locations", href: "#locatii" },
  { ro: "Întrebări", en: "FAQ", href: "#faq" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/en";
  const [scrolled, setScrolled] = useState(!isHome);
  const [mobileOpen, setMobileOpen] = useState(false);

  const locale = useLocale();
  const en = locale === "en";
  const { HERO } = useContent();
  const navLinks = isHome ? HOME_NAV : SUBPAGE_NAV;

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href={localizeHref("/", locale)}
            className={cn(
              "font-heading text-lg md:text-xl font-semibold transition-colors",
              scrolled ? "text-navy" : "text-white"
            )}
          >
            Bogdan Cherecheș
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={localizeHref(link.href, locale)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-sage",
                    scrolled ? "text-navy/70" : "text-white/80"
                  )}
                >
                  {en ? link.en : link.ro}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={localizeHref(link.href, locale)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-sage",
                    scrolled ? "text-navy/70" : "text-white/80",
                    pathname === link.href && "text-sage"
                  )}
                >
                  {en ? link.en : link.ro}
                </Link>
              )
            )}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-cta-location="navbar"
              className="bg-sage hover:bg-sage-light text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-sage/20"
            >
              {HERO.ctaPrimary}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-navy" : "text-white"
            )}
            aria-label={
              en
                ? mobileOpen
                  ? "Close menu"
                  : "Open menu"
                : mobileOpen
                  ? "Închide meniul"
                  : "Deschide meniul"
            }
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <a
                    key={link.href}
                    href={localizeHref(link.href, locale)}
                    onClick={() => setMobileOpen(false)}
                    className="block text-navy/70 hover:text-sage text-base font-medium py-2 transition-colors"
                  >
                    {en ? link.en : link.ro}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={localizeHref(link.href, locale)}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block text-navy/70 hover:text-sage text-base font-medium py-2 transition-colors",
                      pathname === link.href && "text-sage"
                    )}
                  >
                    {en ? link.en : link.ro}
                  </Link>
                )
              )}
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-cta-location="navbar-mobile"
                className="block text-center bg-sage text-white font-medium px-5 py-3 rounded-full mt-3"
              >
                {HERO.ctaPrimary}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
