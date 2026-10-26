import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Accordion",
  description: "A set of collapsible panels with headings.",
  baseUiUrl: "https://base-ui.com/react/components/accordion",
  knobs: {
    multiple: { kind: "boolean", label: "Multiple", default: false, description: "Allows multiple items to be open at once." },
    disabled: { kind: "boolean", label: "Disabled", default: false },
    orientation: {
      kind: "radio",
      label: "Orientation",
      default: "vertical",
      options: [
        { label: "Vertical", value: "vertical" },
        { label: "Horizontal", value: "horizontal" },
      ],
      description: "Controls flex direction."
    },
    loopFocus: {
      kind: "boolean",
      label: "Loop Focus",
      default: true,
      description:
        "Whether to loop focus when navigating with arrow keys.",
    },
  },
  subComponents: {
    Root: {
      description: "Groups all parts of the accordion.",
      renders: "<div>",
      props: [
        {
          name: "defaultValue",
          type: "any[]",
          description: "The uncontrolled value of the item(s) that should be initially expanded.",
          required: false,
        },
        {
          name: "multiple",
          type: "boolean",
          defaultValue: "false",
          description: "Whether multiple items can be open at the same time.",
          required: false,
        },
      ],
      dataAttributes: [
        {
          name: "data-orientation",
          description: "Indicates the orientation of the accordion.",
        },
        {
          name: "data-disabled",
          description: "Present when the accordion is disabled.",
        },
      ],
    },
    Item: {
      description: "Groups an accordion header with the corresponding panel.",
      renders: "<div>",
      props: [
        {
          name: "value",
          type: "any",
          description: "A unique value that identifies this accordion item.",
          required: false,
        },
      ],
      dataAttributes: [
        {
          name: "data-open",
          description: "Present when the accordion item is open.",
        },
      ],
    },
    Trigger: {
      description: "The button that toggles an accordion item open and closed. Includes a header wrapper and icon.",
      renders: "<button>",
      props: [],
    },
    Content: {
      description: "The collapsible content panel for an accordion item.",
      renders: "<div>",
      props: [],
    },
  },
};

export default meta;
