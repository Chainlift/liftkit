import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Input",
  description: "A native text input with LiftKit styling.",
  baseUiUrl: "https://base-ui.com/react/components/input",
  subComponents: {
    Root: {
      description: "A styled text input field.",
      renders: "<input>",
      props: [],
    },
  },
};

export default meta;
