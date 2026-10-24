import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleMenu } from "@/liftkit/examples";

const menu: ComponentEntry = {
  title: "Menu",
  Component: ExampleMenu,
  subComponents: {
    Root: {
      description: "The root provider component for the menu. Manages state and context.",
      props: [],
    },
    Trigger: {
      description: "The button that opens the menu.",
      renders: "<button>",
      props: [],
    },
    Portal: {
      description: "Portals the popup out of the DOM hierarchy.",
      props: [],
    },
    Positioner: {
      description: "Positions the popup relative to the trigger.",
      renders: "<div>",
      props: [],
    },
    Popup: {
      description: "The popup container for the menu items.",
      renders: "<div>",
      props: [],
    },
    Arrow: {
      description: "An optional arrow pointing from the popup to the trigger.",
      renders: "<div>",
      props: [],
    },
    Item: {
      description: "An individual action item in the menu.",
      renders: "<div>",
      props: [],
    },
    Separator: {
      description: "A visual separator between groups of menu items.",
      renders: "<div>",
      props: [],
    },
    SubmenuRoot: {
      description: "The root provider for a nested submenu.",
      props: [],
    },
    SubmenuTrigger: {
      description: "The menu item that opens a submenu.",
      renders: "<div>",
      props: [],
    },
  },
};

export { menu };
