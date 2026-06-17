export const CONTACT = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "https://wa.me/40748870981",
  messenger:
    process.env.NEXT_PUBLIC_MESSENGER ||
    "https://m.me/100083529482417",
  phone: process.env.NEXT_PUBLIC_PHONE || "+40748870981",
  facebook: "https://www.facebook.com/profile.php?id=100083529482417",
} as const;

// A pre-filled message removes the "what do I even write?" friction, the single
// biggest drop-off in click-to-WhatsApp flows. Every direct WhatsApp link on the
// site opens the chat with this text already typed.
export const WHATSAPP_DEFAULT_MESSAGE =
  "Salut, Bogdan! Aș dori o programare pentru o ședință de Terapie Bowen. Când ai disponibilitate?";

export function waLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  const base = CONTACT.whatsapp.includes("wa.me")
    ? CONTACT.whatsapp
    : `https://wa.me/${CONTACT.phone.replace(/\D/g, "")}`;
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}text=${encodeURIComponent(message)}`;
}

// Risk-reversal microcopy shown next to primary CTAs. All claims are honest and
// require no fabricated numbers.
export const REASSURANCE = [
  "Îți răspunde Bogdan personal",
  "De obicei în aceeași zi",
  "Fără obligații",
] as const;

// Hero + session use real, on-brand photography generated with Nano Banana 2
// (calm Bowen session, forest-green + warm tones). Portrait + clinics stay as
// branded placeholders until real photos of Bogdan and the rooms are supplied.
export const IMAGES = {
  hero: "/images/hero-v2.jpg",
  session: "/images/session-v3.jpg",
  bogdan: "/images/bogdan.jpg",
  clinic1: "/images/clinic-1-placeholder.jpg",
  clinic2: "/images/clinic-2-placeholder.jpg",
  locationSimleu: "/images/location-simleu-placeholder.jpg",
  locationZalau: "/images/location-zalau-placeholder.jpg",
  og: "/images/og-image.jpg",
} as const;

export const HERO = {
  headline: "Corpul tău știe cum să se vindece.",
  subheadline:
    "Terapia Bowen îi amintește cum. Ședințe personalizate cu Bogdan Cherecheș în Zalău și Șimleu Silvaniei, blânde, non-invazive, profund relaxante.",
  ctaPrimary: "Programează o ședință",
  ctaSecondary: "Scrie pe Messenger",
  badges: [
    "Mișcări blânde, fără durere",
    "Potrivit pentru orice vârstă",
    "Efecte de la prima ședință",
    "Fără medicamente",
  ],
} as const;

export const TRUST_STATS = [
  { value: 50, suffix: "-60 min", label: "Durată ședință" },
  { value: 100, suffix: "%", label: "Non-invaziv" },
  { value: 10, suffix: "+ ședințe", label: "Recomandate · una pe săptămână" },
  { value: 6, suffix: " luni+", label: "Efectul continuă după tratament" },
] as const;

export const WHAT_IS_BOWEN = {
  title: "Ce este Terapia Bowen?",
  description:
    "Corpul tău funcționează cel mai bine când e relaxat. Dar stresul, oboseala și tensiunile zilnice îl blochează într-o stare de alertă continuă. Terapia Bowen folosește mișcări blânde și precise care transmit semnale subtile minții, corpului și sistemului nervos, fără manipulări agresive, fără durere.",
  highlight:
    "Pauzele dintre mișcări sunt la fel de importante ca mișcările. În acele momente de liniște, corpul tău procesează informația primită și își activează propriile mecanisme de auto-vindecare și reechilibrare. Este ca un reset blând pentru întregul organism.",
  timeline: [
    {
      step: "01",
      title: "Evaluare",
      description:
        "Discuție despre starea generală, istoric și nevoile personale.",
    },
    {
      step: "02",
      title: "Mișcări Bowen",
      description:
        "Mișcări ușoare, precise, aplicate pe puncte specifice ale corpului.",
    },
    {
      step: "03",
      title: "Pauze",
      description:
        "Momente de liniște în care corpul procesează și răspunde la stimuli.",
    },
    {
      step: "04",
      title: "Relaxare",
      description:
        "Stare de calm profund pe parcursul și după ședință.",
    },
    {
      step: "05",
      title: "Feedback",
      description:
        "Discuție despre experiență și recomandări personalizate.",
    },
  ],
} as const;

export const SESSION_FEEL = {
  title: "Cum se simte o ședință?",
  subtitle:
    "Nu e masaj. Nu e fizioterapie. Este ceva complet diferit, și tocmai asta o face specială.",
  cards: [
    {
      title: "Blând ca o atingere",
      description:
        "Mișcări delicate, aproape imperceptibile. Fără presiune puternică, fără disconfort.",
      icon: "Feather",
    },
    {
      title: "Adormi de relaxare",
      description:
        "Mulți oameni adorm în timpul ședinței, semn al relaxării profunde pe care corpul o aștepta.",
      icon: "Moon",
    },
    {
      title: "Fără pocnituri sau tracțiuni",
      description:
        "Zero manipulări agresive. Corpul tău nu e forțat, e invitat să răspundă.",
      icon: "Shield",
    },
    {
      title: "Pauze magice",
      description:
        "Între mișcări, terapeutul se retrage. În liniștea aceea, corpul tău lucrează.",
      icon: "Timer",
    },
    {
      title: "Doar pentru tine",
      description:
        "Fiecare ședință este diferită, adaptată la ce simți tu în acel moment.",
      icon: "User",
    },
  ],
} as const;

export const WHO_CHOOSES = {
  title: "Pentru cine e Terapia Bowen?",
  subtitle:
    "Nu trebuie să ai o problemă ca să vii. Dar dacă te regăsești mai jos, Bowen te poate ajuta.",
  items: [
    {
      title: "Stres și anxietate",
      description:
        "Te simți tot timpul sub presiune? Bowen ajută sistemul nervos să iasă din modul de alertă.",
      icon: "Brain",
    },
    {
      title: "Oboseală cronică",
      description:
        "Dormi dar nu te odihnești? Corpul tău are nevoie de un reset, nu de încă o cafea.",
      icon: "Battery",
    },
    {
      title: "Tensiuni și dureri musculare",
      description:
        "Spate blocat, gât rigid, umeri tensionați. Bowen eliberează fără forță.",
      icon: "Activity",
    },
    {
      title: "Postură dezechilibrată",
      description:
        "Ore la birou, în mașină, cu telefonul. Corpul se adaptează greșit, Bowen îl readuce.",
      icon: "AlignCenter",
    },
    {
      title: "Nevoia de relaxare profundă",
      description:
        "Vrei o pauză reală de la tot. O oră în care nu faci nimic, iar corpul se recalibrează.",
      icon: "Sparkles",
    },
    {
      title: "Recuperare sportivă și accidentări",
      description:
        "Entorse, întinderi, accidentări sau suprasolicitare. Bowen accelerează recuperarea fără medicamente.",
      icon: "Dumbbell",
    },
    {
      title: "Stare generală de bine",
      description:
        "Nu ai nimic concret, dar simți că ceva lipsește. Bowen reconectează corpul cu echilibrul.",
      icon: "Heart",
    },
  ],
  disclaimer:
    "Terapia Bowen este o terapie complementară. Nu înlocuiește consultul medical de specialitate.",
} as const;

export const ABOUT = {
  title: "Despre Bogdan Cherecheș",
  paragraphs: [
    "La Bowen am ajuns din nevoie, nu din curiozitate. Aveam mâna stângă afectată de suprasolicitare, îmi cedaseră nervii, și încercasem destule fără rezultat. Bowen m-a pus din nou pe picioare și m-a convins atât de tare încât am vrut să învăț să fac și eu asta pentru alții.",
    "Nu porneam de la zero. Am terminat Facultatea de Sport, specializarea Kinetoterapie, în 2012, și am lucrat ani la rând ca kinetoterapeut și instructor de fitness. Cunoșteam deja corpul, dar Bowen mi-a arătat o cale mult mai blândă de a-l ajuta.",
    "De aproape doi ani lucrez exclusiv cu Bowen și am trecut de 400 de oameni. Cei mai mulți vin pentru recuperare după fracturi, dureri de spate și de articulații, accidentări la sport sau după un AVC. Alții vin pentru stres, anxietate sau burnout, fiindcă au ajuns pur și simplu la capătul puterilor.",
    "Și schimbarea chiar se vede. Durerile de spate și de articulații dispar de obicei în 8-10 ședințe. Sportivii se întorc la antrenamente după vreo zece. Iar la cei care au trecut printr-un AVC am văzut cum își recapătă treptat mișcarea pe partea afectată și se refac vizibil mai repede. De asta cred în ceea ce fac.",
  ],
  quote:
    "Cred în puterea terapiei Bowen și în activarea auto-vindecării corpului, a minții și a sistemului nervos. Corpul știe ce are de făcut, uneori are nevoie doar de puțin sprijin.",
  credential: {
    title: "Diplomă de Proficiență în Tehnica Bowen",
    issuer: "Bowen Therapy Academy of Australia (BOWTECH®)",
    year: "2024",
    note: "Apasă pentru a vedea diploma · Emisă pe 11 decembrie 2024",
  },
} as const;

export const HOW_TO_START = {
  title: "3 pași simpli",
  subtitle: "De la mesaj la relaxare, în mai puțin de un minut.",
  steps: [
    {
      step: "01",
      title: "Scrie-i lui Bogdan",
      description:
        "Pe WhatsApp sau Messenger. Spune-i cum te simți și ce cauți.",
      icon: "MessageCircle",
    },
    {
      step: "02",
      title: "Alege data și ora",
      description:
        "Bogdan îți propune un interval, în Zalău sau Șimleu Silvaniei.",
      icon: "Calendar",
    },
    {
      step: "03",
      title: "Vino și relaxează-te",
      description:
        "Îmbrăcat lejer, hidratat, fără griji. Corpul tău face restul.",
      icon: "Smile",
    },
  ],
} as const;

export const LOCATIONS = {
  title: "Unde mă găsești",
  cards: [
    {
      city: "Zalău",
      address: "Adresa exactă o primești când programezi pe WhatsApp",
      mapEmbed: "",
      mapLink: "",
      image: "/images/room-v2.jpg",
    },
    {
      city: "Șimleu Silvaniei",
      address: "Strada Horea 60, 455300 Șimleu Silvaniei",
      mapEmbed:
        "https://www.google.com/maps?q=Strada+Horea+60,+Simleu+Silvaniei,+Romania&output=embed",
      mapLink: "https://share.google/hDoirjKMRwg5vLBv3",
      image: "/images/location-simleu-placeholder.jpg",
    },
  ],
} as const;

export const TESTIMONIALS = {
  title: "Ce spun oamenii",
  subtitle: "Experiențe reale de la persoane care au încercat Terapia Bowen.",
  reviews: [
    {
      name: "Maria D.",
      location: "Șimleu Silvaniei",
      text: "Aveam dureri de spate de luni de zile. După prima ședință am dormit cel mai bine din ultimele 6 luni. Nu credeam că ceva atât de blând poate avea un efect atât de puternic.",
      rating: 5,
    },
    {
      name: "Andrei P.",
      location: "Zalău",
      text: "Am venit sceptic, nu înțelegeam cum niște atingeri ușoare pot face ceva. Am plecat uimit. Tensiunea din gât și umeri a dispărut complet.",
      rating: 5,
    },
    {
      name: "Elena M.",
      location: "Șimleu Silvaniei",
      text: "Bogdan are un dar aparte. Liniștea și atenția lui te fac să te simți în siguranță. Merg lunar pentru starea de bine pe care mi-o oferă fiecare ședință.",
      rating: 5,
    },
    {
      name: "Cristian Lazăr",
      location: "Primarul orașului Șimleu Silvaniei",
      text: "După un accident la schi, nimic nu mă ajuta. Un prieten m-a trimis la Bogdan. Trei ședințe mai târziu, mă mișcam din nou fără durere.",
      rating: 5,
    },
    {
      name: "Ana S.",
      location: "Șimleu Silvaniei",
      text: "Sufăr de stres cronic și am încercat tot ce se poate. Bowen a fost singurul lucru care m-a făcut să mă simt cu adevărat relaxată, de la prima ședință.",
      rating: 5,
    },
  ],
} as const;

export const FAQ_ITEMS = [
  {
    question: "Ce este terapia Bowen?",
    answer:
      "Terapia Bowen este o tehnică complementară blândă care folosește mișcări ușoare și precise asupra mușchilor, fasciei și țesuturilor moi, urmate de pauze care permit corpului să răspundă natural. Este non-invazivă, nedureroasă și potrivită pentru toate vârstele, de la bebeluși la vârstnici.",
  },
  {
    question: "Cum decurge o ședință?",
    answer:
      "O ședință durează între 50 și 60 de minute. Începe cu o discuție scurtă despre starea ta, urmată de mișcări Bowen aplicate pe puncte specifice, cu pauze între proceduri. Te vei afla pe o masă de terapie, îmbrăcat în haine lejere. Majoritatea oamenilor se relaxează profund, mulți chiar adorm.",
  },
  {
    question: "Cât durează o ședință?",
    answer:
      "O ședință tipică durează între 50 și 60 de minute. Se recomandă peste 10 ședințe, câte una pe săptămână, pentru a permite corpului să răspundă optim.",
  },
  {
    question: "Este dureroasă?",
    answer:
      "Deloc. Terapia Bowen este foarte blândă, nu presupune presiuni puternice, tracțiuni sau pocnituri. Majoritatea persoanelor o descriu ca fiind profund relaxantă. Mulți adorm în timpul ședinței.",
  },
  {
    question: "Pentru cine este potrivită?",
    answer:
      "Pentru oricine, de la copii la vârstnici, de la sportivi la persoane sedentare. Este potrivită inclusiv pentru persoanele sensibile, gravide sau cele care preferă o abordare blândă. Nu ai nevoie de o problemă specifică; mulți vin pentru relaxare și stare de bine.",
  },
  {
    question: "Trebuie pregătire înainte?",
    answer:
      "Nu este necesară nicio pregătire specială. Vino cu haine lejere și confortabile. Un singur lucru contează: hidratarea. Bea apă înainte și după ședință, apa susține procesul natural de reglare al corpului.",
  },
  {
    question: "Câte ședințe sunt recomandate?",
    answer:
      "Se recomandă peste 10 ședințe, câte una pe săptămână. Multe persoane observă îmbunătățiri deja din prima ședință. Corpul continuă să răspundă terapiei mult timp după aceea, iar efectele se pot simți chiar și după jumătate de an. Ulterior, frecvența se adaptează nevoilor tale.",
  },
] as const;

export const FINAL_CTA = {
  headline: "Fă primul pas.",
  subheadline:
    "Un mesaj. O ședință. O stare pe care o meriți. Programează acum cu Bogdan.",
  buttons: {
    whatsapp: "Programează pe WhatsApp",
    messenger: "Scrie pe Messenger",
    phone: "Sună direct",
  },
} as const;

export const FUNNEL = {
  title: "De ce vii la Bowen?",
  subtitle: "Selectează motivul principal, mesajul se completează automat.",
  options: [
    { label: "Relaxare", emoji: "🧘", message: "relaxare" },
    { label: "Dureri / Disconfort", emoji: "💆", message: "disconfort muscular" },
    { label: "Stres / Anxietate", emoji: "🧠", message: "reducerea stresului" },
    { label: "Recuperare sportivă", emoji: "🏃", message: "recuperare sportivă" },
    { label: "Altceva", emoji: "✨", message: "o consultație" },
  ],
  whatsappTemplate: (reason: string) =>
    `Salut, aș dori o programare Bowen pentru ${reason}. Mulțumesc!`,
} as const;

export const FOOTER = {
  name: "Bogdan Cherecheș",
  title: "Terapie Bowen",
  locations: "Zalău • Șimleu Silvaniei",
  disclaimer:
    "Terapia Bowen este o terapie complementară și nu înlocuiește consultul medical de specialitate. Informațiile de pe acest site au caracter informativ și nu constituie sfat medical.",
  copyright: `© ${new Date().getFullYear()} Bogdan Cherecheș - Terapie Bowen. Toate drepturile rezervate.`,
} as const;

export const SEO = {
  title: "Terapie Bowen Zalău și Șimleu Silvaniei | Bogdan Cherecheș",
  description:
    "Terapie Bowen blândă în Zalău și Șimleu Silvaniei cu Bogdan Cherecheș, kinetoterapeut. Pentru dureri de spate și articulații, recuperare după accidentări și stres. Scrie pe WhatsApp.",
  // Set NEXT_PUBLIC_SITE_URL in Vercel to your live domain so canonical / OG /
  // sitemap all point to the real address. Falls back to the planned domain.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bowenbogdan.ro",
  locale: "ro_RO",
} as const;

export const NAV_LINKS = [
  { label: "Ce este Bowen", href: "#ce-este-bowen" },
  { label: "Ședința", href: "#sedinta" },
  { label: "Despre", href: "#despre" },
  { label: "Locații", href: "#locatii" },
  { label: "Întrebări", href: "#faq" },
] as const;
