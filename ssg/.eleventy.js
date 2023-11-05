require("dotenv").config();
const esbuild = require("esbuild");
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

  const locales = await fs.mkdir(LOCALES_DIR, { recursive: true });

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

  config.addWatchTarget("./src/components");

  config.on("eleventy.before", ({ runMode }) => {
    console.log(runMode);
    console.log("Building components");
    esbuild.buildSync({
      entryPoints: ["src/components/Gallery.tsx"],
      outdir: "_site/components",
      minify: runMode === "build",
      bundle: true,
      loader: {
        ".woff2": "file",
        ".woff": "file",
        ".ttf": "file",
        ".svg": "file",
        ".gif": "file",
      },
    });
    console.log("Components built");
  });

  config.addWatchTarget("./src/site");

  config.addPassthroughCopy({ "./src/img": "img" });

  config.addPlugin(EleventyHtmlBasePlugin);

  return {
    pathPrefix: process.env.PATH_PREFIX || "",
  };
};
