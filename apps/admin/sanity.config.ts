import { defineConfig } from "sanity";
import { UserIcon } from "@sanity/icons";
import { media } from "sanity-plugin-media";

export default defineConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  icon: UserIcon,
  title: "Photo Grid - Admin",
  basePath: "/admin",
  plugins: [media()],
});
