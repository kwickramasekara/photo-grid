const EleventyFetch = require("@11ty/eleventy-fetch");
const config = require("./config");
require("dotenv").config();

/**
 * API call to Sanity to retrieve all image data.
 * Results are cached - if you want to purge it, delete the following cache folder and rerun the build:
 * node_modules/.cache/photo-grid/data/sanity
 * You can also change both the cache location and duration with CACHE_DIR and CACHE_DURATION environment variables respectively.
 * See 11ty documentation for cache duration options: https://www.11ty.dev/docs/plugins/fetch/#change-the-cache-duration
 * @returns {Promise}
 */
module.exports = async function () {
  const projectId =
    process.env.SANITY_STUDIO_PROJECT_ID || config.admin?.sanity?.projectId;
  const dataset =
    process.env.SANITY_STUDIO_DATASET || config.admin?.sanity?.dataset;
  const APIVersion = "v2023-06-02"; // Today's date in YYYY-MM-DD format for the latest version
  const query = `*[_type == "sanity.imageAsset"] | order(_createdAt ${config.displayOrder}) { altText, description, title, url, "fileName": originalFilename, "lqip":metadata.lqip, "aspectRatio":metadata.dimensions.aspectRatio, "width":metadata.dimensions.width, "height":metadata.dimensions.height, "tags": opt.media.tags[]->name.current, "exif": metadata.exif }`;
  const encodedQuery = encodeURIComponent(query);
  const cacheDir = process.env.CACHE_DIR || "./node_modules/.cache/photo-grid";

  const url = `https://${projectId}.api.sanity.io/${APIVersion}/data/query/${dataset}?query=${encodedQuery}`;

  return EleventyFetch(url, {
    directory: cacheDir + "/data/sanity",
    duration: process.env.CACHE_DURATION || "1d", // keep for 1 day,
    type: "json",
    removeUrlQueryParams: true,
  }).then((data) => {
    return data.result;
  });
};
