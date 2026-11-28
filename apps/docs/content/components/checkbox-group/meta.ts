import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Checkbox Group",
  description: "A set of checkboxes that share one value, with optional select-all behavior.",
  baseUiUrl: "https://base-ui.com/react/components/checkbox-group",
  subComponents: {
    Root: {
      description: "Groups related checkboxes and manages their collective state.",
      renders: "<div>",
      props: [],
    },
  },
};

export default meta;
