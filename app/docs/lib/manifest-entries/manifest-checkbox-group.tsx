import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleCheckboxGroup } from "@/liftkit/examples";

const checkboxGroup: ComponentEntry = {
  title: "CheckboxGroup",
  Component: ExampleCheckboxGroup,
  subComponents: {
    Root: {
      description: "Groups related checkboxes and manages their collective state.",
      renders: "<div>",
      props: [],
    },
  },
};

export { checkboxGroup };
