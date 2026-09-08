"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { german, spanish } from "@/data/translations";

type Language = "en" | "es" | "de";
const languageNames: Record<Language, string> = { en: "English", es: "Español", de: "Deutsch" };
const languageLabels: Record<Language, string> = { en: "Language", es: "Idioma", de: "Sprache" };
const titles: Record<Language, string> = {
  en: "Mosiah Azuaje | Full Stack Developer – Web, SEO & GEO",
  es: "Mosiah Azuaje | Desarrollador Full Stack – Web, SEO y GEO",
  de: "Mosiah Azuaje | Full-Stack-Entwickler – Web, SEO & GEO",
};
const dictionaries: Record<Language, Record<string, string>> = { en: {}, es: spanish, de: german };
const storageKey = "portfolio-language";
const changeEvent = "portfolio-language-change";
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(changeEvent, callback);
  };
}
let currentLanguage: Language = "en";
function getSnapshot(): Language {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "es" || saved === "en" || saved === "de") currentLanguage = saved;
  } catch { /* The selector also works when storage is unavailable. */ }
  return currentLanguage;
}
const LanguageContext = createContext({
  language: "en" as Language,
  setLanguage: (_language: Language) => { void _language; },
  t: (text: string) => text,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, () => "en" as Language);
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = titles[language];
  }, [language]);
  function setLanguage(next: Language) {
    currentLanguage = next;
    try { localStorage.setItem(storageKey, next); } catch { /* Optional persistence. */ }
    window.dispatchEvent(new Event(changeEvent));
  }
  function t(text: string) {
    return dictionaries[language][text] ?? text;
  }
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <div role="group" aria-label={languageLabels[language]} className="flex shrink-0 items-center rounded-full border border-white/20 bg-white/5 p-1">
      {(["en", "es", "de"] as const).map((locale) => (
        <button key={locale} type="button" lang={locale} aria-label={languageNames[locale]} aria-pressed={language === locale} onClick={() => setLanguage(locale)} className={`rounded-full px-3 py-1.5 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${language === locale ? "bg-white text-slate-950" : "text-slate-300 hover:text-white"}`}>
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
