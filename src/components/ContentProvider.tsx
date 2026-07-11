"use client";

import { createContext, useContext } from "react";
import { roContent, type Locale, type SiteContent } from "@/lib/content";

interface LocaleValue {
  locale: Locale;
  content: SiteContent;
}

// Default is Romanian, so any component rendered without a provider (the whole
// RO site) behaves exactly as before.
const ContentContext = createContext<LocaleValue>({
  locale: "ro",
  content: roContent,
});

export function ContentProvider({
  locale,
  content,
  children,
}: {
  locale: Locale;
  content: SiteContent;
  children: React.ReactNode;
}) {
  return (
    <ContentContext.Provider value={{ locale, content }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): SiteContent {
  return useContext(ContentContext).content;
}

export function useLocale(): Locale {
  return useContext(ContentContext).locale;
}
