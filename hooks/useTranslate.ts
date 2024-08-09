import translations from "./translations.json";
import { Language, useLanguage } from "../lib/LanguageContext";

export type TranslationKey = keyof typeof translations;

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
