import esbuild from "esbuild";
import i18n from "eleventy-plugin-i18n";
import axios from "axios";
import { UserConfig } from "@11ty/eleventy";

const CMS_URL = process.env.CMS_URL;

module.exports = async (config: UserConfig) => {
  config.on("eleventy.after", () => {
    return esbuild.build({
      entryPoints: ["src/lib/calendar.js"],
      alias: {
        react: "preact/compat",
        "react-dom": "preact/compat",
      },
      outdir: "_site/lib",
      minify: false,
      bundle: true,
      sourcemap: true,
    });
  });

  /* const res = await axios.get(CMS_URL + "/text");
  const translations = res.data.reduce(
    (translations, { key, text_fi, text_en, text_sv }) => ({
      ...translations,
      [key]: { fi: text_fi, en: text_en, sv: text_sv },
    }),
    {}
  );

  console.log(translations); */

  config.addPlugin(i18n, {
    translations: {
      home: {
        welcome: {
          fi: "Tervetuloa SatOn sivuille",
          en: "Welcome in English",
          sv: "Samma på svenska",
        },
      },
    },
    fallbackLocales: {
      en: "fi",
      sv: "fi",
    },
  });

  config.addWatchTarget("./src");
  config.addWatchTarget("./src/site");

  config.addPassthroughCopy({ "./src/img": "img" });
};
