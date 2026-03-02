import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { ExampleForm } from "@/liftkit/examples";
import { Form_Example_TS } from "@/app/docs/components/form/codeTemplates";

const form: ComponentEntry = {
  title: "Form",
  Component: ExampleForm,
  example_TS: (knobs) => Form_Example_TS(knobs),
  knobs: {
    multiple: { kind: "boolean", label: "Multiple", default: false, description: "This is a test description." },
    disabled: { kind: "boolean", label: "Disabled", default: false },
    sample: { kind: "select", label: "Sample select", default: "option1", options: [] },
  },
};

export { form };
