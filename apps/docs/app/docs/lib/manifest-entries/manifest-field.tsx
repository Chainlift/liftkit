import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleField } from "@/examples";

const field: ComponentEntry = {
  title: "Field",
  Component: ExampleField,
  subComponents: {
    Root: {
      description: "The root container for the field. Associates the label, control, error, and description.",
      renders: "<div>",
      props: [],
    },
    Label: {
      description: "The label for the field control.",
      renders: "<label>",
      props: [],
    },
    Control: {
      description: "The form control element (input, select, etc.).",
      renders: "<input>",
      props: [],
    },
    Error: {
      description: "Displays a validation error message for the field.",
      renders: "<span>",
      props: [],
    },
    Description: {
      description: "Supplementary description or help text for the field.",
      renders: "<p>",
      props: [],
    },
  },
};

export { field };
  