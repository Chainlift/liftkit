import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Combobox",
  description: "An input combined with a list of options the user can filter and choose from.",
  baseUiUrl: "https://base-ui.com/react/components/combobox",
  subComponents: {
    Root: {
      description: "The root provider component for the combobox. Manages state and context.",
      props: [],
    },
    Input: {
      description: "The text input field for typing and filtering options.",
      renders: "<input>",
      props: [],
    },
    Clear: {
      description: "A button that clears the current input value.",
      renders: "<button>",
      props: [],
    },
    Trigger: {
      description: "The button that opens the combobox dropdown.",
      renders: "<button>",
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
      description: "The list container for combobox items.",
      renders: "<ul>",
      props: [],
    },
    Item: {
      description: "An individual selectable option in the combobox list.",
      renders: "<li>",
      props: [],
    },
    ItemIndicator: {
      description: "Renders an indicator when the item is selected.",
      renders: "<span>",
      props: [],
    },
  },
};

export default meta;
