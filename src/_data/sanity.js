const EleventyFetch = require("@11ty/eleventy-fetch");
const config = require("./config");
require("dotenv").config({ path: ".env.local" });

// API call to Sanity to retrieve all image data. Results are cached for a day.
// If you want to purge the cache, delete the .cache/sanity folder and rerun the build.
module.exports = async function () {
  const projectId =
    process.env.SANITY_STUDIO_PROJECT_ID || config.admin?.sanity?.projectId;
  const dataset =
    process.env.SANITY_STUDIO_DATASET || config.admin?.sanity?.dataset;
  const query = `*[_type == "sanity.imageAsset"] | order(_createdAt ${config.displayOrder}) { altText, title, url, "lqip":metadata.lqip, "aspectRatio":metadata.dimensions.aspectRatio, "width":metadata.dimensions.width, "height":metadata.dimensions.height }`;
  let url = `https://${projectId}.api.sanity.io/v2023-06-02/data/query/${dataset}?query=${encodeURIComponent(
    query
  )}`;

  /* This returns a promise */
  return EleventyFetch(url, {
    directory: "./.cache/sanity",
    duration: "1d", // save for 1 day,
    type: "json",
    removeUrlQueryParams: true,
  }).then((data) => {
    return data.result;
  });
};
