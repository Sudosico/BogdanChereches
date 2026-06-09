"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BlurFadeIn } from "@/components/animations/BlurFadeIn";
import { BreathingPulse } from "@/components/animations/BreathingPulse";

import { ABOUT, IMAGES, CONTACT, waLink } from "@/lib/constants";
import { Leaf } from "lucide-react";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 rounded-full bg-navy/[0.03] hover:bg-sage/10 flex items-center justify-center transition-all duration-300 group"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export function AboutBogdanSection() {
  return (
    <SectionWrapper id="despre" className="bg-cream/40">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Photo with editorial treatment */}
        <ScrollReveal direction="left" className="lg:col-span-5">
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden relative">
              <ImagePlaceholder
                src={IMAGES.bogdan}
                alt="Bogdan Cherecheș"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent" />
            </div>

            {/* Floating badge */}
            <BreathingPulse
              className="absolute -bottom-5 -right-5 md:-bottom-6 md:-right-6"
              scale={1.02}
              duration={5}
            >
              <div className="bg-white rounded-2xl shadow-xl shadow-sage/5 p-5 border border-sage/5">
                <Leaf className="w-6 h-6 text-sage mb-1" />
                <p className="text-sm font-semibold text-navy">Terapie Bowen</p>
                <p className="text-[11px] text-muted-foreground">
                  Șimleu Silvaniei & Zalău
                </p>
              </div>
            </BreathingPulse>

            {/* Decorative dots */}
            <div className="absolute -top-6 -left-6 w-24 h-24 dot-pattern opacity-60 rounded-2xl" />
          </div>
        </ScrollReveal>

        {/* Bio */}
        <div className="lg:col-span-7">
          <BlurFadeIn>
            <span className="text-sage text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              Terapeut
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-navy mb-8 leading-[1.1]">
              {ABOUT.title}
            </h2>
          </BlurFadeIn>

          <div className="space-y-5">
            {ABOUT.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {p}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Quote */}
          <ScrollReveal delay={0.3}>
            <div className="editorial-quote mt-8 py-1">
              <p className="text-navy text-lg leading-relaxed italic font-medium">
                &ldquo;Cred în puterea atingerii blânde și a pauzei. Corpul știe
                ce are de făcut, uneori are nevoie doar de puțin sprijin.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          {/* Social links */}
          <ScrollReveal delay={0.4}>
            <div className="flex gap-3 mt-8">
              <SocialIcon href={waLink()} label="WhatsApp">
                <svg
                  className="w-5 h-5 text-navy/50 group-hover:text-sage transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={CONTACT.messenger} label="Messenger">
                <svg
                  className="w-5 h-5 text-navy/50 group-hover:text-sage transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.733 8.1l3.13 3.259L19.752 8.1l-6.559 6.863z" />
                </svg>
              </SocialIcon>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
