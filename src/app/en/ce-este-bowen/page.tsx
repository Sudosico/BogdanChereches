import type { Metadata } from "next";
import Link from "next/link";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { CONTACT, waLink } from "@/lib/constants";
import { enContent } from "@/lib/content-en";
import {
  Hand,
  Timer,
  Brain,
  RefreshCcw,
  Droplets,
  Leaf,
  Shield,
  Heart,
  Activity,
  Dumbbell,
  Moon,
  AlignCenter,
  Feather,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const base = enContent.SEO.url;

export const metadata: Metadata = {
  title: "What is Bowen Therapy? Complete guide | Bowen Zalău and Șimleu Silvaniei",
  description:
    "Complete guide to Bowen Therapy: what it is, how it works, what it helps with (back pain, recovery after injuries, sport, stroke, stress) and where to get it in Zalău and Șimleu Silvaniei, Sălaj county.",
  alternates: {
    canonical: `${base}/en/ce-este-bowen`,
    languages: {
      ro: `${base}/ce-este-bowen`,
      en: `${base}/en/ce-este-bowen`,
      "x-default": `${base}/ce-este-bowen`,
    },
  },
  openGraph: {
    title: "What is Bowen Therapy? Complete guide | Zalău and Șimleu Silvaniei",
    description:
      "Everything you need to know about the Bowen Technique: principles, benefits, conditions and recovery after injuries, with Bogdan Cherecheș in Sălaj.",
    url: `${base}/en/ce-este-bowen`,
    type: "article",
  },
};

const PRINCIPLES = [
  {
    icon: Hand,
    title: "Gentle, precise moves",
    description:
      "Light rolling moves applied with the fingers to specific points on the body: muscles, fascia, tendons. No strong pressure, no pain.",
  },
  {
    icon: Timer,
    title: "The pauses, the secret of the technique",
    description:
      "Between sets of moves, the therapist pauses for 2-5 minutes. In that stillness, the body processes the signals and starts to respond on its own.",
  },
  {
    icon: Brain,
    title: "Neuro-muscular rebalancing",
    description:
      "Subtle signals sent to the nervous system guide the body from alert mode (sympathetic) into recovery mode (parasympathetic).",
  },
  {
    icon: RefreshCcw,
    title: "Natural self-regulation",
    description:
      "Bowen does not force the body, it reminds it how to work. The body reactivates its own balancing and healing mechanisms.",
  },
];

const SESSION_FLOW = [
  {
    step: "1",
    title: "Initial assessment",
    desc: "A talk about your general state, history and what you want to resolve.",
  },
  {
    step: "2",
    title: "Bowen moves",
    desc: "Light, precise moves applied to specific points on the body.",
  },
  {
    step: "3",
    title: "Therapeutic pauses",
    desc: "Moments of stillness in which the body processes and activates self-regulation.",
  },
  {
    step: "4",
    title: "Integration",
    desc: "A state of deep calm. The body keeps rebalancing after the session too.",
  },
];

const CONDITIONS = [
  {
    icon: Activity,
    title: "Back, neck and shoulder pain",
    description:
      "Locked back, stiff neck, shoulders tense from sitting. Bowen releases the tension in the fascia without force and without cracking.",
  },
  {
    icon: Hand,
    title: "Joint and muscle pain",
    description:
      "Knees, hips, elbows or overworked muscles. The gentle moves reduce discomfort and restore mobility.",
  },
  {
    icon: Shield,
    title: "Recovery after injuries and fractures",
    description:
      "After a sprain, a healed fracture or a blow, Bowen helps the tissue recover and speeds the return to normal.",
  },
  {
    icon: Dumbbell,
    title: "Sports recovery",
    description:
      "Sprains, strains, overuse. Athletes return to training faster, without medication, usually after about twenty sessions.",
  },
  {
    icon: RefreshCcw,
    title: "Recovery after a stroke",
    description:
      "In people who have been through a stroke, Bowen supports the gradual recovery of movement on the affected side.",
  },
  {
    icon: Brain,
    title: "Stress, anxiety and burnout",
    description:
      "When you are always switched on, the nervous system stays stuck in alert. Bowen helps it return to a state of calm.",
  },
  {
    icon: Moon,
    title: "Chronic fatigue and sleep",
    description:
      "Do you sleep but never rest? Many people fall asleep during the session and sleep noticeably better afterwards.",
  },
  {
    icon: AlignCenter,
    title: "Posture and sedentary life",
    description:
      "Hours at the desk, in the car or on the phone. Bowen brings the body back toward a natural alignment.",
  },
  {
    icon: Feather,
    title: "Tension headaches",
    description:
      "Many headaches start from tension in the neck and shoulders. When the area releases, the head calms down.",
  },
  {
    icon: Sparkles,
    title: "Deep relaxation and wellbeing",
    description:
      "You do not need a problem to come. An hour of stillness in which the body fully recalibrates.",
  },
];

const BENEFITS = [
  {
    icon: Droplets,
    title: "Deep relaxation",
    description:
      "Breathing becomes fuller, tension eases naturally, a state of calm appears that lasts well after the session.",
  },
  {
    icon: Leaf,
    title: "Balance and energy",
    description:
      "Energy is used more efficiently, the body reactivates its rebalancing and recovery processes.",
  },
  {
    icon: Shield,
    title: "Non-invasive and safe",
    description:
      "No aggressive manipulation, no strong pressure. Suitable for all ages, including children, pregnant women and the elderly.",
  },
  {
    icon: Heart,
    title: "General wellbeing",
    description:
      "Better sleep, more mental clarity and a sense of wellbeing you feel throughout the body.",
  },
];

const HYDRATION_TIPS = [
  "Helps eliminate toxins",
  "Supports the lymphatic system",
  "Improves circulation and tissue flexibility",
  "Contributes to faster recovery",
];

const PAGE_FAQ = [
  {
    question: "Where can I get Bowen Therapy in Sălaj county?",
    answer:
      "Bowen Therapy sessions take place in Zalău and in Șimleu Silvaniei, with Bogdan Cherecheș, physiotherapist and BOWTECH-certified Bowen therapist. You book simply with a message on WhatsApp.",
  },
  {
    question: "Does Bowen Therapy help recovery after injuries?",
    answer:
      "Yes. Bowen works with the fascia and the nervous system, so it can complement recovery after sprains, healed fractures, sports injuries or overuse. Many athletes return to training after about twenty sessions.",
  },
  {
    question: "How soon do results show?",
    answer:
      "Many people feel a difference from the very first session. Back and joint pain usually goes away in 8-10 sessions, one per week, and the effects keep being felt for months afterwards.",
  },
  {
    question: "How much does a session cost and how long is it?",
    answer:
      "A session lasts between 50 and 60 minutes. For pricing and availability, message Bogdan on WhatsApp and he usually replies the same day.",
  },
  {
    question: "Is Bowen suitable for children and the elderly?",
    answer:
      "Yes. Being very gentle, without strong pressure, Bowen Therapy is suitable for all ages, from babies and children to pregnant women and the elderly.",
  },
  {
    question: "How do I book a session?",
    answer:
      "Fastest on WhatsApp, but you can also message on Messenger or call directly. Tell Bogdan how you feel and what you are looking for, and he proposes a slot in Zalău or Șimleu Silvaniei.",
  },
];

function CeEsteBowenSchemas() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${base}/en` },
      {
        "@type": "ListItem",
        position: 2,
        name: "What is Bowen Therapy",
        item: `${base}/en/ce-este-bowen`,
      },
    ],
  };
  const medicalPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "What is Bowen Therapy?",
    url: `${base}/en/ce-este-bowen`,
    inLanguage: "en",
    lastReviewed: "2026-06-18",
    about: {
      "@type": "MedicalTherapy",
      name: "Bowen Therapy",
      alternateName: "Bowen Technique",
    },
    audience: { "@type": "Patient" },
    provider: {
      "@type": "Person",
      name: "Bogdan Cherecheș",
      jobTitle: "Bowen Therapist",
    },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PAGE_FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([breadcrumb, medicalPage, faq]).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}

export default function CeEsteBowenEn() {
  return (
    <>
      <Navbar />
      <main>
        <CeEsteBowenSchemas />
        <SubpageHero
          label="Bowen Technique"
          title="What is Bowen Therapy?"
          description="The complete guide to a gentle neuro-muscular rebalancing therapy, developed in Australia by Tom Bowen, and where to get it in Zalău and Șimleu Silvaniei."
        />

        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <BlurFadeIn>
              <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
                In short
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                Bowen Therapy, explained simply
              </h2>
            </BlurFadeIn>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <ScrollReveal>
                <p>
                  Bowen Therapy (or the Bowen Technique) is a gentle,
                  non-invasive complementary therapy that uses light, precise
                  moves on the muscles, fascia and soft tissue. It was developed
                  in Australia by Tom Bowen and is recognized today worldwide
                  through the Bowen Therapy Academy of Australia (BOWTECH®).
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p>
                  It is not massage and it is not physiotherapy. The key
                  difference is in the pauses between moves: in those moments of
                  stillness, the nervous system gets time to process the signals
                  and switch the body from alert mode into recovery mode. In
                  short, Bowen does not force the body, it reminds it how to
                  rebalance on its own.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-navy font-medium border-l-2 border-sage pl-4">
                  In Zalău and Șimleu Silvaniei, Bowen Therapy sessions are
                  provided by Bogdan Cherecheș, a physiotherapist with a
                  BOWTECH® diploma of proficiency.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-ivory-dark/30">
          <ScrollReveal className="text-center mb-14">
            <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
              Principles
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              How does it work?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The Bowen Technique is based on delicate moves and well-chosen
              pauses that send signals to the nervous system and the fascia.
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

          <ScrollReveal className="mt-10 max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              The fascia is the tissue that wraps every muscle, bone and organ,
              like one continuous web through the whole body. When it tightens
              because of stress, an injury or bad posture, pain can appear far
              from the source. Bowen moves act exactly on this network, and the
              pauses let the body integrate the change.
            </p>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <BlurFadeIn>
                <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
                  At the session
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                  How does a session go?
                </h2>
              </BlurFadeIn>

              <div className="space-y-5">
                <ScrollReveal>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A typical Bowen Therapy session lasts between 50 and 60
                    minutes. You will be on a therapy table, dressed in loose,
                    comfortable clothes.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Bogdan applies gentle moves on specific points, followed by
                    pauses in which the body processes the information. Many
                    people fall asleep during the session, a sign of deep
                    relaxation.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="text-navy font-medium text-lg leading-relaxed pl-4 border-l-2 border-sage">
                    More than 10 sessions are recommended, one per week. The body
                    keeps responding to the therapy long after each session.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            <ScrollReveal direction="right">
              <div className="space-y-4">
                {SESSION_FLOW.map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 items-start bg-white rounded-2xl p-5 border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sage text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </SectionWrapper>

        <SectionWrapper dark className="text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,124,111,0.12),transparent_60%)]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <BlurFadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Do you have pain that won&rsquo;t go away?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Book a Bowen Therapy session in Zalău or Șimleu Silvaniei. Bogdan
                replies personally, usually the same day.
              </p>
            </BlurFadeIn>
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href={waLink()} label="Book on WhatsApp" variant="whatsapp" size="lg" />
                <CTAButton href={CONTACT.messenger} label="Message on Messenger" variant="ghost-light" size="lg" />
              </div>
            </ScrollReveal>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-ivory-dark/30">
          <ScrollReveal className="text-center mb-14">
            <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
              What it helps
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              What Bowen Therapy can help with
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From pain and injuries to stress and fatigue. Here are the most
              common reasons people in Sălaj choose Bowen Therapy.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
            {CONDITIONS.map((item) => (
              <StaggerItem key={item.title}>
                <GlassCard className="h-full">
                  <div className="w-11 h-11 rounded-xl bg-sage/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-sage" />
                  </div>
                  <h3 className="font-semibold text-navy text-lg mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal className="mt-10 max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              Because it is so gentle, Bowen Therapy is suitable for all ages:
              from babies and children to pregnant women, sensitive people and
              the elderly. It does not involve strong pressure, so it can be used
              even where other approaches are too intense.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-8">
            <div className="bg-earth/5 border border-earth/20 rounded-2xl p-5 text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bowen Therapy is a complementary therapy. It does not replace
                medical consultation or treatments recommended by specialists; it
                can support them.
              </p>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <BlurFadeIn>
              <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
                Recovery
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                Recovery after injuries and sport in Sălaj
              </h2>
            </BlurFadeIn>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <ScrollReveal>
                <p>
                  Many of the people who come to Bogdan are looking for recovery:
                  after a sports injury, a sprain, a healed fracture or overuse.
                  Because it works directly with the fascia and the nervous
                  system, Bowen can complement classic recovery very well and
                  speed it up.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p>
                  Bogdan is a physiotherapist, a graduate of the Faculty of
                  Sport, specialization in Physical Therapy (2012), and worked for
                  years in recovery and fitness before dedicating himself
                  exclusively to Bowen. This experience helps him understand
                  exactly what an injured body needs and how to support it without
                  forcing it.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <blockquote className="bg-white rounded-2xl p-6 border border-border/50 text-navy italic leading-relaxed">
                  &ldquo;After a skiing accident, nothing helped me. A friend sent
                  me to Bogdan. Three sessions later, I was moving again without
                  pain.&rdquo;
                  <span className="block mt-3 not-italic text-sm text-muted-foreground">
                    Cristian L., Zalău
                  </span>
                </blockquote>
              </ScrollReveal>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-ivory-dark/30">
          <ScrollReveal className="text-center mb-14">
            <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
              Benefits
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              What people report after sessions
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
        </SectionWrapper>

        <SectionWrapper>
          <div className="max-w-3xl mx-auto text-center">
            <BlurFadeIn>
              <Droplets className="w-10 h-10 text-sage mx-auto mb-4" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
                The importance of hydration
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Hydration plays an essential role in how effective Bowen Therapy
                is. After a session, the body begins a deep process of regulation
                and regeneration, and water supports this natural process. Drink
                water before and after the session.
              </p>
            </BlurFadeIn>
            <ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                {HYDRATION_TIPS.map((tip) => (
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

        <SectionWrapper className="bg-ivory-dark/30">
          <div className="max-w-3xl mx-auto">
            <BlurFadeIn>
              <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
                Locations
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                Bowen Therapy in Zalău and Șimleu Silvaniei
              </h2>
            </BlurFadeIn>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <ScrollReveal>
                <p>
                  Sessions take place in two locations in Sălaj county: Zalău and
                  Șimleu Silvaniei. Whichever is closer to you, you can book
                  simply, with a message on WhatsApp.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p>
                  The exact address in Zalău you receive when you set the
                  appointment. In Șimleu Silvaniei, the practice is on Strada
                  Horea 60. See all the details on the{" "}
                  <Link
                    href="/en/contact"
                    className="text-sage font-medium underline decoration-dotted underline-offset-2 hover:decoration-solid"
                  >
                    contact and locations
                  </Link>{" "}
                  page or find out more{" "}
                  <Link
                    href="/en/despre"
                    className="text-sage font-medium underline decoration-dotted underline-offset-2 hover:decoration-solid"
                  >
                    about Bogdan
                  </Link>
                  .
                </p>
              </ScrollReveal>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <ScrollReveal className="text-center mb-12">
            <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
              Frequently asked questions
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">
              What people ask most
            </h2>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <Accordion className="space-y-3">
              {PAGE_FAQ.map((item, i) => (
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
            <ScrollReveal className="mt-6 text-center">
              <Link
                href="/en/faq"
                className="inline-flex items-center gap-1.5 text-sage font-medium hover:gap-2.5 transition-all"
              >
                See all frequently asked questions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </SectionWrapper>

        <SectionWrapper dark className="text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,124,111,0.12),transparent_60%)]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <BlurFadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Take the first step
              </h2>
              <p className="text-white/60 text-lg mb-8">
                One message is all it takes. Book a Bowen Therapy session with
                Bogdan Cherecheș, in Zalău or Șimleu Silvaniei.
              </p>
            </BlurFadeIn>
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href={waLink()} label="Book on WhatsApp" variant="whatsapp" size="lg" />
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
