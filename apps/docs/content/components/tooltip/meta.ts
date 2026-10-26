import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Tooltip",
  description: "A short label that appears when a control is hovered or focused.",
  baseUiUrl: "https://base-ui.com/react/components/tooltip",
  subComponents: {
    Provider: {
      description: "Provides shared configuration for all tooltips in its subtree.",
      props: [],
    },
    Root: {
      description: "The root provider component for an individual tooltip. Manages open/close state.",
      props: [],
    },
    Trigger: {
      description: "The element that shows the tooltip on hover or focus.",
      renders: "<button>",
      props: [],
    },
    Arrow: {
      description: "An arrow pointing from the tooltip to the trigger.",
      renders: "<div>",
      props: [],
    },
    Content: {
      description: "The tooltip popup. Includes built-in Portal, Positioner, Popup, and Arrow.",
      renders: "<div>",
      props: [],
    },
  },
};

export default meta;
