import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { SubpageHero } from "@/components/SubpageHero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BlurFadeIn } from "@/components/animations/BlurFadeIn";
import { CTAButton } from "@/components/CTAButton";

import { FAQ_ITEMS, CONTACT, waLink } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Întrebări frecvente | Bogdan Cherecheș - Terapie Bowen",
  description:
    "Răspunsuri la cele mai frecvente întrebări despre Terapia Bowen: cum funcționează, cât durează, pentru cine este potrivită.",
};

function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <FAQSchema />
        <SubpageHero
          label="FAQ"
          title="Întrebări frecvente"
          description="Răspunsuri la cele mai comune întrebări despre Terapia Bowen și ce poți aștepta de la o ședință."
        />

        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <Accordion className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <AccordionItem
                    value={`faq-${i}`}
                    className="bg-white rounded-2xl border border-border/50 px-6 overflow-hidden data-[state=open]:shadow-lg data-[state=open]:shadow-sage/5 data-[state=open]:border-sage/20 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold text-navy py-5 hover:no-underline hover:text-sage transition-colors [&[data-state=open]]:text-sage">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>
          </div>
        </SectionWrapper>

        {/* Still have questions? */}
        <SectionWrapper dark className="text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,124,111,0.12),transparent_60%)]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <BlurFadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Mai ai întrebări?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Scrie-i lui Bogdan și îți va răspunde cu plăcere.
              </p>
            </BlurFadeIn>
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton
                  href={waLink()}
                  label="Întreabă pe WhatsApp"
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
