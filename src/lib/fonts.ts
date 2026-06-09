import { Bricolage_Grotesque, Inter } from "next/font/google";

// Display: Bricolage Grotesque — warm, characterful grotesque. Deliberately
// breaks the "wellness = Playfair serif" cliché while staying readable for an
// older Romanian audience.
export const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Body: Inter — neutral, highly legible. Brand voice is calm and clear.
export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});
