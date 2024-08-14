import translations from "./translations.json";
import { Language, useLanguage } from "../lib/LanguageContext";
import { z } from "zod";

export const translationKeySchema = z.enum(
  Object.keys(translations) as [keyof typeof translations],
);

export type TranslationKey = z.infer<typeof translationKeySchema>;

const translate = (key: TranslationKey, language: Language): string => {
  const translation = translations[key];

  if (translation === undefined) {
    throw new Error(
      `Could not find translation ${key} (try running "npm run fetchTranslations")`,
    );
  }

  return translation[language];
};

const useTranslate = () => {
  const { language } = useLanguage();
  return (key: TranslationKey, languageOverride?: Language) =>
    translate(key, languageOverride ?? language);
};

export default useTranslate;
