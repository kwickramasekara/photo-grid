const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const viteOptions = require("./.vite");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions,
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
