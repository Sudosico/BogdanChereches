import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { SubpageHero } from "@/components/SubpageHero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { GlassCard } from "@/components/GlassCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTAButton } from "@/components/CTAButton";

import { CONTACT, waLink } from "@/lib/constants";
import { enContent } from "@/lib/content-en";
import { MapPin, Navigation, Phone, Clock, ExternalLink } from "lucide-react";

const base = enContent.SEO.url;
const LOCATIONS = enContent.LOCATIONS;

export const metadata: Metadata = {
  title: "Contact & Locations | Bogdan Cherecheș - Bowen Therapy",
  description:
    "Contact Bogdan Cherecheș for Bowen Therapy bookings in Zalău and Șimleu Silvaniei. WhatsApp, Messenger or phone.",
  alternates: {
    canonical: `${base}/en/contact`,
    languages: {
      ro: `${base}/contact`,
      en: `${base}/en/contact`,
      "x-default": `${base}/contact`,
    },
  },
};

export default function ContactPageEn() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          label="Contact"
          title="Contact us"
          description="Book a Bowen Therapy session via WhatsApp, Messenger or phone."
        />

        <SectionWrapper>
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              How to reach us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pick your preferred method and message Bogdan directly.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-6 border border-border/50 text-center h-full">
                <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">WhatsApp</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  The fastest way to book a session.
                </p>
                <CTAButton href={waLink()} label="Open WhatsApp" variant="whatsapp" size="sm" className="w-full" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-6 border border-border/50 text-center h-full">
                <div className="w-14 h-14 rounded-full bg-[#0088FF]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#0088FF]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.733 8.1l3.13 3.259L19.752 8.1l-6.559 6.863z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">Messenger</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Message directly on Facebook Messenger.
                </p>
                <CTAButton href={CONTACT.messenger} label="Open Messenger" variant="messenger" size="sm" className="w-full" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-6 border border-border/50 text-center h-full">
                <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-navy/60" />
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Call directly for bookings.
                </p>
                <CTAButton href={`tel:${CONTACT.phone}`} label="Call now" variant="phone" size="sm" className="w-full" />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="text-center mb-10">
            <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
              Locations
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">
              {LOCATIONS.title}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {LOCATIONS.cards.map((loc, i) => (
              <ScrollReveal key={loc.city} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
                <GlassCard className="p-0 overflow-hidden" hover={false}>
                  <div className="aspect-[16/10] relative bg-gradient-to-br from-sage/5 to-earth/5">
                    {loc.mapEmbed ? (
                      <iframe
                        src={loc.mapEmbed}
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map ${loc.city}`}
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <ImagePlaceholder src={loc.image} alt={`Location ${loc.city}`} fill />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
                            <MapPin className="w-3.5 h-3.5 text-sage" />
                            <span className="text-sm font-medium text-navy">{loc.city}</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl font-bold text-navy mb-2">{loc.city}</h3>
                    {loc.mapLink ? (
                      <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-muted-foreground mb-3 hover:text-sage transition-colors group">
                        <Navigation className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-sage" />
                        <span className="text-sm underline decoration-dotted underline-offset-2 group-hover:decoration-solid">{loc.address}</span>
                        <ExternalLink className="w-3 h-3 mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <div className="flex items-start gap-2 text-muted-foreground mb-3">
                        <Navigation className="w-4 h-4 mt-0.5 shrink-0" />
                        <span className="text-sm">{loc.address}</span>
                      </div>
                    )}
                    <div className="flex items-start gap-2 text-muted-foreground mb-5">
                      <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                      <span className="text-sm">By appointment, contact for availability</span>
                    </div>
                    <CTAButton href={waLink()} label="Book" variant="primary" size="md" className="w-full" />
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
