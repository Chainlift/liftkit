import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Avatar",
  description: "An image of a person or entity, with a fallback when the image is missing.",
  baseUiUrl: "https://base-ui.com/react/components/avatar",
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

export default meta;
