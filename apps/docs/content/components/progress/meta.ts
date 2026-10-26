import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Progress",
  description: "Shows the status of a task that takes a while to complete.",
  baseUiUrl: "https://base-ui.com/react/components/progress",
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

export default meta;
