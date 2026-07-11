import { Navbar } from "@/components/Navbar";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStatsSection } from "@/components/sections/TrustStatsSection";
import { WhatIsBowenSection } from "@/components/sections/WhatIsBowenSection";
import { SessionFeelSection } from "@/components/sections/SessionFeelSection";
import { WhoChoosesBowenSection } from "@/components/sections/WhoChoosesBowenSection";
import { AboutBogdanSection } from "@/components/sections/AboutBogdanSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HowToStartSection } from "@/components/sections/HowToStartSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/Footer";
import { TrustBadgesBand } from "@/components/TrustBadgesBand";
import { OrganicDivider } from "@/components/OrganicDivider";
import type { Metadata } from "next";
import { SEO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: {
    canonical: SEO.url,
    languages: {
      ro: SEO.url,
      en: `${SEO.url}/en`,
      "x-default": SEO.url,
    },
  },
};

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <OrganicDivider variant="wave" fill="fill-bone" className="bg-forest-deep" />
        <TrustBadgesBand />
        <TrustStatsSection />
        <WhatIsBowenSection />
        <SessionFeelSection />
        <WhoChoosesBowenSection />
        <AboutBogdanSection />
        <TestimonialsSection />
        <LocationsSection />
        <HowToStartSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingCTA />
      <MobileStickyBar />
      <ExitIntentModal />
    </>
  );
}
