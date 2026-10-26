import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Select",
  description: "A button that opens a list of options to choose one from.",
  baseUiUrl: "https://base-ui.com/react/components/select",
  subComponents: {
    Root: {
      description: "The root provider component for the select. Manages state and context.",
      props: [],
    },
    Trigger: {
      description: "The button that opens the select dropdown.",
      renders: "<button>",
      props: [],
    },
    Value: {
      description: "Displays the currently selected value.",
      renders: "<span>",
      props: [],
    },
    Icon: {
      description: "The dropdown indicator icon within the trigger.",
      renders: "<span>",
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
      description: "The dropdown popup container.",
      renders: "<div>",
      props: [],
    },
    ScrollUpArrow: {
      description: "A scroll indicator at the top of the popup when content overflows.",
      renders: "<div>",
      props: [],
    },
    ScrollDownArrow: {
      description: "A scroll indicator at the bottom of the popup when content overflows.",
      renders: "<div>",
      props: [],
    },
    List: {
      description: "The list container for select items.",
      renders: "<ul>",
      props: [],
    },
    Item: {
      description: "An individual selectable option in the select list.",
      renders: "<li>",
      props: [],
    },
    ItemIndicator: {
      description: "Renders an indicator when the item is selected.",
      renders: "<span>",
      props: [],
    },
    ItemText: {
      description: "The text content of a select item.",
      renders: "<span>",
      props: [],
    },
  },
};

export default meta;
