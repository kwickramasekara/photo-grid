const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const photoGridConfig = require("./src/_data/config");
const viteConfig = require("./vite.config");
const config = require("./photo-grid.json");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    serverOptions: {
      port: photoGridConfig.port,
    },
    viteOptions: viteConfig,
  });

  // Returns the name of a given image (see src/_data/sanity.js)
  eleventyConfig.addNunjucksFilter(
    "extractPhotoTitleFromPhotoObj",
    function (sanityImageObj) {
      const { title, fileName } = sanityImageObj;
      return title ? title : fileName.split(".")[0];
    },
  );

  // Eleventy's RFC822 filter does not work because it expects a special date object
  eleventyConfig.addNunjucksFilter("toRFC822Date", function (dateString) {
    return new Date(dateString).toUTCString();
  });

  // Returns the absolute URL of a given path
  eleventyConfig.addNunjucksFilter("toAbsoluteURL", function (urlPart) {
    const { siteUrl, basePathName } = config;
    const homePageURL = basePathName ? `${siteUrl}/${basePathName}` : siteUrl;

    return urlPart
      ? urlPart.charAt(0) === "/"
        ? `${homePageURL}${urlPart}`
        : `${homePageURL}/${urlPart}`
      : homePageURL;
  });

  // Returns the relative URL of a given photo object (see src/_data/sanity.js)
  eleventyConfig.addNunjucksFilter(
    "toRelativeURLFromPhotoObj",
    function (sanityImageObj) {
      const extractedTitle = eleventyConfig.getFilter(
        "extractPhotoTitleFromPhotoObj",
      )(sanityImageObj);
      const slug = eleventyConfig.getFilter("slugify")(extractedTitle);

      return config.photoPathName
        ? `${config.photoPathName}/${slug}`
        : `${slug}`;
    },
  );

  // Returns the optimized URL of a given photo object (see src/_data/sanity.js)
  // Optimizations include: browser based file format, max width or height based on aspect ratio
  // Optional thumbnail parameter returns a smaller sized image
  eleventyConfig.addNunjucksFilter(
    "toOptimizedURLFromPhotoObj",
    function (sanityImageObj, thumbnail = false) {
      const { url, aspectRatio } = sanityImageObj;
      const size = thumbnail ? config.thumbnailWidth : config.photoWidth;

      return `${url}?auto=format&${aspectRatio > 1 ? "w=" : "h="}${size}`;
    },
  );

  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/styles");

  // Admin
  eleventyConfig.addPassthroughCopy("./src/admin/js");
  eleventyConfig.addPassthroughCopy("./src/admin/styles");

  return {
    dir: {
      input: "src",
      output: process.env.ELEVENTY_RUN_MODE == "serve" ? "site" : "dist",
    },
  };
};
