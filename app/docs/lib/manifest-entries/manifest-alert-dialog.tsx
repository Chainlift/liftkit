import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { AlertDialog_Example_TS, AlertDialog_Example_CSS } from "@/app/docs/components/alert-dialog/codeTemplates";
import { ExampleAlertDialog } from "@/liftkit/examples";

const alertDialog: ComponentEntry = {
  title: "AlertDialog",
  Component: ExampleAlertDialog,
  example_TS: (knobs: Record<string, unknown>) => AlertDialog_Example_TS(knobs),
  example_CSS: (knobs: Record<string, unknown>) => AlertDialog_Example_CSS(knobs),
  knobs: {
    defaultOpen: {
      kind: "boolean",
      label: "Default Open",
      default: false,
      description: "Whether or not the dialog should be open by default.",
    },
  },
  subComponents: {
    Dialog: {
      description: "The root provider component for the alert dialog. Manages open/close state.",
      renders: "<div>",
      props: [
        {
          name: "open",
          type: "boolean",
          description: "Controlled open state of the dialog.",
          required: false,
        },
        {
          name: "defaultOpen",
          type: "boolean",
          defaultValue: "false",
          description: "The uncontrolled open state of the dialog.",
          required: false,
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          description: "Callback fired when the open state changes.",
          required: false,
        },
      ],
      dataAttributes: [{ name: "data-open", description: "Present when the dialog is open." }],
    },
    AlertDialogTrigger: {
      description: "The button that opens the alert dialog.",
      renders: "<button>",
      props: [],
      dataAttributes: [{ name: "data-open", description: "Present when the dialog is open." }],
    },
    AlertDialogPortal: {
      description: "Portals the backdrop and popup out of the DOM hierarchy.",
      props: [
        {
          name: "container",
          type: "HTMLElement | null",
          description: "The DOM element to portal into. Defaults to document.body.",
          required: false,
        },
        {
          name: "keepMounted",
          type: "boolean",
          defaultValue: "false",
          description: "Whether to keep the portal mounted in the DOM when closed.",
          required: false,
        },
      ],
    },
    AlertDialogBackdrop: {
      description: "The semi-transparent overlay rendered behind the popup.",
      renders: "<div>",
      props: [],
      dataAttributes: [
        { name: "data-open", description: "Present when the dialog is open." },
        { name: "data-starting-style", description: "Applied when the dialog is opening." },
        { name: "data-ending-style", description: "Applied when the dialog is closing." },
      ],
    },
    AlertDialogContent: {
      description: "The popup panel. Automatically wraps AlertDialogPortal and AlertDialogBackdrop.",
      renders: "<div>",
      props: [
        {
          name: "size",
          type: '"default" | "sm"',
          defaultValue: '"default"',
          description: "Controls the width of the popup.",
          required: false,
        },
      ],
      dataAttributes: [
        { name: "data-open", description: "Present when the dialog is open." },
        { name: "data-starting-style", description: "Applied when the dialog is opening." },
        { name: "data-ending-style", description: "Applied when the dialog is closing." },
      ],
    },
    AlertDialogHeader: {
      description: "Layout wrapper for the dialog title and description.",
      renders: "<div>",
      props: [],
    },
    AlertDialogFooter: {
      description: "Layout wrapper for the dialog action buttons.",
      renders: "<div>",
      props: [],
    },
    AlertDialogMedia: {
      description: "Optional layout wrapper for media content within the dialog.",
      renders: "<div>",
      props: [],
    },
    AlertDialogTitle: {
      description: "Accessible title for the alert dialog.",
      renders: "<h2>",
      props: [],
    },
    AlertDialogDescription: {
      description: "Accessible description for the alert dialog.",
      renders: "<p>",
      props: [],
    },
    AlertDialogAction: {
      description: "The confirm/destructive action button. Rendered as a LiftKit Button.",
      renders: "<button>",
      props: [],
    },
    AlertDialogClose: {
      description: "The cancel/close button. Closes the dialog when clicked.",
      renders: "<button>",
      props: [
        {
          name: "variant",
          type: '"fill" | "outline" | "text"',
          defaultValue: '"outline"',
          description: "Visual style variant passed to the underlying Button.",
          required: false,
        },
      ],
      dataAttributes: [{ name: "data-open", description: "Present when the dialog is open." }],
    },
  },
};

export { alertDialog };
