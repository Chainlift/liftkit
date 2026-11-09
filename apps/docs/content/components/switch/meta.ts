import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Switch",
  description: "A control for toggling a setting on or off, applied immediately.",
  baseUiUrl: "https://base-ui.com/react/components/switch",
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

export default meta;
