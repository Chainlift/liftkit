import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleToolbar } from "@/examples";

const toolbar: ComponentEntry = {
  title: "Toolbar",
  Component: ExampleToolbar,
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

export { toolbar };
