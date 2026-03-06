import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleSlider } from "@/liftkit/examples";

const slider: ComponentEntry = {
  title: "Slider",
  Component: ExampleSlider,
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

export { slider };
