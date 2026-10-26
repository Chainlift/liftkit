import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Navigation Menu",
  description: "A set of links, with optional dropdown panels, for navigating a site.",
  baseUiUrl: "https://base-ui.com/react/components/navigation-menu",
  subComponents: {
    Root: {
      description: "The root container for the navigation menu. Manages state and includes a built-in positioner.",
      renders: "<nav>",
      props: [],
    },
    List: {
      description: "The list of top-level navigation menu items.",
      renders: "<ul>",
      props: [],
    },
    Item: {
      description: "A top-level item in the navigation menu list.",
      renders: "<li>",
      props: [],
    },
    Trigger: {
      description: "The button that opens a navigation menu content panel.",
      renders: "<button>",
      props: [],
    },
    Content: {
      description: "The expandable content panel for a navigation menu item.",
      renders: "<div>",
      props: [],
    },
    Positioner: {
      description: "Positions the popup relative to the navigation menu. Includes Portal, Popup, and Viewport.",
      renders: "<div>",
      props: [],
    },
    Link: {
      description: "A navigation link within the menu.",
      renders: "<a>",
      props: [],
    },
    Indicator: {
      description: "A visual indicator (arrow) pointing to the active trigger.",
      renders: "<div>",
      props: [],
    },
  },
};

export default meta;
