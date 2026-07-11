"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useContent, useLocale } from "@/components/ContentProvider";
import {
  Feather,
  Moon,
  Shield,
  Timer,
  User,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Feather,
  Moon,
  Shield,
  Timer,
  User,
};

export function SessionFeelSection() {
  const { SESSION_FEEL } = useContent();
  const en = useLocale() === "en";
  const featured = SESSION_FEEL.cards[0];
  const rest = SESSION_FEEL.cards.slice(1);
  const FeaturedIcon = iconMap[featured.icon];

  return (
    <SectionWrapper id="sedinta" className="bg-cream/60">
      <ScrollReveal className="mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <span className="text-sage text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              {en ? "The experience" : "Experiența"}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-navy leading-[1.1]">
              {SESSION_FEEL.title}
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-md lg:text-right leading-relaxed">
            {SESSION_FEEL.subtitle}
          </p>
        </div>
      </ScrollReveal>

      {/* Bento grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Featured photo-backed card */}
        <ScrollReveal className="md:col-span-2 lg:col-span-1 lg:row-span-2">
          <div className="group relative rounded-3xl overflow-hidden h-full min-h-[340px] lg:min-h-[440px]">
            <Image
              src="/images/feel-v4.jpg"
              alt={
                en
                  ? "Gentle Bowen therapy moves on the back, during a relaxing session"
                  : "Mișcări blânde de terapie Bowen pe spate, într-o ședință relaxantă"
              }
              fill
              className="img-forest object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/92 via-forest-deep/45 to-forest-deep/10" />
            <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
              <div className="w-14 h-14 rounded-2xl bg-bone/10 backdrop-blur-sm border border-bone/15 flex items-center justify-center mb-5">
                {FeaturedIcon && <FeaturedIcon className="w-7 h-7 text-bone" />}
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-bone mb-2">
                {featured.title}
              </h3>
              <p className="text-bone/70 text-base leading-relaxed max-w-sm">
                {featured.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-honey-soft/70">
                <div className="w-12 h-px bg-honey/40" />
                <span className="text-xs tracking-[0.2em] uppercase font-medium">
                  01
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Smaller cards */}
        {rest.map((card, i) => {
          const Icon = iconMap[card.icon];
          return (
            <ScrollReveal key={card.title} delay={0.08 * (i + 1)}>
              <div className="bento-card rounded-3xl p-6 md:p-7 h-full min-h-[180px] flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-sage/8 flex items-center justify-center">
                    {Icon && <Icon className="w-5 h-5 text-sage" />}
                  </div>
                  <span className="text-sage/20 text-xs tracking-[0.2em] uppercase font-medium">
                    0{i + 2}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy mb-1.5">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
