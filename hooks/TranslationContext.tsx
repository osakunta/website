import { Translation, TranslationKey } from "@/lib/cmsClient";
import { createContext, useContext } from "react";
import { Language, useLanguage } from "../lib/LanguageContext";

export const TranslationContext = createContext<Translation[] | null>(null);

type TranslationProviderProps = {
  translations: Translation[];
  children: React.ReactNode;
};

export const TranslationProvider = ({
  translations,
  children,
}: TranslationProviderProps) => (
  <TranslationContext.Provider value={translations}>
    {children}
  </TranslationContext.Provider>
);

const translate = (
  translations: Translation[],
  key: TranslationKey,
  language: Language,
): string => {
  const translation = translations.find((t) => t.key === key);

  if (translation === undefined) {
    throw new Error(
      `Could not find translation ${key} (see that it exists in the CMS)`,
    );
  }

  return translation[language];
};

export const useTranslate = () => {
  const { language } = useLanguage();
  const translations = useContext(TranslationContext);
  if (translations === null) {
    throw new Error(
      "useTranslate failed, make sure TranslationProvider is set",
    );
  }
  return (key: TranslationKey, languageOverride?: Language) =>
    translate(translations, key, languageOverride ?? language);
};
