import { definePlugin } from "sanity";
import { route } from "sanity/router";
import { PublishIcon } from "@sanity/icons";
import publish from "./publish";

export const deploy = definePlugin(() => {
  return {
    name: "sanity-plugin-photo-grid-publish",
    tools: [
      {
        name: "publish",
        title: "Publish",
        icon: PublishIcon,
        component: publish,
        router: route.create("/*"),
      },
    ],
  };
});
