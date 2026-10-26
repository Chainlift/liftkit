import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Toast",
  description: "A brief notification that appears without interrupting the user.",
  baseUiUrl: "https://base-ui.com/react/components/toast",
  subComponents: {
    Provider: {
      description: "Provides toast context to the application. Wrap your app with this component.",
      props: [],
    },
    Portal: {
      description: "Portals the toast viewport out of the DOM hierarchy.",
      props: [],
    },
    Viewport: {
      description: "The container that holds all active toasts.",
      renders: "<div>",
      props: [],
    },
    Root: {
      description: "An individual toast notification.",
      renders: "<div>",
      props: [],
    },
    Content: {
      description: "The content area of the toast.",
      renders: "<div>",
      props: [],
    },
    Title: {
      description: "The title text of the toast.",
      renders: "<h2>",
      props: [],
    },
    Description: {
      description: "The description text of the toast.",
      renders: "<p>",
      props: [],
    },
    Close: {
      description: "A button that dismisses the toast.",
      renders: "<button>",
      props: [],
    },
  },
};

export default meta;
