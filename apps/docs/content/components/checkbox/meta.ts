import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Checkbox",
  description: "A control for turning a single option on or off.",
  baseUiUrl: "https://base-ui.com/react/components/checkbox",
  subComponents: {
    Root: {
      description: "The checkbox input control.",
      renders: "<button>",
      props: [],
    },
    Indicator: {
      description: "Displays the check or indeterminate icon inside the checkbox.",
      renders: "<span>",
      props: [],
    },
  },
};

export default meta;
