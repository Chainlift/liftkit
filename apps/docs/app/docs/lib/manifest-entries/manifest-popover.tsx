import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExamplePopover } from "@/examples";

const popover: ComponentEntry = {
  title: "Popover",
  Component: ExamplePopover,
  subComponents: {
    Root: {
      description: "The root provider component for the popover. Manages open/close state.",
      props: [],
    },
    Trigger: {
      description: "The element that opens the popover.",
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
      description: "The popup container for the popover content.",
      renders: "<div>",
      props: [],
    },
    Arrow: {
      description: "An optional arrow pointing from the popup to the trigger.",
      renders: "<div>",
      props: [],
    },
    Title: {
      description: "Accessible title for the popover.",
      renders: "<h2>",
      props: [],
    },
    Description: {
      description: "Accessible description for the popover.",
      renders: "<p>",
      props: [],
    },
    Close: {
      description: "A button that closes the popover when clicked.",
      renders: "<button>",
      props: [],
    },
  },
};

export { popover };
