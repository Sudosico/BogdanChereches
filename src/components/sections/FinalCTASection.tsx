"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { BlurFadeIn } from "@/components/animations/BlurFadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTAButton } from "@/components/CTAButton";
import { FunnelModal } from "@/components/FunnelModal";
import { ReassuranceStrip } from "@/components/ReassuranceStrip";
import { CONTACT } from "@/lib/constants";
import { useContent, useLocale } from "@/components/ContentProvider";
import { Leaf, Star } from "lucide-react";

export function FinalCTASection() {
  const [funnelOpen, setFunnelOpen] = useState(false);
  const { FINAL_CTA } = useContent();
  const en = useLocale() === "en";

  return (
    <SectionWrapper
      dark
      className="text-center"
      bgLayer={
        <>
          {/* Full-section vertical gradient: lighter forest at top → deep
              forest at the base, so the whole section reads as one gradient. */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1C3A30_0%,#16271F_50%,#0E1B15_100%)]" />
          {/* Cool sage glow up top, warm honey glow at the bottom for depth. */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(111,156,138,0.18),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_100%,rgba(190,138,62,0.13),transparent_70%)]" />
          <div className="absolute inset-0 noise-texture opacity-30" />
        </>
      }
    >
      <div className="relative z-10 max-w-3xl mx-auto">
        <BlurFadeIn blur={20}>
          <div className="w-20 h-20 rounded-full bg-sage/10 backdrop-blur-sm border border-sage/10 flex items-center justify-center mx-auto mb-8">
            <Leaf className="w-9 h-9 text-sage-light" />
          </div>
        </BlurFadeIn>

        <BlurFadeIn delay={0.15} blur={20}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {FINAL_CTA.headline}
          </h2>
        </BlurFadeIn>

        <ScrollReveal delay={0.2}>
          <p className="text-white/50 text-lg md:text-xl mb-8 max-w-xl mx-auto leading-relaxed">
            {FINAL_CTA.subheadline}
          </p>
        </ScrollReveal>

        {/* Social proof directly above the CTA — reduces last-moment hesitation */}
        <ScrollReveal delay={0.25}>
          <div className="inline-flex items-center gap-2.5 mb-8">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-honey text-honey" />
              ))}
            </div>
            <span className="text-bone/70 text-sm">
              {en
                ? "Real reviews from clients in Zalău and Șimleu"
                : "Recenzii reale de la clienți din Zalău și Șimleu"}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              href="#"
              label={FINAL_CTA.buttons.whatsapp}
              variant="whatsapp"
              size="lg"
              onClick={(e) => {
                e?.preventDefault?.();
                setFunnelOpen(true);
              }}
            />
            <CTAButton
              href={CONTACT.messenger}
              label={FINAL_CTA.buttons.messenger}
              variant="ghost-light"
              size="lg"
            />
            <CTAButton
              href={`tel:${CONTACT.phone}`}
              label={FINAL_CTA.buttons.phone}
              variant="ghost-light"
              size="lg"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <ReassuranceStrip tone="dark" align="center" className="mt-7" />
        </ScrollReveal>
      </div>

      <FunnelModal open={funnelOpen} onClose={() => setFunnelOpen(false)} />
    </SectionWrapper>
  );
}
