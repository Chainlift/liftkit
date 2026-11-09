import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Icon Button",
  description: "A button that contains only an icon, with LiftKit's sizing, color roles, and state layer.",
  baseUiUrl: "https://base-ui.com/react/components/button",
  subComponents: {
    Root: {
      description: "An icon-only button with support for variants, colors, and a state layer.",
      renders: "<button>",
      props: [],
    },
  },
};

export default meta;
