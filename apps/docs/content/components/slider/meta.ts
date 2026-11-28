import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Slider",
  description: "An input for choosing a value, or a range of values, by dragging along a track.",
  baseUiUrl: "https://base-ui.com/react/components/slider",
  subComponents: {
    Root: {
      description: "The root provider component for the slider. Manages value state.",
      props: [],
    },
    Control: {
      description: "The interactive area that contains the track and thumb.",
      renders: "<div>",
      props: [],
    },
    Track: {
      description: "The background track of the slider.",
      renders: "<div>",
      props: [],
    },
    Indicator: {
      description: "The filled portion of the track indicating the current value.",
      renders: "<div>",
      props: [],
    },
    Thumb: {
      description: "The draggable thumb control.",
      renders: "<div>",
      props: [],
    },
  },
};

export default meta;
