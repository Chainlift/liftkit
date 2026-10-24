import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleAvatar } from "@/liftkit/examples";

const icon: ComponentEntry = {
  title: "Icon",
  Component: ExampleAvatar,
  subComponents: {
    Root: {
      description: "Renders a Lucide icon with configurable size, color, and font class.",
      renders: "<div>",
      props: [],
    },
  },
};

export { icon };
