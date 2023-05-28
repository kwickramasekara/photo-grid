import { defineCliConfig } from "sanity/cli";
import { admin } from "../../photo-grid.json";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  vite: {
    cacheDir: "../../node_modules/.sanity/vite",
  },
  project: {
    basePath: admin.basePath,
  },
});
