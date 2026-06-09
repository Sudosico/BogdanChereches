import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { SubpageHero } from "@/components/SubpageHero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { GlassCard } from "@/components/GlassCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BlurFadeIn } from "@/components/animations/BlurFadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { CTAButton } from "@/components/CTAButton";

import { CONTACT, waLink } from "@/lib/constants";
import {
  Hand,
  Timer,
  Brain,
  RefreshCcw,
  Droplets,
  Leaf,
  Shield,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ce este Terapia Bowen? | Bogdan Cherecheș",
  description:
    "Descoperă Tehnica Bowen, o terapie complementară blândă care folosește mișcări precise asupra mușchilor și fasciei pentru relaxare profundă și reechilibrare.",
};

const PRINCIPLES = [
  {
    icon: Hand,
    title: "Mișcări blânde și precise",
    description:
      "Mișcări ușoare, de tip rolling, aplicate cu degetele pe puncte specifice ale corpului, mușchi, fascie, tendoane.",
  },
  {
    icon: Timer,
    title: "Pauze esențiale",
    description:
      "Între fiecare set de mișcări, terapeutul face pauze de 2-5 minute. Corpul procesează și răspunde la stimulii primiți.",
  },
  {
    icon: Brain,
    title: "Reechilibrare neuro-musculară",
    description:
      "Semnale subtile transmise sistemului nervos ghidează corpul din modul de supraviețuire în modul de recuperare.",
  },
  {
    icon: RefreshCcw,
    title: "Autoreglare naturală",
    description:
      "Bowen nu forțează corpul, ci îi amintește cum să funcționeze natural. Organismul activează propriile procese de echilibrare.",
  },
];

const BENEFITS = [
  {
    icon: Droplets,
    title: "Relaxare profundă",
    description:
      "Respirația devine mai profundă, tensiunile se reduc natural, apare o stare de calm.",
  },
  {
    icon: Leaf,
    title: "Echilibru energetic",
    description:
      "Energia este folosită mai eficient, corpul reactivează procesele de reechilibrare.",
  },
  {
    icon: Shield,
    title: "Non-invaziv și sigur",
    description:
      "Fără manipulări agresive, fără presiuni puternice. Potrivit pentru toate vârstele, inclusiv copii și vârstnici.",
  },
  {
    icon: Heart,
    title: "Stare generală de bine",
    description:
      "Multe persoane raportează somn mai bun, mai multă claritate mentală și o stare de bine generală.",
  },
];

export default function CeEsteBowen() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          label="Tehnica Bowen"
          title="Ce este Terapia Bowen?"
          description="O formulă unică de re-echilibrare neuro-musculară, dezvoltată în Australia de Tom Bowen, care ajută corpul să se autoregleze natural."
        />

        {/* Principles */}
        <SectionWrapper>
          <ScrollReveal className="text-center mb-14">
            <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
              Principii
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Cum funcționează?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tehnica Bowen se bazează pe mișcări delicate și pauze bine alese
              care transmit semnale sistemului nervos.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {PRINCIPLES.map((item) => (
              <StaggerItem key={item.title}>
                <GlassCard className="h-full flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-sage/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionWrapper>

        {/* Session flow */}
        <SectionWrapper className="bg-ivory-dark/30">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <BlurFadeIn>
                <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
                  La ședință
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                  Cum decurge o ședință?
                </h2>
              </BlurFadeIn>

              <div className="space-y-5">
                <ScrollReveal>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    O ședință tipică de Terapie Bowen durează între 45 și 60 de
                    minute. Te vei afla pe o masă de terapie, îmbrăcat în haine
                    lejere și confortabile.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Terapeutul aplică mișcări blânde pe puncte specifice, urmate
                    de pauze în care corpul procesează informația primită. Multe
                    persoane adorm în timpul ședinței, semn al relaxării
                    profunde.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="text-navy font-medium text-lg leading-relaxed pl-4 border-l-2 border-sage">
                    Se recomandă un set inițial de 3 ședințe, la interval de o
                    săptămână. Corpul continuă să răspundă terapiei până la 10
                    zile după ședință.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            <ScrollReveal direction="right">
              <div className="space-y-4">
                {[
                  { step: "1", title: "Evaluare inițială", desc: "Discuție despre starea generală, nevoile și obiectivele tale." },
                  { step: "2", title: "Mișcări Bowen", desc: "Mișcări ușoare, precise, aplicate pe puncte specifice ale corpului." },
                  { step: "3", title: "Pauze terapeutice", desc: "Momente de liniște, corpul procesează și își activează procesele de autoreglare." },
                  { step: "4", title: "Integrare", desc: "Stare de calm profund. Corpul continuă procesul de reechilibrare și după ședință." },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 items-start bg-white rounded-2xl p-5 border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sage text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </SectionWrapper>

        {/* Benefits */}
        <SectionWrapper>
          <ScrollReveal className="text-center mb-14">
            <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
              Beneficii
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Ce raportează oamenii?
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.1}>
            {BENEFITS.map((item) => (
              <StaggerItem key={item.title}>
                <GlassCard className="h-full">
                  <div className="w-11 h-11 rounded-xl bg-sage/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-sage" />
                  </div>
                  <h3 className="font-semibold text-navy text-lg mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal className="mt-10">
            <div className="bg-earth/5 border border-earth/20 rounded-2xl p-5 text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Terapia Bowen nu înlocuiește consultul medical sau tratamentele
                recomandate de specialiști. Este o terapie complementară care
                sprijină starea generală de bine.
              </p>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        {/* Hydration tip */}
        <SectionWrapper className="bg-ivory-dark/30">
          <div className="max-w-3xl mx-auto text-center">
            <BlurFadeIn>
              <Droplets className="w-10 h-10 text-sage mx-auto mb-4" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
                Importanța hidratării
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Hidratarea joacă un rol esențial în eficiența terapiei Bowen.
                După o ședință, organismul începe un proces profund de reglare
                și regenerare, iar apa susține acest proces natural.
              </p>
            </BlurFadeIn>
            <ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                {[
                  "Ajută la eliminarea toxinelor",
                  "Susține funcționarea sistemului limfatic",
                  "Îmbunătățește circulația și flexibilitatea țesuturilor",
                  "Contribuie la o recuperare mai rapidă",
                ].map((tip) => (
                  <div
                    key={tip}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 border border-border/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-sage shrink-0" />
                    <span className="text-navy text-sm font-medium">{tip}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper dark className="text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,124,111,0.12),transparent_60%)]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <BlurFadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Vrei să încerci?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Programează o ședință cu Bogdan Cherecheș în Șimleu Silvaniei
                sau Zalău.
              </p>
            </BlurFadeIn>
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton
                  href={waLink()}
                  label="Programează pe WhatsApp"
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
