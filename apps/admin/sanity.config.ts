import { defineConfig } from "sanity";
import { media } from "sanity-plugin-media";

export default defineConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  title: "Photo Grid - Admin",
  basePath: "/admin",
  plugins: [media()],
});
