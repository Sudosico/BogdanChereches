import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SubpageHero } from "@/components/SubpageHero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { enContent } from "@/lib/content-en";

const base = enContent.SEO.url;

export const metadata: Metadata = {
  title: "Privacy Policy | Bogdan Cherecheș - Bowen Therapy",
  description:
    "Privacy policy for the Bogdan Cherecheș - Bowen Therapy website.",
  alternates: {
    canonical: `${base}/en/confidentialitate`,
    languages: {
      ro: `${base}/confidentialitate`,
      en: `${base}/en/confidentialitate`,
      "x-default": `${base}/confidentialitate`,
    },
  },
  openGraph: {
    title: "Privacy Policy | Bogdan Cherecheș - Bowen Therapy",
    description:
      "Privacy policy for the Bogdan Cherecheș - Bowen Therapy website.",
    url: `${base}/en/confidentialitate`,
    siteName: "Bogdan Cherecheș - Bowen Therapy",
    locale: "en_US",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
};

export default function ConfidentialitateEn() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero label="Legal" title="Privacy Policy" />

        <SectionWrapper>
          <div className="max-w-3xl mx-auto prose prose-navy">
            <div className="space-y-8">
              <section>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  1. General information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This website is operated by Bogdan Cherecheș - Bowen Therapy.
                  We respect our visitors&rsquo; privacy and are committed to
                  protecting personal data in accordance with applicable law,
                  including the General Data Protection Regulation (GDPR).
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  2. Data collected
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This website does not collect personal data automatically.
                  Personal data is only collected when you contact us voluntarily
                  via WhatsApp, Messenger or phone to book a session.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  3. Purpose of processing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The data you provide (name, phone number) is used solely to
                  schedule and carry out Bowen Therapy sessions. We do not share
                  data with third parties and do not use it for marketing.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  4. Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This website does not use marketing or tracking cookies.
                  Essential technical cookies may be used for the correct
                  operation of the site.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  5. Your rights
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, correct and delete your personal
                  data. For any request, you can contact us via WhatsApp or
                  phone.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  6. Medical disclaimer
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bowen Therapy is a complementary therapy and does not replace
                  specialist medical advice. The information on this site is
                  informational and does not constitute medical advice. Always
                  consult a doctor for health concerns.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  7. Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For any questions about this policy, you can reach us through
                  the channels available on the contact page.
                </p>
              </section>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
