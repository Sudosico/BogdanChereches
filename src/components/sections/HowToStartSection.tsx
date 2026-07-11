"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTAButton } from "@/components/CTAButton";

import { CONTACT, waLink } from "@/lib/constants";
import { useContent, useLocale } from "@/components/ContentProvider";
import { MessageCircle, Calendar, Smile } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  MessageCircle,
  Calendar,
  Smile,
};

export function HowToStartSection() {
  const { HOW_TO_START } = useContent();
  const en = useLocale() === "en";
  return (
    <SectionWrapper className="bg-cream/50 overflow-hidden">
      <ScrollReveal className="text-center mb-16">
        <span className="text-sage text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
          {en ? "Get started" : "Începe acum"}
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-navy mb-4 leading-[1.1]">
          {HOW_TO_START.title}
        </h2>
        <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
          {HOW_TO_START.subtitle}
        </p>
      </ScrollReveal>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-0 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-px">
            <svg className="w-full h-8" viewBox="0 0 600 32" fill="none" preserveAspectRatio="none">
              <path
                d="M0,16 C100,4 200,28 300,16 C400,4 500,28 600,16"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
              />
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(74,124,111,0.15)" />
                  <stop offset="50%" stopColor="rgba(74,124,111,0.3)" />
                  <stop offset="100%" stopColor="rgba(196,149,106,0.15)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {HOW_TO_START.steps.map((step, i) => {
            const Icon = ICON_MAP[step.icon] || MessageCircle;

            return (
              <ScrollReveal key={step.title} delay={i * 0.15}>
                <div className="text-center relative px-4">
                  {/* Step circle with ring */}
                  <div className="relative z-10 mx-auto mb-8">
                    <div className="w-24 h-24 rounded-full bg-white border border-sage/10 flex items-center justify-center mx-auto shadow-lg shadow-sage/[0.04] relative">
                      <Icon className="w-9 h-9 text-sage" />
                      <div className="absolute -top-1.5 -right-1.5 w-8 h-8 rounded-full bg-gradient-to-br from-sage to-sage-light text-white text-xs font-bold flex items-center justify-center shadow-md shadow-sage/20">
                        {step.step}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm max-w-[260px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
            <CTAButton
              href={waLink()}
              label={en ? "Message on WhatsApp" : "Scrie pe WhatsApp"}
              variant="whatsapp"
              size="lg"
            />
            <CTAButton
              href={CONTACT.messenger}
              label={en ? "Message on Messenger" : "Scrie pe Messenger"}
              variant="messenger"
              size="lg"
            />
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
