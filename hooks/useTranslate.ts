import translations from "./translations.json";
import { Language, useLanguage } from "../lib/LanguageContext";

type TranslationKey = keyof typeof translations;

const translate =
  (language: Language) =>
  (key: TranslationKey): string => {
    const translation = translations[key];

    if (translation === undefined) {
      throw new Error(
        `Could not find translation ${key} (something is very wrong)`,
      );
    }

    return translation[language];
  };

const useTranslate = () => {
  const { language } = useLanguage();
  return translate(language);
};

export default useTranslate;
