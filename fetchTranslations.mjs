import "dotenv/config";
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

    await writeFile("./hooks/translations.json", JSON.stringify(data, null, 2));
    console.log("Downloaded and saved translations.json");
  } catch (error) {
    console.error("Error downloading translations.json :", error);
  }
}
