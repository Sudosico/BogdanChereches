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
import { Heart, Users, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Despre Bogdan Cherecheș | Terapie Bowen",
  description:
    "Află mai multe despre Bogdan Cherecheș, terapeut Bowen în Șimleu Silvaniei și Zalău. Abordare calmă, atentă și personalizată.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Empatie și răbdare",
    description:
      "Fiecare persoană este unică. Bogdan ascultă cu atenție și adaptează fiecare ședință nevoilor tale.",
  },
  {
    icon: Users,
    title: "Atenție individuală",
    description:
      "Ședințele sunt unul la unul, într-un cadru liniștit și profesional, unde atenția este îndreptată exclusiv către tine.",
  },
  {
    icon: Leaf,
    title: "Respect pentru corp",
    description:
      "Filosofia sa se bazează pe respect pentru ritmul natural al corpului fiecărei persoane, fără forțare.",
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
          description="Cu o abordare calmă și atentă, Bogdan oferă ședințe de Terapie Bowen personalizate."
        />

        {/* Profile */}
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                  <ImagePlaceholder
                    src={IMAGES.bogdan}
                    alt="Bogdan Cherecheș"
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
                <ScrollReveal>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Bogdan Cherecheș practică Terapia Bowen în Șimleu Silvaniei
                    și Zalău, cu convingerea că fiecare corp are capacitatea de
                    a se reechilibra atunci când primește sprijinul potrivit.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Fiecare ședință este un moment dedicat ție, un spațiu de
                    liniște în care corpul tău primește atenția de care are
                    nevoie. Nu există abordare standard, ci doar răspunsul
                    personalizat la ceea ce simți tu.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="text-navy font-medium text-lg leading-relaxed pl-4 border-l-2 border-earth">
                    &ldquo;Cred în puterea atingerii blânde și a pauzei. Corpul
                    știe ce are de făcut, uneori are nevoie doar de puțin
                    sprijin.&rdquo;
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
                Contactează-l pe Bogdan și discută despre cum te poate ajuta
                Terapia Bowen.
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
