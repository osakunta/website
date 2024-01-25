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
        try {
            esbuild.buildSync({
                entryPoints: [
                    "src/components/Gallery.tsx",
                    "src/components/Calendar.tsx",
                ],
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
        } catch (e) {
            console.log(e);
        }
        console.log("Components built");
    });

    config.addFilter("esbuild", async function (value) {
        const result = esbuild.buildSync({
            stdin: {
                contents: value,
                resolveDir: "node_modules",
                sourcefile: this.page.inputPath,
            },
            write: false,
            bundle: true,
            minify: process.env.NODE_ENV === "production",
        });

        console.log(
            `Built script from ${this.page.inputPath}, size: ${result.outputFiles[0].text.length} bytes`
        );

        return result.outputFiles[0].text;
    });

    config.addWatchTarget("./src/site");

    config.addPassthroughCopy({ "./src/img": "img" });

    config.addPlugin(EleventyHtmlBasePlugin);

    return {
        pathPrefix: process.env.PATH_PREFIX || "",
    };
};
