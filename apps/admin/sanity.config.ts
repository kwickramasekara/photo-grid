import { defineConfig } from "sanity";
import { UserIcon } from "@sanity/icons";
import { media } from "sanity-plugin-media";
import { admin } from "../../photo-grid.json";

export default defineConfig({
  basePath: process.env.MODE === "development" ? admin.basePath : undefined,
  dataset: process.env.SANITY_STUDIO_DATASET || admin.sanity.dataset,
  document: {
    newDocumentOptions: () => [],
  },
  icon: UserIcon,
  plugins: [media()],
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || admin.sanity.projectId,
  title: admin.title,
});
