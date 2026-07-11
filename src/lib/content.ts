import {
  HERO,
  TRUST_STATS,
  WHAT_IS_BOWEN,
  SESSION_FEEL,
  WHO_CHOOSES,
  ABOUT,
  HOW_TO_START,
  LOCATIONS,
  TESTIMONIALS,
  FAQ_ITEMS,
  FINAL_CTA,
  FUNNEL,
  FOOTER,
  SEO,
  REASSURANCE,
  NAV_LINKS,
} from "@/lib/constants";
import { enContent } from "@/lib/content-en";

export type Locale = "ro" | "en";

// Shape shared by both language bundles. Uses `string` fields + `readonly`
// arrays so both the Romanian `as const` objects and the plain English objects
// satisfy it.
export interface SiteContent {
  HERO: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badges: readonly string[];
  };
  TRUST_STATS: readonly { value: number; suffix: string; label: string }[];
  WHAT_IS_BOWEN: {
    title: string;
    description: string;
    highlight: string;
    timeline: readonly { step: string; title: string; description: string }[];
  };
  SESSION_FEEL: {
    title: string;
    subtitle: string;
    cards: readonly { title: string; description: string; icon: string }[];
  };
  WHO_CHOOSES: {
    title: string;
    subtitle: string;
    items: readonly { title: string; description: string; icon: string }[];
    disclaimer: string;
  };
  ABOUT: {
    title: string;
    paragraphs: readonly string[];
    quote: string;
    credential: { title: string; issuer: string; year: string; note: string };
  };
  HOW_TO_START: {
    title: string;
    subtitle: string;
    steps: readonly {
      step: string;
      title: string;
      description: string;
      icon: string;
    }[];
  };
  LOCATIONS: {
    title: string;
    cards: readonly {
      city: string;
      address: string;
      mapEmbed: string;
      mapLink: string;
      image: string;
    }[];
  };
  TESTIMONIALS: {
    title: string;
    subtitle: string;
    reviews: readonly {
      name: string;
      location: string;
      text: string;
      rating: number;
    }[];
  };
  FAQ_ITEMS: readonly { question: string; answer: string }[];
  FINAL_CTA: {
    headline: string;
    subheadline: string;
    buttons: { whatsapp: string; messenger: string; phone: string };
  };
  FUNNEL: {
    title: string;
    subtitle: string;
    options: readonly { label: string; emoji: string; message: string }[];
  };
  FOOTER: {
    name: string;
    title: string;
    locations: string;
    disclaimer: string;
    copyright: string;
  };
  SEO: { title: string; description: string; url: string; locale: string };
  REASSURANCE: readonly string[];
  NAV_LINKS: readonly { label: string; href: string }[];
}

export const roContent: SiteContent = {
  HERO,
  TRUST_STATS,
  WHAT_IS_BOWEN,
  SESSION_FEEL,
  WHO_CHOOSES,
  ABOUT,
  HOW_TO_START,
  LOCATIONS,
  TESTIMONIALS,
  FAQ_ITEMS,
  FINAL_CTA,
  FUNNEL,
  FOOTER,
  SEO,
  REASSURANCE,
  NAV_LINKS,
};

export const bundles: Record<Locale, SiteContent> = {
  ro: roContent,
  en: enContent,
};

export function getContent(locale: Locale): SiteContent {
  return bundles[locale] ?? roContent;
}
