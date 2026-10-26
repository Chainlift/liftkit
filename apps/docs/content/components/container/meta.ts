import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Container",
  description: "A centered flex column that caps its content at a maximum width. Place it inside a Section.",
  knobs: {
    maxWidth: {
      kind: "select",
      label: "Max Width",
      default: "md",
      options: [
        { label: "XS (80ch)", value: "xs" },
        { label: "SM (1280px)", value: "sm" },
        { label: "MD (1440px)", value: "md" },
        { label: "LG (1600px)", value: "lg" },
        { label: "XL (1920px)", value: "xl" },
        { label: "None (100%)", value: "none" },
      ],
    },
  },
  subComponents: {
    Root: {
      description: "A centered flex column with a maximum width. Shows a placeholder when it has no children.",
      renders: "<div>",
      props: [
        {
          name: "maxWidth",
          type: '"xs" | "sm" | "md" | "lg" | "xl" | "none"',
          defaultValue: '"md"',
          description: "Maximum content width: xs = 80ch, sm = 1280px, md = 1440px, lg = 1600px, xl = 1920px, none = 100%.",
        },
      ],
    },
  },
};

export default meta;
