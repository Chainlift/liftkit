import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Toggle",
  description: "A two-state button that can be pressed or unpressed.",
  baseUiUrl: "https://base-ui.com/react/components/toggle",
  subComponents: {
    Root: {
      description: "A two-state toggle button.",
      renders: "<button>",
      props: [],
    },
  },
};

export default meta;
