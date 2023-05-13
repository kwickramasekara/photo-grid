import { defineConfig } from "sanity";

export default defineConfig({
  name: "default",
  title: "Photo Grid - Admin",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  basePath: "/admin",
});
