import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Autocomplete",
  description: "An input that suggests options as you type.",
  baseUiUrl: "https://base-ui.com/react/components/autocomplete",
  knobs: {
    autoHighlight: {
      kind: "boolean",
      label: "Auto Highlight",
      default: false,
      description: "Whether the first matching option is highlighted as you type.",
    },
    disabled: {
      kind: "boolean",
      label: "Disabled",
      default: false,
      description: "Whether the autocomplete is disabled.",
    }
  },
  subComponents: {
    Root: {
      description: "The root provider component for the autocomplete. Manages state and context.",
      props: [],
    },
    Input: {
      description: "The text input field for typing search queries.",
      renders: "<input>",
      props: [],
    },
    Portal: {
      description: "Portals the popup out of the DOM hierarchy.",
      props: [],
    },
    Positioner: {
      description: "Positions the popup relative to the input.",
      renders: "<div>",
      props: [],
    },
    Popup: {
      description: "The dropdown popup containing the list of options.",
      renders: "<div>",
      props: [],
    },
    Empty: {
      description: "Displayed when no options match the input value.",
      renders: "<div>",
      props: [],
    },
    List: {
      description: "The list container for autocomplete items.",
      renders: "<ul>",
      props: [],
    },
    Item: {
      description: "An individual selectable option in the autocomplete list.",
      renders: "<li>",
      props: [],
    },
  },
};

export default meta;
