import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Context Menu",
  description: "A menu that opens at the pointer when the user right-clicks or long-presses an area.",
  baseUiUrl: "https://base-ui.com/react/components/context-menu",
  subComponents: {
    Root: {
      description: "The root provider component for the context menu. Manages state and context.",
      props: [],
    },
    Trigger: {
      description: "The element that opens the context menu on right-click.",
      renders: "<span>",
      props: [],
    },
    Portal: {
      description: "Portals the popup out of the DOM hierarchy.",
      props: [],
    },
    Positioner: {
      description: "Positions the popup at the cursor location.",
      renders: "<div>",
      props: [],
    },
    Popup: {
      description: "The popup container for the context menu items.",
      renders: "<div>",
      props: [],
    },
    Item: {
      description: "An individual action item in the context menu.",
      renders: "<div>",
      props: [],
    },
    Separator: {
      description: "A visual separator between groups of menu items.",
      renders: "<div>",
      props: [],
    },
  },
};

export default meta;
