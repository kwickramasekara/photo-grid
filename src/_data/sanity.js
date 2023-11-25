const EleventyFetch = require("@11ty/eleventy-fetch");
const config = require("./config");
require("dotenv").config();

/**
 * API call to Sanity to retrieve all image data.
 * Data is fetched every time by default, but can be changed with the CACHE_DURATION environment variable to reduce the number of API calls during development.
 * See 11ty documentation for cache duration options: https://www.11ty.dev/docs/plugins/fetch/#change-the-cache-duration
 * @returns {Promise}
 */
module.exports = async function () {
  const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
  const dataset = process.env.SANITY_STUDIO_DATASET || "production";
  const APIVersion = "v2023-06-02"; // Today's date in YYYY-MM-DD format for the latest version
  const query = `*[_type == "sanity.imageAsset"] | order(_createdAt ${config.ui.displayOrder}) { altText, description, title, url, "createdAt": _createdAt, "fileName": originalFilename, "lqip":metadata.lqip, "aspectRatio":metadata.dimensions.aspectRatio, "width":metadata.dimensions.width, "height":metadata.dimensions.height, "tags": opt.media.tags[]->name.current, "exif": metadata.exif }`;
  const encodedQuery = encodeURIComponent(query);

  const url = `https://${projectId}.api.sanity.io/${APIVersion}/data/query/${dataset}?query=${encodedQuery}`;

  if (!projectId) {
    console.log(
      "ERROR: No Sanity project ID found. Please add one to your environment variables.\n",
    );
    return;
  }

  return EleventyFetch(url, {
    directory: "./node_modules/.cache/photo-grid/data/sanity",
    duration: process.env.CACHE_DURATION || "0s", // fetch data every time by default
    type: "json",
    removeUrlQueryParams: true,
  }).then((data) => {
    return data.result;
  });
};
