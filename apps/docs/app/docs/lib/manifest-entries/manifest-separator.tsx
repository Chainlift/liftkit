import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleSeparator } from "@/examples";

const separator: ComponentEntry = {
  title: "Separator",
  Component: ExampleSeparator,
  subComponents: {
    Root: {
      description: "A visual divider between content sections.",
      renders: "<div>",
      props: [],
    },
  },
};

export { separator };
