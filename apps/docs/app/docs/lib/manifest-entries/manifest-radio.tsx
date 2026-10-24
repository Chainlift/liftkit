import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleRadio } from "@/examples";

const radio: ComponentEntry = {
  title: "Radio",
  Component: ExampleRadio,
  subComponents: {
    Group: {
      description: "Groups related radio buttons and manages the selected value.",
      renders: "<div>",
      props: [],
    },
    Root: {
      description: "An individual radio button control.",
      renders: "<button>",
      props: [],
    },
    Indicator: {
      description: "The visual indicator displayed when the radio is selected.",
      renders: "<span>",
      props: [],
    },
  },
};

export { radio };
