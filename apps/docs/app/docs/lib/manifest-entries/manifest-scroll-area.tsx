import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleScrollArea } from "@/examples";

const scrollArea: ComponentEntry = {
  title: "ScrollArea",
  Component: ExampleScrollArea,
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

export { scrollArea };
