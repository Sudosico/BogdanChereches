"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { GlassCard } from "@/components/GlassCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CTAButton } from "@/components/CTAButton";

import { LOCATIONS, CONTACT, waLink } from "@/lib/constants";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

export function LocationsSection() {
  return (
    <SectionWrapper id="locatii">
      <ScrollReveal className="text-center mb-14">
        <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
          Locații
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
          {LOCATIONS.title}
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {LOCATIONS.cards.map((loc, i) => (
          <ScrollReveal key={loc.city} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
            <GlassCard className="p-0 overflow-hidden" hover={false}>
              {/* Map area */}
              <div className="aspect-[16/10] relative bg-gradient-to-br from-sage/5 to-earth/5">
                {loc.mapEmbed ? (
                  <iframe
                    src={loc.mapEmbed}
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Hartă ${loc.city}`}
                    allowFullScreen
                  />
                ) : (
                  <>
                    <ImagePlaceholder
                      src={loc.image}
                      alt={`Locație ${loc.city}`}
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
                        <MapPin className="w-3.5 h-3.5 text-sage" />
                        <span className="text-sm font-medium text-navy">
                          {loc.city}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-navy mb-2">
                  {loc.city}
                </h3>
                {loc.mapLink ? (
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-muted-foreground mb-5 hover:text-sage transition-colors group"
                  >
                    <Navigation className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-sage" />
                    <span className="text-sm underline decoration-dotted underline-offset-2 group-hover:decoration-solid">
                      {loc.address}
                    </span>
                    <ExternalLink className="w-3 h-3 mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <div className="flex items-start gap-2 text-muted-foreground mb-5">
                    <Navigation className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="text-sm">{loc.address}</span>
                  </div>
                )}
                <CTAButton
                  href={waLink()}
                  label="Programare"
                  variant="primary"
                  size="md"
                  className="w-full"
                />
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
