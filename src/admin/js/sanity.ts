import { defineConfig, defineType, defineField, renderStudio } from "sanity";
import { UserIcon } from "@sanity/icons";
import { media } from "sanity-plugin-media";
import { admin } from "../../../photo-grid.json";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  basePath: "/admin",
  dataset: import.meta.env.SANITY_STUDIO_DATASET || admin.sanity.dataset,
  document: {
    newDocumentOptions: () => [],
  },
  icon: UserIcon,
  plugins: [media(), visionTool()],
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID || admin.sanity.projectId,
  title: admin.title,
  schema: {
    types: [
      defineType({
        title: "Photo Grid Source Image",
        name: "photoGridSourceImage",
        type: "image",
        options: {
          metadata: ["blurhash", "lqip", "palette", "exif", "location"],
        },
      }),
    ],
  },
});

renderStudio(document.getElementById("app"), config);
