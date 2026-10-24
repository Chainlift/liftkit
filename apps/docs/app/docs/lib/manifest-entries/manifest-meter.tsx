import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleMeter } from "@/examples";

const meter: ComponentEntry = {
  title: "Meter",
  Component: ExampleMeter,
  subComponents: {
    Root: {
      description: "The root container for the meter. Manages value and range.",
      renders: "<div>",
      props: [],
    },
    Label: {
      description: "The accessible label for the meter.",
      renders: "<label>",
      props: [],
    },
    Value: {
      description: "Displays the current meter value as text.",
      renders: "<span>",
      props: [],
    },
    Track: {
      description: "The background track of the meter.",
      renders: "<div>",
      props: [],
    },
    Indicator: {
      description: "The filled portion of the meter indicating the current value.",
      renders: "<div>",
      props: [],
    },
  },
};

export { meter };
