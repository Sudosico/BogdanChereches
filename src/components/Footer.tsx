import Link from "next/link";

import { FOOTER, CONTACT, waLink } from "@/lib/constants";
import { Leaf } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Ce este Bowen", href: "/ce-este-bowen" },
  { label: "Despre", href: "/despre" },
  { label: "Contact & Locații", href: "/contact" },
  { label: "Întrebări frecvente", href: "/faq" },
  { label: "Confidențialitate", href: "/confidentialitate" },
];

export function Footer() {
  return (
    <footer className="relative bg-navy text-white/60 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(74,124,111,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-3">
              <Leaf className="w-5 h-5 text-sage-light" />
              <h3 className="font-heading text-xl font-bold text-white">
                {FOOTER.name}
              </h3>
            </Link>
            <p className="text-white/35 text-sm mb-4">{FOOTER.title}</p>
            <p className="text-sm">{FOOTER.locations}</p>
          </div>

          <div>
            <h4 className="font-semibold text-white/80 text-sm mb-4 tracking-wider uppercase">
              Pagini
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-sage-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white/80 text-sm mb-4 tracking-wider uppercase">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-sage-light transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-sage-light transition-colors"
                >
                  Messenger
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-sm hover:text-sage-light transition-colors"
                >
                  Telefon
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs leading-relaxed mb-2 max-w-3xl text-white/40">
              {FOOTER.disclaimer}
            </p>
            <p className="text-xs text-white/25">{FOOTER.copyright}</p>
            <p className="text-xs text-white/20 mt-1">Made by Răzvan Gheție</p>
          </div>
          <Link
            href="/confidentialitate"
            className="text-xs text-white/25 hover:text-white/50 transition-colors shrink-0"
          >
            Politica de confidențialitate
          </Link>
        </div>
      </div>
    </footer>
  );
}
