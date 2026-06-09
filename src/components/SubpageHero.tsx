"use client";

import { BlurFadeIn } from "@/components/animations/BlurFadeIn";

interface SubpageHeroProps {
  label: string;
  title: string;
  description?: string;
}

export function SubpageHero({ label, title, description }: SubpageHeroProps) {
  return (
    <section className="relative bg-forest-deep pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_0%,rgba(44,77,64,0.55),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_90%,rgba(190,138,62,0.1),transparent_55%)]" />
      <div className="absolute inset-0 noise-texture opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <BlurFadeIn delay={0.1}>
          <span className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-6 h-px bg-honey/60" />
            <span className="text-honey-soft text-xs font-semibold tracking-[0.28em] uppercase">
              {label}
            </span>
            <span className="w-6 h-px bg-honey/60" />
          </span>
        </BlurFadeIn>
        <BlurFadeIn delay={0.2} blur={15}>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-bone leading-[1.05] tracking-[-0.02em] mb-4">
            {title}
          </h1>
        </BlurFadeIn>
        {description && (
          <BlurFadeIn delay={0.3}>
            <p className="text-bone/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </BlurFadeIn>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bone to-transparent" />
    </section>
  );
}
