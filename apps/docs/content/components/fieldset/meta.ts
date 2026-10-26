import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Fieldset",
  description: "Groups related fields under a shared legend.",
  baseUiUrl: "https://base-ui.com/react/components/fieldset",
  subComponents: {
    Root: {
      description: "The root container for the fieldset. Groups related form fields.",
      renders: "<fieldset>",
      props: [],
    },
    Legend: {
      description: "The legend label for the fieldset.",
      renders: "<legend>",
      props: [],
    },
  },
};

export default meta;
