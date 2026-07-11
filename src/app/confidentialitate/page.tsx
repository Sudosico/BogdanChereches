import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SubpageHero } from "@/components/SubpageHero";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Politica de confidențialitate | Bogdan Cherecheș - Terapie Bowen",
  description:
    "Politica de confidențialitate pentru site-ul Bogdan Cherecheș - Terapie Bowen.",
  alternates: {
    canonical: "/confidentialitate",
    languages: {
      ro: "/confidentialitate",
      en: "/en/confidentialitate",
      "x-default": "/confidentialitate",
    },
  },
};

export default function ConfidentialitatePage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          label="Legal"
          title="Politica de confidențialitate"
        />

        <SectionWrapper>
          <div className="max-w-3xl mx-auto prose prose-navy">
            <div className="space-y-8">
              <section>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  1. Informații generale
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Acest site este operat de Bogdan Cherecheș - Terapie Bowen.
                  Respectăm confidențialitatea vizitatorilor și ne angajăm să
                  protejăm datele personale în conformitate cu legislația
                  aplicabilă, inclusiv Regulamentul General privind Protecția
                  Datelor (GDPR).
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  2. Date colectate
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Acest site nu colectează date personale în mod automat. Datele
                  personale sunt colectate doar atunci când ne contactați
                  voluntar prin WhatsApp, Messenger sau telefon pentru
                  programarea unei ședințe.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  3. Scopul prelucrării
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Datele furnizate (nume, număr de telefon) sunt utilizate
                  exclusiv pentru programarea și desfășurarea ședințelor de
                  Terapie Bowen. Nu partajăm datele cu terți și nu le folosim
                  în scopuri de marketing.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  4. Cookie-uri
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Acest site nu utilizează cookie-uri de marketing sau tracking.
                  Pot fi utilizate cookie-uri tehnice esențiale pentru
                  funcționarea corectă a site-ului.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  5. Drepturile dumneavoastră
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Aveți dreptul de acces, rectificare și ștergere a datelor
                  personale. Pentru orice solicitare, ne puteți contacta prin
                  WhatsApp sau telefon.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  6. Disclaimer medical
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Terapia Bowen este o terapie complementară și nu înlocuiește
                  consultul medical de specialitate. Informațiile de pe acest
                  site au caracter informativ și nu constituie sfat medical.
                  Consultați întotdeauna un medic pentru probleme de sănătate.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  7. Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pentru orice întrebări legate de această politică, ne puteți
                  contacta prin canalele disponibile pe pagina de contact.
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
