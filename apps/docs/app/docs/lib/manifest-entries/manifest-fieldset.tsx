import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleFieldset } from "@/examples";

const fieldset: ComponentEntry = {
  title: "Fieldset",
  Component: ExampleFieldset,
  subComponents: {
    Root: {
      description: "The root container for the fieldset. Groups related form fields.",
      renders: "<fieldset>",
      props: [],
    },
    Legend: {
      description: "The legend label for the fieldset.",
      renders: "<legend>",
      props: [],
    },
  },
};

export { fieldset };
