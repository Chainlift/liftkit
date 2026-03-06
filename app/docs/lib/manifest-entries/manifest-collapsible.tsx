import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleCollapsible } from "@/liftkit/examples";

const collapsible: ComponentEntry = {
  title: "Collapsible",
  Component: ExampleCollapsible,
  subComponents: {
    Root: {
      description: "The root provider component for the collapsible. Manages open/close state.",
      props: [],
    },
    Trigger: {
      description: "The button that toggles the collapsible panel open and closed.",
      renders: "<button>",
      props: [],
    },
    Panel: {
      description: "The collapsible content panel that expands and collapses.",
      renders: "<div>",
      props: [],
    },
  },
};

export { collapsible };
