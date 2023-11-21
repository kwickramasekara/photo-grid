const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const slugify = require("@11ty/eleventy/src/Filters/Slugify");
const photoGridConfig = require("./src/_data/config");
const viteConfig = require("./vite.config");
const config = require("./photo-grid.json");

module.exports = function (eleventyConfig) {
  const extractTitleFromSanityObj = (obj) =>
    obj.title ? obj.title : obj.fileName.split(".")[0];

  eleventyConfig.addPlugin(EleventyVitePlugin, {
    serverOptions: {
      port: photoGridConfig.port,
    },
    viteOptions: viteConfig,
  });

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
      const extractedTitle = extractTitleFromSanityObj(sanityImageObj);
      const slug = slugify(extractedTitle);

      return config.photoPathName
        ? `${config.photoPathName}/${slug}`
        : `${slug}`;
    },
  );

  // Returns the name of a given image (see src/_data/sanity.js)
  eleventyConfig.addFilter("extractImageTitle", function (sanityImageObj) {
    return extractTitleFromSanityObj(sanityImageObj);
  });

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
