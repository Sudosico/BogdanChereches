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

import { ABOUT, CONTACT, IMAGES, waLink } from "@/lib/constants";
import { Heart, Users, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Despre Bogdan Cherecheș | Terapie Bowen",
  description:
    "Bogdan Cherecheș, kinetoterapeut și terapeut Bowen certificat BOWTECH în Zalău și Șimleu Silvaniei. Peste 400 de oameni ajutați cu recuperare, dureri de spate și stres.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Empatie și răbdare",
    description:
      "Fiecare persoană este unică. Ascult cu atenție și adaptez fiecare ședință la nevoile tale.",
  },
  {
    icon: Users,
    title: "Atenție individuală",
    description:
      "Ședințele sunt unul la unul, într-un cadru liniștit și profesional, unde atenția mea este îndreptată exclusiv către tine.",
  },
  {
    icon: Leaf,
    title: "Respect pentru corp",
    description:
      "Lucrez cu respect pentru ritmul natural al corpului tău, fără forțare.",
  },
];

export default function DesprePagee() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          label="Terapeut Bowen"
          title="Despre Bogdan Cherecheș"
          description="Am ajuns la Bowen din nevoie. Acum îl practic în Zalău și Șimleu Silvaniei, cu ședințe blânde și personalizate."
        />

        {/* Profile */}
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                  <ImagePlaceholder
                    src={IMAGES.bogdan}
                    alt="Bogdan Cherecheș, terapeut Bowen în Zalău și Șimleu Silvaniei"
                    fill
                    quality={90}
                  />
                </div>
                <FloatingElement
                  className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6"
                  amplitude={6}
                  duration={5}
                >
                  <div className="bg-card rounded-2xl shadow-xl shadow-sage/5 border border-sage/5 p-4 md:p-5">
                    <Leaf className="w-6 h-6 text-sage mb-1" />
                    <p className="text-sm font-semibold text-navy">
                      Terapie Bowen
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Șimleu Silvaniei & Zalău
                    </p>
                  </div>
                </FloatingElement>
              </div>
            </ScrollReveal>

            <div>
              <BlurFadeIn>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                  Pasiune pentru echilibru
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

        {/* Values */}
        <SectionWrapper className="bg-ivory-dark/30">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Valori și abordare
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

        {/* CTA */}
        <SectionWrapper dark className="text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,124,111,0.12),transparent_60%)]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <BlurFadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Hai să ne cunoaștem
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Scrie-mi și hai să vedem împreună cum te poate ajuta Terapia
                Bowen.
              </p>
            </BlurFadeIn>
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton
                  href={waLink()}
                  label="Scrie pe WhatsApp"
                  variant="whatsapp"
                  size="lg"
                />
                <CTAButton
                  href={CONTACT.messenger}
                  label="Mesaj pe Messenger"
                  variant="ghost-light"
                  size="lg"
                />
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
