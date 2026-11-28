import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Section",
  description: "A flex column that pads its content with a LiftKit size token. Pair it with a Container.",
  knobs: {
    padding: {
      kind: "select",
      label: "Padding",
      default: "md",
      options: [
        { label: "None", value: "none" },
        { label: "5XS", value: "5xs" },
        { label: "4XS", value: "4xs" },
        { label: "3XS", value: "3xs" },
        { label: "2XS", value: "2xs" },
        { label: "XS", value: "xs" },
        { label: "SM", value: "sm" },
        { label: "MD", value: "md" },
        { label: "LG", value: "lg" },
        { label: "XL", value: "xl" },
        { label: "2XL", value: "2xl" },
        { label: "3XL", value: "3xl" },
        { label: "4XL", value: "4xl" },
        { label: "5XL", value: "5xl" },
      ],
    },
  },
  subComponents: {
    Root: {
      description: "A flex column with padding on all sides. Shows a placeholder when it has no children.",
      renders: "<div>",
      props: [
        {
          name: "padding",
          type: '"none" | LkSizeUnit',
          defaultValue: '"md"',
          description: "Padding on all sides: any LiftKit size token (5xs to 5xl), or none.",
        },
      ],
    },
  },
};

export default meta;
