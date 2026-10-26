import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Preview Card",
  description: "A card that previews a link's destination when the link is hovered.",
  baseUiUrl: "https://base-ui.com/react/components/preview-card",
  subComponents: {
    Root: {
      description: "The root provider component for the preview card. Manages hover/focus state.",
      props: [],
    },
    Trigger: {
      description: "The element that triggers the preview card on hover.",
      renders: "<a>",
      props: [],
    },
    Portal: {
      description: "Portals the popup out of the DOM hierarchy.",
      props: [],
    },
    Positioner: {
      description: "Positions the popup relative to the trigger.",
      renders: "<div>",
      props: [],
    },
    Popup: {
      description: "The popup container for the preview card content.",
      renders: "<div>",
      props: [],
    },
    Arrow: {
      description: "An optional arrow pointing from the popup to the trigger.",
      renders: "<div>",
      props: [],
    },
  },
};

export default meta;
