import { defineConfig, defineType, renderStudio } from "sanity";
import { UserIcon } from "@sanity/icons";
import { media } from "sanity-plugin-media";
import { admin } from "../../../photo-grid.json";

const config = defineConfig({
  basePath: "/admin",
  dataset: import.meta.env.SANITY_STUDIO_DATASET || "production",
  document: {
    newDocumentOptions: () => [],
  },
  icon: UserIcon,
  plugins: [media()],
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  title: admin.title,
  schema: {
    types: [
      defineType({
        title: "Photo Grid Source Image",
        name: "photoGridSourceImage",
        type: "image",
        options: {
          metadata: ["blurhash", "lqip", "palette", "exif"],
        }, // exif metadata is not included by default
      }),
    ],
  },
});

renderStudio(document.getElementById("app"), config);
