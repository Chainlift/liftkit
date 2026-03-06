import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleInput } from "@/liftkit/examples";

const input: ComponentEntry = {
  title: "Input",
  Component: ExampleInput,
  subComponents: {
    Root: {
      description: "A styled text input field.",
      renders: "<input>",
      props: [],
    },
  },
};

export { input };
