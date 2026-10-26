import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Toggle Group",
  description: "A set of toggle buttons where one or several can be pressed.",
  baseUiUrl: "https://base-ui.com/react/components/toggle-group",
  subComponents: {
    Root: {
      description: "Groups multiple toggle buttons and manages their selection state.",
      renders: "<div>",
      props: [],
    },
  },
};

export default meta;
