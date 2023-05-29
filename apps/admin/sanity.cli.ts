import { defineCliConfig } from "sanity/cli";
import { admin } from "../../photo-grid.json";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || admin.sanity.projectId,
    dataset: process.env.SANITY_STUDIO_DATASET || admin.sanity.dataset,
  },
  project: {
    basePath: admin.basePath,
  },
  vite: {
    cacheDir: "../../node_modules/.sanity/vite",
  },
});
