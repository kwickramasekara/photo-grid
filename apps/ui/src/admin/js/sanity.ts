import { defineConfig, renderStudio } from "sanity";
import { UserIcon } from "@sanity/icons";
import { media } from "sanity-plugin-media";
import { admin } from "../../../../../photo-grid.json";

const config = defineConfig({
  basePath: "/admin",
  dataset: import.meta.env.SANITY_STUDIO_DATASET || admin.sanity.dataset,
  document: {
    newDocumentOptions: () => [],
  },
  icon: UserIcon,
  plugins: [media()],
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID || admin.sanity.projectId,
  title: admin.title,
});

renderStudio(document.getElementById("app"), config);
