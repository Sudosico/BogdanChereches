"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useContent, useLocale } from "@/components/ContentProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQSchema() {
  const { FAQ_ITEMS } = useContent();
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

export function FAQSection() {
  const { FAQ_ITEMS } = useContent();
  const en = useLocale() === "en";
  return (
    <SectionWrapper id="faq">
      <FAQSchema />

      <ScrollReveal className="text-center mb-14">
        <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
          {en ? "FAQ" : "Întrebări frecvente"}
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
          {en ? "Have questions?" : "Ai întrebări?"}
        </h2>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto">
        <Accordion className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
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
  );
}
