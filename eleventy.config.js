const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const photoGridConfig = require("./src/_data/config");
const viteConfig = require("./vite.config");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    serverOptions: {
      port: photoGridConfig.port,
    },
    viteOptions: viteConfig,
  });

  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/styles");

  // Admin
  eleventyConfig.addPassthroughCopy("./src/admin/js");
  eleventyConfig.addPassthroughCopy("./src/admin/styles");

  // Returns the name of a given image (see src/_data/sanity.js)
  eleventyConfig.addFilter("extractImageName", function (sanityImageObj) {
    return sanityImageObj.title
      ? sanityImageObj.title
      : sanityImageObj.fileName.split(".")[0];
  });

  return {
    dir: {
      input: "src",
      output: process.env.ELEVENTY_RUN_MODE == "serve" ? "site" : "dist",
    },
  };
};
