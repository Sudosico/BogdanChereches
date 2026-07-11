"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { waLink } from "@/lib/constants";
import { useContent, useLocale } from "@/components/ContentProvider";
import { ReassuranceStrip } from "@/components/ReassuranceStrip";
import { trackContactClick } from "@/lib/analytics";

interface FunnelModalProps {
  open: boolean;
  onClose: () => void;
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function FunnelModal({ open, onClose }: FunnelModalProps) {
  const { FUNNEL } = useContent();
  const en = useLocale() === "en";
  // Escape-to-close + lock background scroll while open.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  function handleOption(message: string) {
    trackContactClick("whatsapp", "funnel");
    const text = en
      ? `Hi, I'd like to book a Bowen session for ${message}. Thank you!`
      : `Salut, aș dori o programare Bowen pentru ${message}. Mulțumesc!`;
    const url = waLink(text);
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-forest-deep/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative bg-card rounded-3xl p-7 md:p-9 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={FUNNEL.title}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-forest transition-colors p-1"
              aria-label={en ? "Close" : "Închide"}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-[#1FAA53]/10 text-[#178A43] rounded-full px-3.5 py-1.5 mb-4">
                <WhatsAppGlyph className="w-4 h-4" />
                <span className="text-xs font-semibold tracking-wide">
                  {en ? "WhatsApp message, already written" : "Mesaj pe WhatsApp, deja scris"}
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-forest mb-1.5">
                {FUNNEL.title}
              </h3>
              <p className="text-muted-foreground text-sm">{FUNNEL.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {FUNNEL.options.map((option, i) => {
                const isLast = i === FUNNEL.options.length - 1;
                return (
                  <motion.button
                    key={option.label}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleOption(option.message)}
                    className={cnLast(isLast, FUNNEL.options.length)}
                  >
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="text-sm font-medium text-forest">
                      {option.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-6 pt-5 border-t border-border">
              <ReassuranceStrip align="center" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Make an odd final option span the full row so the grid never has an orphan gap.
function cnLast(isLast: boolean, total: number) {
  const base =
    "flex flex-col items-center gap-2 p-4 rounded-2xl bg-bone hover:bg-sage/5 border border-border hover:border-sage/30 transition-colors cursor-pointer";
  const spanFull = isLast && total % 2 === 1 ? " col-span-2" : "";
  return base + spanFull;
}
