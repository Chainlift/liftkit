import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Meter",
  description: "A graphical display of a value within a known range, like storage used.",
  baseUiUrl: "https://base-ui.com/react/components/meter",
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

export default meta;
