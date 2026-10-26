import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Input",
  description: "A native text input with LiftKit styling.",
  baseUiUrl: "https://base-ui.com/react/components/input",
  knobs: {
    fontClass: {
      kind: "select",
      label: "Font Class",
      default: "body",
      options: [
        { label: "Display 1", value: "display1" },
        { label: "Display 2", value: "display2" },
        { label: "Title 1", value: "title1" },
        { label: "Title 2", value: "title2" },
        { label: "Title 3", value: "title3" },
        { label: "Heading", value: "heading" },
        { label: "Subheading", value: "subheading" },
        { label: "Body", value: "body" },
        { label: "Callout", value: "callout" },
        { label: "Label", value: "label" },
        { label: "Caption", value: "caption" },
        { label: "Capline", value: "capline" },
      ],
    },
  },
  subComponents: {
    Root: {
      description: "A styled text input field.",
      renders: "<input>",
      props: [
        {
          name: "fontClass",
          type: "LkFontClass",
          description:
            "Sizes the input proportionally: text, padding, and corners all scale from this font class. Defaults to the size of the surrounding text.",
        },
      ],
    },
  },
};

export default meta;
