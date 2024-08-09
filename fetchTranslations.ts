import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { writeFile } from "fs/promises";
import createClient from "./lib/cmsClient";
import { readItems } from "@directus/sdk";

export async function fetchTranslations() {
  const client = createClient();
  try {
    const translations = await client.request(readItems("Translation"));
    // go from [{key: "hello", fi: "Hei", sv: "Hej", en: "Hello"}] to {"hello": {fi: "Hei", sv: "Hej", en: "Hello"}}
    const mappedTranslations = translations.reduce(
      (map, translation) => ({
        ...map,
        [translation.key]: {
          fi: translation.fi,
          en: translation.en,
          sv: translation.sv,
        },
      }),
      {},
    );

    await writeFile(
      "./hooks/translations.json",
      JSON.stringify(mappedTranslations),
    );
    console.log("Downloaded and saved translations");
  } catch (error) {
    console.log(error);
  }
}

fetchTranslations();
