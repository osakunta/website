import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { writeFile } from "fs/promises";

export async function fetchTranslations() {
  if (process.env.CMS_URL === undefined) {
    console.error("CMS_URL is not defined. Could not fetch translations.");
    return;
  }

  try {
    console.log("Fetching translations.json");
    const response = await fetch(process.env.CMS_URL + "/items/text");
    if (!response.ok) {
      throw new Error(
        `Failed to download translations: ${response.statusText}`,
      );
    }

    const data = await response.json();

    const translations = data.data.reduce(
      (translations, value) => ({
        ...translations,
        [value.key]: {
          fi: value.text_fi,
          en: value.text_en,
          sv: value.text_sv,
        },
      }),
      {},
    );

    await writeFile("./hooks/translations.json", JSON.stringify(translations));
    console.log(
      `Downloaded and saved translations ${response.status === 304 ? "cached" : ""}`,
    );
  } catch (error) {
    console.error("Error downloading translations :", error);
  }
}

fetchTranslations();
