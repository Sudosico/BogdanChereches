"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Leaf } from "lucide-react";
import { useExitIntent } from "@/hooks/useExitIntent";
import { CONTACT, waLink } from "@/lib/constants";
import { useLocale } from "@/components/ContentProvider";
import { CTAButton } from "@/components/CTAButton";
import { ReassuranceStrip } from "@/components/ReassuranceStrip";

export function ExitIntentModal() {
  const { showModal, close } = useExitIntent();
  const en = useLocale() === "en";

  useEffect(() => {
    if (!showModal) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [showModal, close]);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-forest-deep/70 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative bg-card rounded-3xl p-8 md:p-9 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={en ? "Book a session" : "Programează o ședință"}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 text-muted-foreground hover:text-forest transition-colors p-1"
              aria-label={en ? "Close" : "Închide"}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Leaf className="w-7 h-7 text-sage" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-forest mb-2">
                {en ? "Before you go..." : "Înainte să pleci..."}
              </h3>
              <p className="text-muted-foreground mb-6">
                {en
                  ? "A short message is all it takes. Message Bogdan and find out when he can see you, with no obligation."
                  : "Un mesaj scurt e tot ce trebuie. Scrie-i lui Bogdan și află când te poate primi, fără nicio obligație."}
              </p>

              <div className="flex flex-col gap-3">
                <CTAButton
                  href={waLink()}
                  label={en ? "Message on WhatsApp" : "Scrie pe WhatsApp"}
                  variant="whatsapp"
                  size="lg"
                  className="w-full"
                />
                <CTAButton
                  href={CONTACT.messenger}
                  label={en ? "Message on Messenger" : "Mesaj pe Messenger"}
                  variant="ghost-dark"
                  size="lg"
                  className="w-full"
                />
              </div>

              <ReassuranceStrip align="center" className="mt-6" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
