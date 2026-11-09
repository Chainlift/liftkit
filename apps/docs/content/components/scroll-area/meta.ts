import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Scroll Area",
  description: "A scrollable container with custom, theme-aware scrollbars.",
  baseUiUrl: "https://base-ui.com/react/components/scroll-area",
  subComponents: {
    Root: {
      description: "The root container for the scroll area.",
      renders: "<div>",
      props: [],
    },
    Viewport: {
      description: "The scrollable viewport area.",
      renders: "<div>",
      props: [],
    },
    Content: {
      description: "The content container inside the viewport.",
      renders: "<div>",
      props: [],
    },
    Scrollbar: {
      description: "The scrollbar track element.",
      renders: "<div>",
      props: [],
    },
    Thumb: {
      description: "The draggable scrollbar thumb.",
      renders: "<div>",
      props: [],
    },
    Corner: {
      description: "The corner element where horizontal and vertical scrollbars meet.",
      renders: "<div>",
      props: [],
    },
  },
};

export default meta;
