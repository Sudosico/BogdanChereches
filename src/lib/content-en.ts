import type { SiteContent } from "./content";

// English content bundle. Contact data (phone/WhatsApp/Messenger/addresses) is
// shared with the Romanian site and imported from constants, not duplicated here.
export const enContent: SiteContent = {
  HERO: {
    headline: "Your body knows how to heal.",
    subheadline:
      "Bowen Therapy reminds it how. Personalized sessions with Bogdan Cherecheș in Zalău and Șimleu Silvaniei, gentle, non-invasive, deeply relaxing.",
    ctaPrimary: "Book a session",
    ctaSecondary: "Message on Messenger",
    badges: [
      "Gentle moves, no pain",
      "Suitable for any age",
      "Results from the first session",
      "No medication",
    ],
  },
  TRUST_STATS: [
    { value: 50, suffix: "-60 min", label: "Session length" },
    { value: 100, suffix: "%", label: "Non-invasive" },
    { value: 10, suffix: "+ sessions", label: "Recommended · one per week" },
    { value: 6, suffix: " months+", label: "The effect continues after treatment" },
  ],
  WHAT_IS_BOWEN: {
    title: "What is Bowen Therapy?",
    description:
      "Your body works best when it is relaxed. But stress, fatigue and daily tension lock it into a constant state of alert. Bowen Therapy uses gentle, precise moves that send subtle signals to the mind, the body and the nervous system, without aggressive manipulation, without pain.",
    highlight:
      "The pauses between moves are just as important as the moves. In those moments of stillness, your body processes the information it received and activates its own mechanisms of self-healing and rebalancing. It is like a gentle reset for the whole body.",
    timeline: [
      {
        step: "01",
        title: "Assessment",
        description:
          "A short talk about your general state, history and personal needs.",
      },
      {
        step: "02",
        title: "Bowen moves",
        description:
          "Light, precise moves applied to specific points on the body.",
      },
      {
        step: "03",
        title: "Pauses",
        description:
          "Moments of stillness in which the body processes and responds to the stimuli.",
      },
      {
        step: "04",
        title: "Relaxation",
        description: "A state of deep calm during and after the session.",
      },
      {
        step: "05",
        title: "Feedback",
        description:
          "A talk about the experience and personalized recommendations.",
      },
    ],
  },
  SESSION_FEEL: {
    title: "How does a session feel?",
    subtitle:
      "It is not massage. It is not physiotherapy. It is something completely different, and that is exactly what makes it special.",
    cards: [
      {
        title: "Gentle as a touch",
        description:
          "Delicate, almost imperceptible moves. No strong pressure, no discomfort.",
        icon: "Feather",
      },
      {
        title: "You drift off from relaxation",
        description:
          "Many people fall asleep during the session, a sign of the deep relaxation the body was waiting for.",
        icon: "Moon",
      },
      {
        title: "No cracking or pulling",
        description:
          "Zero aggressive manipulation. Your body is not forced, it is invited to respond.",
        icon: "Shield",
      },
      {
        title: "Magic pauses",
        description:
          "Between moves, the therapist steps back. In that stillness, your body works.",
        icon: "Timer",
      },
      {
        title: "Just for you",
        description:
          "Every session is different, adapted to how you feel in that moment.",
        icon: "User",
      },
    ],
  },
  WHO_CHOOSES: {
    title: "Who is Bowen Therapy for?",
    subtitle:
      "You do not need a problem to come. But if you recognize yourself below, Bowen can help you.",
    items: [
      {
        title: "Stress and anxiety",
        description:
          "Do you feel under pressure all the time? Bowen helps the nervous system step out of alert mode.",
        icon: "Brain",
      },
      {
        title: "Chronic fatigue",
        description:
          "Do you sleep but never rest? Your body needs a reset, not another coffee.",
        icon: "Battery",
      },
      {
        title: "Tension and muscle pain",
        description:
          "Locked back, stiff neck, tense shoulders. Bowen releases without force.",
        icon: "Activity",
      },
      {
        title: "Unbalanced posture",
        description:
          "Hours at the desk, in the car, on the phone. The body adapts the wrong way, Bowen brings it back.",
        icon: "AlignCenter",
      },
      {
        title: "The need for deep relaxation",
        description:
          "You want a real break from everything. An hour in which you do nothing, and the body recalibrates.",
        icon: "Sparkles",
      },
      {
        title: "Sports recovery and injuries",
        description:
          "Sprains, strains, injuries or overuse. Bowen speeds up recovery without medication.",
        icon: "Dumbbell",
      },
      {
        title: "General wellbeing",
        description:
          "Nothing specific, but you feel something is off. Bowen reconnects the body with its balance.",
        icon: "Heart",
      },
    ],
    disclaimer:
      "Bowen Therapy is a complementary therapy. It does not replace specialist medical advice.",
  },
  ABOUT: {
    title: "About Bogdan Cherecheș",
    paragraphs: [
      "I came to Bowen out of need, not curiosity. My left hand was affected by overuse, my nerves had given out, and I had tried plenty of things without result. Bowen put me back on my feet and convinced me so strongly that I wanted to learn to do this for others too.",
      "I was not starting from zero. I graduated from the Faculty of Sport, specialization in Physical Therapy, in 2012, and worked for years as a physiotherapist and fitness instructor. I already knew the body, but Bowen showed me a much gentler way to help it.",
      "For almost two years I have worked exclusively with Bowen and have passed 400 people. Most come for recovery after fractures, back and joint pain, sports injuries or after a stroke. Others come for stress, anxiety or burnout, because they have simply reached the end of their strength.",
      "And the change really shows. Back and joint pain usually goes away in 8-10 sessions. Athletes return to training after about twenty sessions. And in those who have been through a stroke I have seen how they gradually regain movement on the affected side and recover noticeably faster. That is why I believe in what I do.",
    ],
    quote:
      "I believe in the power of Bowen Therapy and in activating the self-healing of the body, the mind and the nervous system. The body knows what to do, sometimes it just needs a little support.",
    credential: {
      title: "Diploma of Proficiency in the Bowen Technique",
      issuer: "Bowen Therapy Academy of Australia (BOWTECH®)",
      year: "2024",
      note: "Tap to see the diploma · Issued on 11 December 2024",
    },
  },
  HOW_TO_START: {
    title: "3 simple steps",
    subtitle: "From message to relaxation, in under a minute.",
    steps: [
      {
        step: "01",
        title: "Message Bogdan",
        description:
          "On WhatsApp or Messenger. Tell him how you feel and what you are looking for.",
        icon: "MessageCircle",
      },
      {
        step: "02",
        title: "Pick a date and time",
        description:
          "Bogdan proposes a slot, in Zalău or Șimleu Silvaniei.",
        icon: "Calendar",
      },
      {
        step: "03",
        title: "Come and relax",
        description:
          "Dressed comfortably, hydrated, no worries. Your body does the rest.",
        icon: "Smile",
      },
    ],
  },
  LOCATIONS: {
    title: "Where to find me",
    cards: [
      {
        city: "Zalău",
        address: "Strada Avram Iancu 47, Zalău",
        mapEmbed:
          "https://www.google.com/maps?q=Strada+Avram+Iancu+47,+Zalau,+Romania&output=embed",
        mapLink:
          "https://www.google.com/maps?q=Strada+Avram+Iancu+47,+Zalau,+Romania",
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
  },
  TESTIMONIALS: {
    title: "What people say",
    subtitle: "Real experiences from people who have tried Bowen Therapy.",
    reviews: [
      {
        name: "Maria D.",
        location: "Șimleu Silvaniei",
        text: "I had back pain for months. After the first session I slept the best I had in the last 6 months. I did not think something so gentle could have such a powerful effect.",
        rating: 5,
      },
      {
        name: "Andrei P.",
        location: "Zalău",
        text: "I came skeptical, I did not understand how a few light touches could do anything. I left amazed. The tension in my neck and shoulders was completely gone.",
        rating: 5,
      },
      {
        name: "Elena M.",
        location: "Șimleu Silvaniei",
        text: "Bogdan has a special gift. His calm and attention make you feel safe. I go monthly for the wellbeing each session gives me.",
        rating: 5,
      },
      {
        name: "Cristian L.",
        location: "Zalău",
        text: "After a skiing accident, nothing helped me. A friend sent me to Bogdan. Three sessions later, I was moving again without pain.",
        rating: 5,
      },
      {
        name: "Ana S.",
        location: "Șimleu Silvaniei",
        text: "I suffer from chronic stress and have tried everything possible. Bowen was the only thing that made me feel truly relaxed, from the first session.",
        rating: 5,
      },
    ],
  },
  FAQ_ITEMS: [
    {
      question: "What is Bowen Therapy?",
      answer:
        "Bowen Therapy is a gentle complementary technique that uses light, precise moves on the muscles, fascia and soft tissue, followed by pauses that let the body respond naturally. It is non-invasive, painless and suitable for all ages, from babies to the elderly.",
    },
    {
      question: "How does a session go?",
      answer:
        "A session lasts between 50 and 60 minutes. It starts with a short talk about your state, followed by Bowen moves applied to specific points, with pauses between procedures. You will be on a therapy table, dressed in loose clothes. Most people relax deeply, many even fall asleep.",
    },
    {
      question: "How long does a session last?",
      answer:
        "A typical session lasts between 50 and 60 minutes. More than 10 sessions are recommended, one per week, to let the body respond optimally.",
    },
    {
      question: "Is it painful?",
      answer:
        "Not at all. Bowen Therapy is very gentle, it does not involve strong pressure, pulling or cracking. Most people describe it as deeply relaxing. Many fall asleep during the session.",
    },
    {
      question: "Who is it suitable for?",
      answer:
        "For anyone, from children to the elderly, from athletes to sedentary people. It is suitable even for sensitive people, pregnant women or those who prefer a gentle approach. You do not need a specific problem; many come for relaxation and wellbeing.",
    },
    {
      question: "Do I need to prepare beforehand?",
      answer:
        "No special preparation is needed. Come in loose, comfortable clothes. One thing matters: hydration. Drink water before and after the session, water supports the body's natural regulation process.",
    },
    {
      question: "How many sessions are recommended?",
      answer:
        "More than 10 sessions are recommended, one per week. Many people notice improvements from the very first session. The body keeps responding to the therapy long after, and the effects can be felt even half a year later. Afterwards, the frequency adapts to your needs.",
    },
  ],
  FINAL_CTA: {
    headline: "Take the first step.",
    subheadline:
      "One message. One session. A state you deserve. Book now with Bogdan.",
    buttons: {
      whatsapp: "Book on WhatsApp",
      messenger: "Message on Messenger",
      phone: "Call directly",
    },
  },
  FUNNEL: {
    title: "Why are you coming to Bowen?",
    subtitle: "Select the main reason, the message fills in automatically.",
    options: [
      { label: "Relaxation", emoji: "🧘", message: "relaxation" },
      { label: "Pain / Discomfort", emoji: "💆", message: "muscle discomfort" },
      { label: "Stress / Anxiety", emoji: "🧠", message: "stress relief" },
      { label: "Sports recovery", emoji: "🏃", message: "sports recovery" },
      { label: "Something else", emoji: "✨", message: "a consultation" },
    ],
  },
  FOOTER: {
    name: "Bogdan Cherecheș",
    title: "Bowen Therapy",
    locations: "Zalău • Șimleu Silvaniei",
    disclaimer:
      "Bowen Therapy is a complementary therapy and does not replace specialist medical advice. The information on this site is for informational purposes and does not constitute medical advice.",
    copyright: `© ${new Date().getFullYear()} Bogdan Cherecheș - Bowen Therapy. All rights reserved.`,
  },
  SEO: {
    title: "Bowen Therapy Zalău and Șimleu Silvaniei | Bogdan Cherecheș",
    description:
      "Gentle Bowen Therapy in Zalău and Șimleu Silvaniei with Bogdan Cherecheș, physiotherapist. For back and joint pain, recovery after injuries and stress.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://bowenbogdan.ro",
    locale: "en_US",
  },
  REASSURANCE: [
    "Bogdan replies personally",
    "Usually the same day",
    "No obligation",
  ],
  NAV_LINKS: [
    { label: "What is Bowen", href: "#ce-este-bowen" },
    { label: "The session", href: "#sedinta" },
    { label: "About", href: "#despre" },
    { label: "Locations", href: "#locatii" },
    { label: "FAQ", href: "#faq" },
  ],
};
