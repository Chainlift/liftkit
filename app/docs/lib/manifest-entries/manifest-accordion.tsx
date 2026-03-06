import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleAccordion } from "@/liftkit/examples";
import { Accordion_Example_TS, Accordion_Example_CSS } from "@/app/docs/components/accordion/codeTemplates";

const accordion: ComponentEntry = {
  title: "Accordion",
  Component: ExampleAccordion,
  example_TS: (knobs) => Accordion_Example_TS(knobs),
  example_CSS: (knobs) => Accordion_Example_CSS(knobs),
  knobs: {
    multiple: { kind: "boolean", label: "Multiple", default: false, description: "This is a test description." },
    disabled: { kind: "boolean", label: "Disabled", default: false },
    sample: { kind: "select", label: "Sample select", default: "option1", options: [] },
  },
  // NEW: Add sub-components here
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

export { accordion };
