import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleCheckbox } from "@/examples";

const checkbox: ComponentEntry = {
  title: "Checkbox",
  Component: ExampleCheckbox,
  subComponents: {
    Root: {
      description: "The checkbox input control.",
      renders: "<button>",
      props: [],
    },
    Indicator: {
      description: "Displays the check or indeterminate icon inside the checkbox.",
      renders: "<span>",
      props: [],
    },
  },
};

export { checkbox };
