const esbuild = require("esbuild");
const pluginWebc = require("@11ty/eleventy-plugin-webc");
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

  config.addPlugin(pluginWebc, {
    components: "./src/site/_includes/components/**/*.webc",
  });
  config.addPlugin(EleventyRenderPlugin);
};
