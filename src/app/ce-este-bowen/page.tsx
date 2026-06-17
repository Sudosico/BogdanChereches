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

import { CONTACT, SEO, waLink } from "@/lib/constants";
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

export const metadata: Metadata = {
  title:
    "Ce este Terapia Bowen? Ghid complet | Bowen Zalău și Șimleu Silvaniei",
  description:
    "Ghid complet despre Terapia Bowen: ce este, cum funcționează, pentru ce ajută (dureri de spate, recuperare după accidentări, sport, AVC, stres) și unde o poți face în Zalău și Șimleu Silvaniei, județul Sălaj.",
  alternates: { canonical: "/ce-este-bowen" },
  openGraph: {
    title: "Ce este Terapia Bowen? Ghid complet | Zalău și Șimleu Silvaniei",
    description:
      "Tot ce trebuie să știi despre Tehnica Bowen: principii, beneficii, afecțiuni și recuperare după accidentări, cu Bogdan Cherecheș în Sălaj.",
    url: `${SEO.url}/ce-este-bowen`,
    type: "article",
  },
};

const PRINCIPLES = [
  {
    icon: Hand,
    title: "Mișcări blânde și precise",
    description:
      "Mișcări ușoare, de tip rolling, aplicate cu degetele pe puncte specifice ale corpului: mușchi, fascie, tendoane. Fără presiune puternică, fără durere.",
  },
  {
    icon: Timer,
    title: "Pauzele, secretul tehnicii",
    description:
      "Între seturile de mișcări, terapeutul face pauze de 2-5 minute. În liniștea aceea, corpul procesează semnalele și începe să răspundă singur.",
  },
  {
    icon: Brain,
    title: "Reechilibrare neuro-musculară",
    description:
      "Semnale subtile transmise sistemului nervos ghidează corpul din modul de alertă (simpatic) în modul de refacere (parasimpatic).",
  },
  {
    icon: RefreshCcw,
    title: "Autoreglare naturală",
    description:
      "Bowen nu forțează corpul, ci îi amintește cum să funcționeze. Organismul își reactivează propriile mecanisme de echilibrare și vindecare.",
  },
];

const SESSION_FLOW = [
  {
    step: "1",
    title: "Evaluare inițială",
    desc: "Discuție despre starea generală, istoricul tău și ce vrei să rezolvi.",
  },
  {
    step: "2",
    title: "Mișcări Bowen",
    desc: "Mișcări ușoare, precise, aplicate pe puncte specifice ale corpului.",
  },
  {
    step: "3",
    title: "Pauze terapeutice",
    desc: "Momente de liniște în care corpul procesează și își activează autoreglarea.",
  },
  {
    step: "4",
    title: "Integrare",
    desc: "Stare de calm profund. Corpul continuă reechilibrarea și după ședință.",
  },
];

// Broad, keyword-rich condition coverage so the page captures long-tail searches
// (back pain, accident/fracture recovery, sports, post-stroke, stress, sleep...).
const CONDITIONS = [
  {
    icon: Activity,
    title: "Dureri de spate, gât și umeri",
    description:
      "Spate blocat, gât rigid, umeri încordați de la statul pe scaun. Bowen eliberează tensiunea din fascie fără forță și fără pocnituri.",
  },
  {
    icon: Hand,
    title: "Dureri articulare și musculare",
    description:
      "Genunchi, șolduri, coate sau musculatură suprasolicitată. Mișcările blânde reduc disconfortul și redau mobilitatea.",
  },
  {
    icon: Shield,
    title: "Recuperare după accidentări și fracturi",
    description:
      "După o entorsă, o fractură consolidată sau o lovitură, Bowen ajută țesuturile să se refacă și grăbește revenirea la normal.",
  },
  {
    icon: Dumbbell,
    title: "Recuperare sportivă",
    description:
      "Entorse, întinderi, suprasolicitare. Sportivii revin la antrenamente mai repede, fără medicamente, de obicei după aproximativ zece ședințe.",
  },
  {
    icon: RefreshCcw,
    title: "Recuperare după AVC",
    description:
      "La persoanele care au trecut printr-un accident vascular cerebral, Bowen sprijină recuperarea treptată a mișcării pe partea afectată.",
  },
  {
    icon: Brain,
    title: "Stres, anxietate și burnout",
    description:
      "Când ești tot timpul în priză, sistemul nervos rămâne blocat în alertă. Bowen îl ajută să revină la o stare de calm.",
  },
  {
    icon: Moon,
    title: "Oboseală cronică și somn",
    description:
      "Dormi, dar nu te odihnești? Mulți oameni adorm chiar în timpul ședinței și dorm vizibil mai bine după.",
  },
  {
    icon: AlignCenter,
    title: "Postură și sedentarism",
    description:
      "Ore la birou, în mașină sau cu telefonul în mână. Bowen readuce corpul spre un aliniament natural.",
  },
  {
    icon: Feather,
    title: "Dureri de cap tensionale",
    description:
      "Multe dureri de cap pornesc din tensiunea gâtului și a umerilor. Când zona se eliberează, capul se liniștește.",
  },
  {
    icon: Sparkles,
    title: "Relaxare profundă și stare de bine",
    description:
      "Nu ai nevoie de o problemă ca să vii. O oră de liniște în care corpul se recalibrează complet.",
  },
];

const BENEFITS = [
  {
    icon: Droplets,
    title: "Relaxare profundă",
    description:
      "Respirația devine mai amplă, tensiunile se reduc natural, apare o stare de calm care ține mult după ședință.",
  },
  {
    icon: Leaf,
    title: "Echilibru și energie",
    description:
      "Energia este folosită mai eficient, corpul reactivează procesele de reechilibrare și refacere.",
  },
  {
    icon: Shield,
    title: "Non-invaziv și sigur",
    description:
      "Fără manipulări agresive, fără presiuni puternice. Potrivit pentru toate vârstele, inclusiv copii, gravide și vârstnici.",
  },
  {
    icon: Heart,
    title: "Stare generală de bine",
    description:
      "Somn mai bun, mai multă claritate mentală și o stare de bine pe care o simți în tot corpul.",
  },
];

const HYDRATION_TIPS = [
  "Ajută la eliminarea toxinelor",
  "Susține funcționarea sistemului limfatic",
  "Îmbunătățește circulația și flexibilitatea țesuturilor",
  "Contribuie la o recuperare mai rapidă",
];

// Page-specific FAQ (distinct from the /faq page) targeting local + practical
// long-tail queries. Rendered visibly and mirrored in FAQPage structured data.
const PAGE_FAQ = [
  {
    question: "Unde pot face Terapie Bowen în județul Sălaj?",
    answer:
      "Ședințele de Terapie Bowen au loc în Zalău și în Șimleu Silvaniei, cu Bogdan Cherecheș, kinetoterapeut și terapeut Bowen certificat BOWTECH. Te programezi simplu printr-un mesaj pe WhatsApp.",
  },
  {
    question: "Terapia Bowen ajută la recuperarea după accidentări?",
    answer:
      "Da. Bowen lucrează cu fascia și cu sistemul nervos, așa că poate completa recuperarea după entorse, fracturi consolidate, accidentări la sport sau suprasolicitare. Mulți sportivi revin la antrenamente după aproximativ zece ședințe.",
  },
  {
    question: "În cât timp se văd rezultate?",
    answer:
      "Multe persoane simt o diferență încă din prima ședință. Durerile de spate și de articulații dispar de obicei în 8-10 ședințe, câte una pe săptămână, iar efectele continuă să se simtă și luni după aceea.",
  },
  {
    question: "Cât costă o ședință și cât durează?",
    answer:
      "O ședință durează între 50 și 60 de minute. Pentru tarif și disponibilitate, scrie-i lui Bogdan pe WhatsApp și îți răspunde de obicei în aceeași zi.",
  },
  {
    question: "Bowen este potrivit pentru copii și vârstnici?",
    answer:
      "Da. Fiind foarte blândă, fără presiuni puternice, Terapia Bowen este potrivită pentru toate vârstele, de la bebeluși și copii la gravide și vârstnici.",
  },
  {
    question: "Cum mă programez la o ședință?",
    answer:
      "Cel mai rapid pe WhatsApp, dar poți scrie și pe Messenger sau suna direct. Spune-i lui Bogdan cum te simți și ce cauți, iar el îți propune un interval în Zalău sau Șimleu Silvaniei.",
  },
];

function CeEsteBowenSchemas() {
  const base = SEO.url;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: `${base}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ce este Terapia Bowen",
        item: `${base}/ce-este-bowen`,
      },
    ],
  };
  const medicalPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Ce este Terapia Bowen?",
    url: `${base}/ce-este-bowen`,
    inLanguage: "ro",
    lastReviewed: "2026-06-17",
    about: {
      "@type": "MedicalTherapy",
      name: "Terapie Bowen",
      alternateName: "Tehnica Bowen",
    },
    audience: { "@type": "Patient" },
    provider: {
      "@type": "Person",
      name: "Bogdan Cherecheș",
      jobTitle: "Terapeut Bowen",
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

export default function CeEsteBowen() {
  return (
    <>
      <Navbar />
      <main>
        <CeEsteBowenSchemas />
        <SubpageHero
          label="Tehnica Bowen"
          title="Ce este Terapia Bowen?"
          description="Ghidul complet al unei terapii blânde de reechilibrare neuro-musculară, dezvoltată în Australia de Tom Bowen, și unde o poți face în Zalău și Șimleu Silvaniei."
        />

        {/* Definition */}
        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <BlurFadeIn>
              <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
                Pe scurt
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                Terapia Bowen, explicată simplu
              </h2>
            </BlurFadeIn>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <ScrollReveal>
                <p>
                  Terapia Bowen (sau Tehnica Bowen) este o terapie complementară
                  blândă și non-invazivă, care folosește mișcări ușoare și
                  precise asupra mușchilor, fasciei și țesuturilor moi. A fost
                  dezvoltată în Australia de Tom Bowen și este recunoscută
                  astăzi în întreaga lume prin Bowen Therapy Academy of
                  Australia (BOWTECH®).
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p>
                  Nu este masaj și nu este fizioterapie. Diferența esențială
                  stă în pauzele dintre mișcări: în acele momente de liniște,
                  sistemul nervos primește timp să proceseze semnalele și să
                  comute corpul din modul de alertă în modul de refacere. Pe
                  scurt, Bowen nu forțează corpul, ci îi reamintește cum să se
                  reechilibreze singur.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-navy font-medium border-l-2 border-sage pl-4">
                  În Zalău și Șimleu Silvaniei, ședințele de Terapie Bowen sunt
                  susținute de Bogdan Cherecheș, kinetoterapeut cu diplomă de
                  proficiență BOWTECH®.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </SectionWrapper>

        {/* How it works */}
        <SectionWrapper className="bg-ivory-dark/30">
          <ScrollReveal className="text-center mb-14">
            <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
              Principii
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Cum funcționează?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tehnica Bowen se bazează pe mișcări delicate și pauze bine alese
              care transmit semnale sistemului nervos și fasciei.
            </p>
          </ScrollReveal>

          <StaggerContainer
            className="grid md:grid-cols-2 gap-6"
            staggerDelay={0.1}
          >
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
              Fascia este țesutul care învelește fiecare mușchi, os și organ,
              ca o pânză continuă în tot corpul. Când se tensionează din cauza
              stresului, a unei accidentări sau a posturii greșite, durerea
              poate apărea departe de locul problemei. Mișcările Bowen
              acționează exact asupra acestei rețele, iar pauzele lasă corpul să
              integreze schimbarea.
            </p>
          </ScrollReveal>
        </SectionWrapper>

        {/* Session flow */}
        <SectionWrapper>
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
                    O ședință tipică de Terapie Bowen durează între 50 și 60 de
                    minute. Te vei afla pe o masă de terapie, îmbrăcat în haine
                    lejere și confortabile.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Bogdan aplică mișcări blânde pe puncte specifice, urmate de
                    pauze în care corpul procesează informația primită. Multe
                    persoane adorm în timpul ședinței, semn al relaxării
                    profunde.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="text-navy font-medium text-lg leading-relaxed pl-4 border-l-2 border-sage">
                    Se recomandă peste 10 ședințe, câte una pe săptămână.
                    Corpul continuă să răspundă terapiei mult timp după fiecare
                    ședință.
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

        {/* Mid-page CTA */}
        <SectionWrapper dark className="text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,124,111,0.12),transparent_60%)]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <BlurFadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ai o durere care nu trece?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Programează o ședință de Terapie Bowen în Zalău sau Șimleu
                Silvaniei. Îți răspunde Bogdan personal, de obicei în aceeași
                zi.
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

        {/* Conditions */}
        <SectionWrapper className="bg-ivory-dark/30">
          <ScrollReveal className="text-center mb-14">
            <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
              Pentru ce ajută
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Cu ce te poate ajuta Terapia Bowen
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              De la dureri și accidentări, până la stres și oboseală. Iată cele
              mai frecvente motive pentru care oamenii din Sălaj aleg Terapia
              Bowen.
            </p>
          </ScrollReveal>

          <StaggerContainer
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.06}
          >
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
              Pentru că este atât de blândă, Terapia Bowen este potrivită
              pentru toate vârstele: de la bebeluși și copii, la gravide,
              persoane sensibile și vârstnici. Nu presupune presiuni puternice,
              deci poate fi folosită și acolo unde alte abordări sunt prea
              intense.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-8">
            <div className="bg-earth/5 border border-earth/20 rounded-2xl p-5 text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Terapia Bowen este o terapie complementară. Nu înlocuiește
                consultul medical sau tratamentele recomandate de specialiști,
                ci le poate sprijini.
              </p>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        {/* Recovery focus */}
        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <BlurFadeIn>
              <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
                Recuperare
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                Recuperare după accidentări și sport în Sălaj
              </h2>
            </BlurFadeIn>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <ScrollReveal>
                <p>
                  Multe dintre persoanele care vin la Bogdan caută recuperare:
                  după o accidentare la sport, o entorsă, o fractură
                  consolidată sau o suprasolicitare. Pentru că lucrează direct
                  cu fascia și cu sistemul nervos, Bowen poate completa foarte
                  bine recuperarea clasică și o poate grăbi.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p>
                  Bogdan este kinetoterapeut, absolvent al Facultății de Sport,
                  specializarea Kinetoterapie (2012), și a lucrat ani la rând în
                  recuperare și fitness înainte să se dedice exclusiv terapiei
                  Bowen. Această experiență îl ajută să înțeleagă exact ce are
                  nevoie un corp accidentat și cum să îl sprijine fără să îl
                  forțeze.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <blockquote className="bg-white rounded-2xl p-6 border border-border/50 text-navy italic leading-relaxed">
                  &ldquo;După un accident la schi, nimic nu mă ajuta. Un prieten
                  m-a trimis la Bogdan. Trei ședințe mai târziu, mă mișcam din
                  nou fără durere.&rdquo;
                  <span className="block mt-3 not-italic text-sm text-muted-foreground">
                    Cristian Lazăr, Primarul orașului Șimleu Silvaniei
                  </span>
                </blockquote>
              </ScrollReveal>
            </div>
          </div>
        </SectionWrapper>

        {/* Benefits */}
        <SectionWrapper className="bg-ivory-dark/30">
          <ScrollReveal className="text-center mb-14">
            <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
              Beneficii
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Ce raportează oamenii după ședințe
            </h2>
          </ScrollReveal>

          <StaggerContainer
            className="grid sm:grid-cols-2 gap-6"
            staggerDelay={0.1}
          >
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

        {/* Hydration */}
        <SectionWrapper>
          <div className="max-w-3xl mx-auto text-center">
            <BlurFadeIn>
              <Droplets className="w-10 h-10 text-sage mx-auto mb-4" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
                Importanța hidratării
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Hidratarea joacă un rol esențial în eficiența terapiei Bowen.
                După o ședință, organismul începe un proces profund de reglare
                și regenerare, iar apa susține acest proces natural. Bea apă
                înainte și după ședință.
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

        {/* Local SEO block */}
        <SectionWrapper className="bg-ivory-dark/30">
          <div className="max-w-3xl mx-auto">
            <BlurFadeIn>
              <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
                Locații
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                Terapie Bowen în Zalău și Șimleu Silvaniei
              </h2>
            </BlurFadeIn>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <ScrollReveal>
                <p>
                  Ședințele au loc în două locații din județul Sălaj: Zalău și
                  Șimleu Silvaniei. Indiferent de care ești mai aproape, te poți
                  programa simplu, printr-un mesaj pe WhatsApp.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p>
                  Adresa exactă din Zalău o primești când stabilești
                  programarea. În Șimleu Silvaniei, cabinetul se află pe Strada
                  Horea 60. Vezi toate detaliile pe pagina de{" "}
                  <Link
                    href="/contact"
                    className="text-sage font-medium underline decoration-dotted underline-offset-2 hover:decoration-solid"
                  >
                    contact și locații
                  </Link>{" "}
                  sau află mai multe{" "}
                  <Link
                    href="/despre"
                    className="text-sage font-medium underline decoration-dotted underline-offset-2 hover:decoration-solid"
                  >
                    despre Bogdan
                  </Link>
                  .
                </p>
              </ScrollReveal>
            </div>
          </div>
        </SectionWrapper>

        {/* Page FAQ */}
        <SectionWrapper>
          <ScrollReveal className="text-center mb-12">
            <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-3 block">
              Întrebări frecvente
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">
              Ce întreabă cel mai des oamenii
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
                href="/faq"
                className="inline-flex items-center gap-1.5 text-sage font-medium hover:gap-2.5 transition-all"
              >
                Vezi toate întrebările frecvente
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </SectionWrapper>

        {/* Final CTA */}
        <SectionWrapper dark className="text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,124,111,0.12),transparent_60%)]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <BlurFadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Fă primul pas
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Un mesaj e tot ce trebuie. Programează o ședință de Terapie
                Bowen cu Bogdan Cherecheș, în Zalău sau Șimleu Silvaniei.
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
