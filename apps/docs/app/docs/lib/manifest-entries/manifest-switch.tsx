import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleSwitch } from "@/examples";

const switchInput: ComponentEntry = {
  title: "SwitchInput",
  Component: ExampleSwitch,
  subComponents: {
    Root: {
      description: "The switch toggle control.",
      renders: "<button>",
      props: [],
    },
    Thumb: {
      description: "The sliding thumb indicator inside the switch.",
      renders: "<span>",
      props: [],
    },
  },
};

export { switchInput };
