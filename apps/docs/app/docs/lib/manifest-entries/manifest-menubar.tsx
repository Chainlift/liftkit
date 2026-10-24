import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleMenubar } from "@/examples";

const menuBar: ComponentEntry = {
  title: "Menubar",
  Component: ExampleMenubar,
  subComponents: {
    Root: {
      description: "A horizontal menu bar that groups multiple menus together.",
      renders: "<div>",
      props: [],
    },
  },
};

export { menuBar };
