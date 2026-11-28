import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Tabs",
  description: "A set of panels shown one at a time, switched with a row of tabs.",
  baseUiUrl: "https://base-ui.com/react/components/tabs",
  subComponents: {
    Root: {
      description: "The root container for the tabs. Manages selected tab state.",
      renders: "<div>",
      props: [],
    },
    List: {
      description: "The container for the tab triggers.",
      renders: "<div>",
      props: [],
    },
    Tab: {
      description: "An individual tab trigger button.",
      renders: "<button>",
      props: [],
    },
    Indicator: {
      description: "A visual indicator that highlights the active tab.",
      renders: "<span>",
      props: [],
    },
    Panel: {
      description: "The content panel associated with a tab.",
      renders: "<div>",
      props: [],
    },
  },
};

export default meta;
