"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BlurFadeIn } from "@/components/animations/BlurFadeIn";
import { WHAT_IS_BOWEN, IMAGES } from "@/lib/constants";

export function WhatIsBowenSection() {
  return (
    <SectionWrapper id="ce-este-bowen">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Image — offset with decorative frame */}
        <ScrollReveal direction="left" className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="relative">
            {/* Decorative offset border */}
            <div className="absolute -top-3 -left-3 w-full h-full rounded-3xl border border-sage/10" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <ImagePlaceholder
                src={IMAGES.session}
                alt="Bogdan Cherecheș aplicând mișcări blânde de terapie Bowen la nivelul capului și gâtului"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl shadow-sage/5 px-5 py-4 border border-sage/5">
              <div className="text-2xl mb-0.5">🌿</div>
              <p className="text-xs font-semibold text-navy">50-60 min</p>
              <p className="text-[10px] text-muted-foreground tracking-wide">
                per ședință
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="lg:col-span-7">
          <BlurFadeIn>
            <span className="text-sage text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              Despre Terapie
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-navy mb-8 leading-[1.1]">
              {WHAT_IS_BOWEN.title}
            </h2>
          </BlurFadeIn>

          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {WHAT_IS_BOWEN.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="editorial-quote mb-10">
              <p className="text-navy font-medium text-lg leading-relaxed italic">
                {WHAT_IS_BOWEN.highlight}
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline — editorial style with large numbers */}
          <div className="space-y-0">
            {WHAT_IS_BOWEN.timeline.map((item, i) => (
              <ScrollReveal key={item.step} delay={0.05 * i}>
                <div className="group flex gap-5 items-start py-5 border-b border-border/40 last:border-b-0 hover:bg-sage/[0.02] -mx-4 px-4 rounded-xl transition-colors duration-300">
                  <span className="font-heading text-4xl font-bold text-sage/15 group-hover:text-sage/30 transition-colors shrink-0 w-14 tabular-nums">
                    {item.step}
                  </span>
                  <div className="pt-1">
                    <h4 className="font-semibold text-navy mb-0.5 text-base">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
