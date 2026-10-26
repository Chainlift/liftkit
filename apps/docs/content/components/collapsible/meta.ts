import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Collapsible",
  description: "A panel that a button expands and collapses.",
  baseUiUrl: "https://base-ui.com/react/components/collapsible",
  subComponents: {
    Root: {
      description: "The root provider component for the collapsible. Manages open/close state.",
      props: [],
    },
    Trigger: {
      description: "The button that toggles the collapsible panel open and closed.",
      renders: "<button>",
      props: [],
    },
    Panel: {
      description: "The collapsible content panel that expands and collapses.",
      renders: "<div>",
      props: [],
    },
  },
};

export default meta;
