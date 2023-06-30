require('dotenv').config();
const esbuild = require("esbuild");
const { EleventyRenderPlugin } = require("@11ty/eleventy");


module.exports = (config) => {
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

  config.addWatchTarget("./src");
  config.addWatchTarget("./src/site");

  config.addPassthroughCopy({"./src/img": "img"});

  config.addPlugin(EleventyRenderPlugin);
};
