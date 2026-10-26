import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Radio",
  description: "A set of options where only one can be selected at a time.",
  baseUiUrl: "https://base-ui.com/react/components/radio-group",
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

export default meta;
