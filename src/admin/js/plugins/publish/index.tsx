import { definePlugin } from "sanity";
import { route } from "sanity/router";
import { PublishIcon } from "@sanity/icons";
import component from "./component";

export const publish = definePlugin(() => {
  return {
    name: "sanity-plugin-photo-grid-publish",
    tools: [
      {
        name: "publish",
        title: "Publish",
        icon: PublishIcon,
        component,
        router: route.create("/*"),
      },
    ],
  };
});
