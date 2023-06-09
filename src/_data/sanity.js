const EleventyFetch = require("@11ty/eleventy-fetch");
const config = require("./config");
require("dotenv").config();

/**
 * API call to Sanity to retrieve all image data. Results are cached - if you want to purge it,
 * delete the .cache/sanity folder and rerun the build.
 * @returns {Promise}
 */
module.exports = async function () {
  const projectId =
    process.env.SANITY_STUDIO_PROJECT_ID || config.admin?.sanity?.projectId;
  const dataset =
    process.env.SANITY_STUDIO_DATASET || config.admin?.sanity?.dataset;
  const APIVersion = "v2023-06-02"; // Today's date in YYYY-MM-DD format for the latest version
  const query = `*[_type == "sanity.imageAsset"] | order(_createdAt ${config.displayOrder}) { altText, title, url, "lqip":metadata.lqip, "aspectRatio":metadata.dimensions.aspectRatio, "width":metadata.dimensions.width, "height":metadata.dimensions.height }`;
  const encodedQuery = encodeURIComponent(query);

  const url = `https://${projectId}.api.sanity.io/${APIVersion}/data/query/${dataset}?query=${encodedQuery}`;

  return EleventyFetch(url, {
    directory: "./.cache/data-sanity",
    duration: "1d", // keep for 1 day,
    type: "json",
    removeUrlQueryParams: true,
  }).then((data) => {
    return data.result;
  });
};
