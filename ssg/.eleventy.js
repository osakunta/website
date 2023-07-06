require("dotenv").config();
const esbuild = require("esbuild");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const { I18n } = require("i18n");
const fs = require("fs").promises;
const axios = require("axios");
const path = require("path");

const LOCALES_DIR = path.join(__dirname, "./src/locales");

const fetchI18n = async () => {
  const i18nQuery = {
    query: `
        {
            text {
                key
                text_fi
                text_en
                text_sv
            }
        }
    `,
  };

  const res = await axios.post(process.env.CMS_URL, i18nQuery);

  const locales = res.data.data.text.reduce(
    ({ fi, en, sv }, { key, text_fi, text_en, text_sv }) => ({
      fi: {
        ...fi,
        [key]: text_fi,
      },
      en: {
        ...en,
        [key]: text_en,
      },
      sv: {
        ...sv,
        [key]: text_sv,
      },
    }),
    {}
  );

  await fs.writeFile(
    path.join(LOCALES_DIR, "fi.json"),
    JSON.stringify(locales.fi, null, 2)
  );

  await fs.writeFile(
    path.join(LOCALES_DIR, "en.json"),
    JSON.stringify(locales.en, null, 2)
  );

  await fs.writeFile(
    path.join(LOCALES_DIR, "sv.json"),
    JSON.stringify(locales.sv, null, 2)
  );
};

module.exports = (config) => {
  if (process.env.PATH_PREFIX) {
    console.log("BUILDING TO PREFIX " + process.env.PATH_PREFIX);
  }

  config.on("eleventy.before", fetchI18n);

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

  config.addWatchTarget("./src/site");

  config.addPassthroughCopy({ "./src/img": "img" });

  config.addPlugin(EleventyRenderPlugin);

  config.addPlugin(EleventyHtmlBasePlugin);

  const i18n = new I18n({
    locales: ["fi", "en", "sv"],
    directory: LOCALES_DIR,
  });

  config.addTransform("translate", async function (content) {
    i18n.setLocale(this.page.locale);
    return content.replace(/t:([\w:]+)/g, (_, key) => i18n.__(key));
  });

  return {
    pathPrefix: process.env.PATH_PREFIX || "",
  };
};
