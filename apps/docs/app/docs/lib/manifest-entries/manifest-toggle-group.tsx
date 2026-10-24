import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleToggleGroup } from "@/examples";

const toggleGroup: ComponentEntry = {
  title: "ToggleGroup",
  Component: ExampleToggleGroup,
  subComponents: {
    Root: {
      description: "Groups multiple toggle buttons and manages their selection state.",
      renders: "<div>",
      props: [],
    },
  },
};

export { toggleGroup };
