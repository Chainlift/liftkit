import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Dialog",
  description: "A window overlaid on the page that keeps focus until it's dismissed.",
  baseUiUrl: "https://base-ui.com/react/components/dialog",
  subComponents: {
    Root: {
      description: "The root provider component for the dialog. Manages open/close state.",
      props: [],
    },
    Trigger: {
      description: "The button that opens the dialog.",
      renders: "<button>",
      props: [],
    },
    Portal: {
      description: "Portals the backdrop and popup out of the DOM hierarchy.",
      props: [],
    },
    Backdrop: {
      description: "The semi-transparent overlay rendered behind the popup.",
      renders: "<div>",
      props: [],
    },
    Popup: {
      description: "The popup panel containing the dialog content.",
      renders: "<div>",
      props: [],
    },
    Title: {
      description: "Accessible title for the dialog.",
      renders: "<h2>",
      props: [],
    },
    Description: {
      description: "Accessible description for the dialog.",
      renders: "<p>",
      props: [],
    },
    Close: {
      description: "A button that closes the dialog when clicked.",
      renders: "<button>",
      props: [],
    },
  },
};

export default meta;
