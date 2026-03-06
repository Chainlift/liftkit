import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleToggle } from "@/liftkit/examples";

const toggle: ComponentEntry = {
  title: "Toggle",
  Component: ExampleToggle,
  subComponents: {
    Root: {
      description: "A two-state toggle button.",
      renders: "<button>",
      props: [],
    },
  },
};

export { toggle };
