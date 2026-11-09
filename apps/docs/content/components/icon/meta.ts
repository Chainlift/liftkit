import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Icon",
  description: "Renders any Lucide icon by name, with LiftKit sizing and color.",
  subComponents: {
    Root: {
      description: "Renders a Lucide icon with configurable size, color, and font class.",
      renders: "<div>",
      props: [],
    },
  },
};

export default meta;
