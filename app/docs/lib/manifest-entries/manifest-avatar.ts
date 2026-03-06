import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleAvatar } from "@/liftkit/examples";

const avatar: ComponentEntry = {
  title: "Avatar",
  Component: ExampleAvatar,
  subComponents: {
    Root: {
      description: "The root container for the avatar.",
      renders: "<span>",
      props: [],
    },
    Image: {
      description: "Displays the avatar image. Falls back to the Fallback component if the image fails to load.",
      renders: "<img>",
      props: [],
    },
    Fallback: {
      description: "Rendered when the avatar image is unavailable or loading.",
      renders: "<span>",
      props: [],
    },
  },
};

export { avatar };
