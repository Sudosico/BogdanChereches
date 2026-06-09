"use client";

import { useState } from "react";
import Image from "next/image";
import { CONTACT, IMAGES } from "@/lib/constants";
import { BlurFadeIn } from "@/components/animations/BlurFadeIn";
import { CTAButton } from "@/components/CTAButton";
import { FunnelModal } from "@/components/FunnelModal";
import { ReassuranceStrip } from "@/components/ReassuranceStrip";
import { Star } from "lucide-react";

export function HeroSection() {
  const [funnelOpen, setFunnelOpen] = useState(false);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-forest-deep">
      {/* Full-bleed background photograph */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Cameră de tratament pentru terapie Bowen, calmă și primitoare"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Brand + readability overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/88 via-forest-deep/72 to-forest-deep/94" />
      <div className="absolute inset-0 bg-[radial-gradient(75%_65%_at_50%_42%,transparent,rgba(20,36,31,0.55))]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_90%,rgba(190,138,62,0.08),transparent_60%)]" />
      <div className="absolute inset-0 noise-texture opacity-30" />

      {/* Centered content */}
      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 sm:px-6 text-center pt-24 pb-20">
        <BlurFadeIn delay={0.1} blur={16}>
          <div className="inline-flex items-center gap-2.5 mb-7">
            <span className="w-6 h-px bg-honey/60" />
            <span className="text-honey-soft text-xs font-semibold tracking-[0.28em] uppercase">
              Terapie Bowen
            </span>
            <span className="w-6 h-px bg-honey/60" />
          </div>
        </BlurFadeIn>

        <BlurFadeIn delay={0.25} blur={22}>
          <h1 className="font-heading text-[2.85rem] sm:text-6xl lg:text-7xl font-extrabold text-bone leading-[1.04] tracking-[-0.025em] mb-6">
            Corpul tău știe
            <br />
            să se{" "}
            <span className="italic font-bold text-honey-soft leading-[1.1]">
              vindece.
            </span>
          </h1>
        </BlurFadeIn>

        <BlurFadeIn delay={0.4}>
          <p className="text-bone/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-7">
            Eliberează tensiunea, stresul și durerile printr-o terapie blândă, în
            Zalău și Șimleu Silvaniei. La un mesaj distanță de Bogdan.
          </p>
        </BlurFadeIn>

        <BlurFadeIn delay={0.5}>
          <div className="flex items-center justify-center gap-2.5 mb-8">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-honey text-honey" />
              ))}
            </div>
            <span className="text-bone/65 text-sm">
              Recomandat de clienți din Zalău și Șimleu
            </span>
          </div>
        </BlurFadeIn>

        <BlurFadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <CTAButton
              href="#"
              label="Programează pe WhatsApp"
              variant="whatsapp"
              size="lg"
              onClick={(e) => {
                e?.preventDefault?.();
                setFunnelOpen(true);
              }}
            />
            <CTAButton
              href={CONTACT.messenger}
              label="Scrie pe Messenger"
              variant="ghost-light"
              size="lg"
            />
          </div>
        </BlurFadeIn>

        <BlurFadeIn delay={0.7}>
          <ReassuranceStrip tone="dark" align="center" className="mt-7" />
        </BlurFadeIn>
      </div>

      {/* Blend into the section below */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-forest-deep" />

      <FunnelModal open={funnelOpen} onClose={() => setFunnelOpen(false)} />
    </section>
  );
}
