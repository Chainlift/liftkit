import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Select",
  description: "A button that opens a list of options to choose one from.",
  baseUiUrl: "https://base-ui.com/react/components/select",
  knobs: {
    fontClass: {
      kind: "select",
      label: "Font Class",
      default: "body",
      options: [
        { label: "Display 1", value: "display1" },
        { label: "Display 2", value: "display2" },
        { label: "Title 1", value: "title1" },
        { label: "Title 2", value: "title2" },
        { label: "Title 3", value: "title3" },
        { label: "Heading", value: "heading" },
        { label: "Subheading", value: "subheading" },
        { label: "Body", value: "body" },
        { label: "Callout", value: "callout" },
        { label: "Label", value: "label" },
        { label: "Caption", value: "caption" },
        { label: "Capline", value: "capline" },
      ],
    },
  },
  subComponents: {
    Root: {
      description: "The root provider component for the select. Manages state and context.",
      props: [
        {
          name: "fontClass",
          type: "LkFontClass",
          description:
            "Sizes the select proportionally: the trigger and the popup's items scale their text, padding, and corners from this font class. Defaults to the default sizes.",
        },
      ],
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
