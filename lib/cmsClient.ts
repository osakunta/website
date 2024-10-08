import { TranslationKey } from "@/hooks/useTranslate";
import { createDirectus, rest } from "@directus/sdk";

type Schema = {
  NavigationLink: NavigationLink[];
  Contact: Contact[];
  Translation: Translation[];
};

export type NavigationLink = {
  label_key: TranslationKey;
  url: string;
  category: "GENERAL" | "FOR_MEMBERS";
};

export type Contact = {
  label_key: TranslationKey;
  first_name: string;
  last_name: string;
  contact: string;
  id: number;
};

/*
 * You shouldnt use this type, use the better typed one in useTranslate.tsx instead
 */
export type Translation = {
  key: string;
  fi: string;
  en: string;
  sv: string;
};

const createClient = () => {
  if (process.env.DIRECTUS_URL === undefined) {
    throw Error("Environment variable DIRECTUS_URL not defined");
  }
  return createDirectus<Schema>(process.env.DIRECTUS_URL).with(rest());
};

export default createClient;
