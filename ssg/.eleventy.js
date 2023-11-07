require("dotenv").config();
const esbuild = require("esbuild");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = (config) => {
  if (process.env.PATH_PREFIX) {
    console.log("BUILDING TO PREFIX " + process.env.PATH_PREFIX);
  }

  config.addWatchTarget("./src/components");

  config.on("eleventy.before", ({ runMode }) => {
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
