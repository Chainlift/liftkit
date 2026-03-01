import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { Autocomplete_Example_TS, Autocomplete_Example_CSS } from "@/app/docs/components/autocomplete/codeTemplates";
import { ExampleAutocomplete } from "@/liftkit/examples";

const autocomplete = {
  title: "Autocomplete",
  Component: ExampleAutocomplete,
  example_TS: (knobs: Record<string, unknown>) => Autocomplete_Example_TS(knobs),
  example_CSS: (knobs: Record<string, unknown>) => Autocomplete_Example_CSS(knobs),
};

export { autocomplete };
