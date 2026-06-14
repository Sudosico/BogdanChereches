import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { inter, display } from "@/lib/fonts";
import { LenisProvider } from "@/providers/LenisProvider";
import { ConversionTracker } from "@/components/ConversionTracker";
import { MarketingScripts } from "@/components/MarketingScripts";
import { SEO, CONTACT } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  metadataBase: new URL(SEO.url),
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SEO.url,
    siteName: "Bogdan Cherecheș - Terapie Bowen",
    locale: SEO.locale,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bogdan Cherecheș - Terapie Bowen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ["/images/og-image.jpg"],
  },
  keywords: [
    "terapie Bowen",
    "tehnica Bowen",
    "Bowen Zalău",
    "Bowen Șimleu Silvaniei",
    "terapie complementară Sălaj",
    "relaxare",
    "dureri de spate",
    "stres",
    "recuperare sportivă",
    "recuperare după accidentări",
    "Bogdan Cherecheș",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: SEO.url },
};

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Bogdan Cherecheș - Terapie Bowen",
    description: SEO.description,
    url: SEO.url,
    telephone: CONTACT.phone,
    priceRange: "$$",
    image: `${SEO.url}/images/og-image.jpg`,
    knowsLanguage: "ro",
    sameAs: [CONTACT.facebook],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strada Horea 60",
      addressLocality: "Șimleu Silvaniei",
      postalCode: "455300",
      addressRegion: "Sălaj",
      addressCountry: "RO",
    },
    areaServed: [
      { "@type": "City", name: "Șimleu Silvaniei" },
      { "@type": "City", name: "Zalău" },
    ],
    availableService: {
      "@type": "MedicalTherapy",
      name: "Terapie Bowen",
      alternateName: "Tehnica Bowen",
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Ședință de Terapie Bowen",
      },
      availability: "https://schema.org/InStock",
    },
    founder: {
      "@type": "Person",
      name: "Bogdan Cherecheș",
      jobTitle: "Terapeut Bowen",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Diploma of Proficiency",
        name: "Bowen Therapeutic Technique",
        recognizedBy: {
          "@type": "Organization",
          name: "Bowen Therapy Academy of Australia (BOWTECH)",
        },
      },
    },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${inter.variable} ${display.variable} h-full antialiased`}
    >
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-full flex flex-col bg-ivory text-navy">
        <ConversionTracker />
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
        <SpeedInsights />
        <MarketingScripts />
      </body>
    </html>
  );
}
