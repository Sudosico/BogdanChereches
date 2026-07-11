import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { SubpageHero } from "@/components/SubpageHero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BlurFadeIn } from "@/components/animations/BlurFadeIn";
import { FloatingElement } from "@/components/animations/FloatingElement";
import { CTAButton } from "@/components/CTAButton";

import { CONTACT, IMAGES, waLink } from "@/lib/constants";
import { enContent } from "@/lib/content-en";
import { Heart, Users, Leaf } from "lucide-react";

const base = enContent.SEO.url;
const ABOUT = enContent.ABOUT;

export const metadata: Metadata = {
  title: "About Bogdan Cherecheș | Bowen Therapy",
  description:
    "Bogdan Cherecheș, physiotherapist and BOWTECH-certified Bowen therapist in Zalău and Șimleu Silvaniei. Over 400 people helped with recovery, back pain and stress.",
  alternates: {
    canonical: `${base}/en/despre`,
    languages: {
      ro: `${base}/despre`,
      en: `${base}/en/despre`,
      "x-default": `${base}/despre`,
    },
  },
  openGraph: {
    title: "About Bogdan Cherecheș | Bowen Therapy",
    description:
      "Bogdan Cherecheș, physiotherapist and BOWTECH-certified Bowen therapist in Zalău and Șimleu Silvaniei. Over 400 people helped.",
    url: `${base}/en/despre`,
    siteName: "Bogdan Cherecheș - Bowen Therapy",
    locale: "en_US",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
};

const VALUES = [
  {
    icon: Heart,
    title: "Empathy and patience",
    description:
      "Every person is unique. I listen carefully and adapt each session to your needs.",
  },
  {
    icon: Users,
    title: "Individual attention",
    description:
      "Sessions are one on one, in a quiet, professional space where my attention is entirely on you.",
  },
  {
    icon: Leaf,
    title: "Respect for the body",
    description:
      "I work with respect for your body's natural rhythm, without forcing.",
  },
];

export default function DespreEn() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          label="Bowen Therapist"
          title="About Bogdan Cherecheș"
          description="I came to Bowen out of need. Now I practice it in Zalău and Șimleu Silvaniei, with gentle, personalized sessions."
        />

        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                  <ImagePlaceholder
                    src={IMAGES.bogdan}
                    alt="Bogdan Cherecheș, Bowen therapist in Zalău and Șimleu Silvaniei"
                    fill
                  />
                </div>
                <FloatingElement
                  className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6"
                  amplitude={6}
                  duration={5}
                >
                  <div className="bg-card rounded-2xl shadow-xl shadow-sage/5 border border-sage/5 p-4 md:p-5">
                    <Leaf className="w-6 h-6 text-sage mb-1" />
                    <p className="text-sm font-semibold text-navy">Bowen Therapy</p>
                    <p className="text-xs text-muted-foreground">
                      Șimleu Silvaniei &amp; Zalău
                    </p>
                  </div>
                </FloatingElement>
              </div>
            </ScrollReveal>

            <div>
              <BlurFadeIn>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                  Passion for balance
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
                <ScrollReveal delay={0.3}>
                  <p className="text-navy font-medium text-lg leading-relaxed pl-4 border-l-2 border-earth">
                    &ldquo;{ABOUT.quote}&rdquo;
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-ivory-dark/30">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Values and approach
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-border/50 text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-sage" />
                  </div>
                  <h3 className="font-semibold text-navy text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper dark className="text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,124,111,0.12),transparent_60%)]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <BlurFadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Let&rsquo;s meet
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Message me and let&rsquo;s see together how Bowen Therapy can help
                you.
              </p>
            </BlurFadeIn>
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href={waLink()} label="Message on WhatsApp" variant="whatsapp" size="lg" />
                <CTAButton href={CONTACT.messenger} label="Message on Messenger" variant="ghost-light" size="lg" />
              </div>
            </ScrollReveal>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
