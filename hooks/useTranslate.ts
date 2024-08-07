import { useContext } from "react";
import translations from "./translations.json";
import {
  Language,
  LanguageContext,
  useLanguageContext,
} from "../lib/LanguageContext";

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
  const { language } = useLanguageContext();
  return translate(language);
};

export default useTranslate;
