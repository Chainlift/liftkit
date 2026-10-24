import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleProgress } from "@/examples";

const progress: ComponentEntry = {
  title: "Progress",
  Component: ExampleProgress,
  subComponents: {
    Root: {
      description: "The root container for the progress bar. Manages value state.",
      renders: "<div>",
      props: [],
    },
    Label: {
      description: "The accessible label for the progress bar.",
      renders: "<label>",
      props: [],
    },
    Value: {
      description: "Displays the current progress value as text.",
      renders: "<span>",
      props: [],
    },
    Track: {
      description: "The background track of the progress bar.",
      renders: "<div>",
      props: [],
    },
    Indicator: {
      description: "The filled portion of the progress bar indicating the current value.",
      renders: "<div>",
      props: [],
    },
  },
};

export { progress };
