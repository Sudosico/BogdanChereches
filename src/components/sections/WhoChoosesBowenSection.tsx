"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { WHO_CHOOSES } from "@/lib/constants";
import {
  Brain,
  Battery,
  Activity,
  AlignCenter,
  Sparkles,
  Dumbbell,
  Heart,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Battery,
  Activity,
  AlignCenter,
  Sparkles,
  Dumbbell,
  Heart,
};

export function WhoChoosesBowenSection() {
  return (
    <SectionWrapper>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-10">
        <ScrollReveal className="lg:col-span-5">
          <span className="text-sage text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
            Pentru tine
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-navy leading-[1.1] mb-4">
            {WHO_CHOOSES.title}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            {WHO_CHOOSES.subtitle}
          </p>
        </ScrollReveal>

        {/* First 3 items on right - stacked */}
        <div className="lg:col-span-7 space-y-3">
          {WHO_CHOOSES.items.slice(0, 3).map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="group flex items-start gap-5 bento-card rounded-2xl p-5">
                  <div className="w-12 h-12 rounded-xl bg-sage/8 group-hover:bg-sage/15 flex items-center justify-center shrink-0 transition-colors duration-300">
                    {Icon && <Icon className="w-5.5 h-5.5 text-sage" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Bottom row - 4 items in grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {WHO_CHOOSES.items.slice(3).map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <ScrollReveal key={item.title} delay={0.3 + i * 0.06}>
              <div className="group bento-card rounded-2xl p-5 h-full">
                <div className="w-10 h-10 rounded-lg bg-sage/8 group-hover:bg-sage/15 flex items-center justify-center mb-3 transition-colors duration-300">
                  {Icon && <Icon className="w-5 h-5 text-sage" />}
                </div>
                <h3 className="font-semibold text-navy mb-1 text-[15px]">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mt-8 bg-earth/[0.04] border border-earth/10 rounded-2xl p-5 text-center">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {WHO_CHOOSES.disclaimer}
          </p>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
