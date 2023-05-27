const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const viteConfig = require("./vite.config");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: viteConfig,
  });

  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/js");

  return {
    dir: {
      input: "src",
      output: process.env.ELEVENTY_RUN_MODE == "serve" ? "site" : "dist",
    },
  };
};
