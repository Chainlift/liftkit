import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Form",
  description: "A form that coordinates its fields' validation and shows errors returned by the server.",
  baseUiUrl: "https://base-ui.com/react/components/form",
  subComponents: {
    Root: {
      description: "The form element with built-in validation support.",
      renders: "<form>",
      props: [],
    },
  },
};

export default meta;
