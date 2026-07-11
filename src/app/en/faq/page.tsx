import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { SubpageHero } from "@/components/SubpageHero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BlurFadeIn } from "@/components/animations/BlurFadeIn";
import { CTAButton } from "@/components/CTAButton";

import { CONTACT, waLink } from "@/lib/constants";
import { enContent } from "@/lib/content-en";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const base = enContent.SEO.url;
const FAQ_ITEMS = enContent.FAQ_ITEMS;

export const metadata: Metadata = {
  title: "FAQ | Bogdan Cherecheș - Bowen Therapy",
  description:
    "Answers to the most common questions about Bowen Therapy in Zalău and Șimleu Silvaniei: how it works, how long a session lasts, who it is for.",
  alternates: {
    canonical: `${base}/en/faq`,
    languages: {
      ro: `${base}/faq`,
      en: `${base}/en/faq`,
      "x-default": `${base}/faq`,
    },
  },
};

function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
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

export default function FAQPageEn() {
  return (
    <>
      <Navbar />
      <main>
        <FAQSchema />
        <SubpageHero
          label="FAQ"
          title="Frequently asked questions"
          description="Answers to the most common questions about Bowen Therapy and what to expect from a session."
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

        <SectionWrapper dark className="text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,124,111,0.12),transparent_60%)]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <BlurFadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Message Bogdan and he will gladly answer.
              </p>
            </BlurFadeIn>
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton
                  href={waLink()}
                  label="Ask on WhatsApp"
                  variant="whatsapp"
                  size="lg"
                />
                <CTAButton
                  href={CONTACT.messenger}
                  label="Message on Messenger"
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
