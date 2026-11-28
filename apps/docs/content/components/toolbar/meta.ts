import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Toolbar",
  description: "A container that groups related controls, like buttons and toggles, into one bar.",
  baseUiUrl: "https://base-ui.com/react/components/toolbar",
  subComponents: {
    Root: {
      description: "The root container for the toolbar. Groups interactive controls.",
      renders: "<div>",
      props: [],
    },
    Input: {
      description: "A text input within the toolbar.",
      renders: "<input>",
      props: [],
    },
    Link: {
      description: "A navigation link within the toolbar.",
      renders: "<a>",
      props: [],
    },
    Button: {
      description: "A button within the toolbar.",
      renders: "<button>",
      props: [],
    },
    Group: {
      description: "Groups related toolbar items together.",
      renders: "<div>",
      props: [],
    },
    Separator: {
      description: "A visual separator between groups of toolbar items.",
      renders: "<div>",
      props: [],
    },
  },
};

export default meta;
