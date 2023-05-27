import { defineConfig } from "sanity";
import { UserIcon } from "@sanity/icons";
import { media } from "sanity-plugin-media";
import { admin } from "../../photo-grid.json";

export default defineConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  icon: UserIcon,
  title: admin.title,
  basePath: admin.basePath,
  plugins: [media()],
  document: {
    newDocumentOptions: () => [],
  },
});
