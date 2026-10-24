import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleIconButton } from "@/examples";

const iconButton: ComponentEntry = {
  title: "IconButton",
  Component: ExampleIconButton,
  subComponents: {
    Root: {
      description: "An icon-only button with support for variants, colors, and a state layer.",
      renders: "<button>",
      props: [],
    },
  },
};

export { iconButton };
