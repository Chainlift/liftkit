import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import { Autocomplete_Example_TS, Autocomplete_Example_CSS } from "@/app/docs/components/autocomplete/codeTemplates";
import { ExampleAutocomplete } from "@/liftkit/examples";

const autocomplete: ComponentEntry = {
  title: "Autocomplete",
  Component: ExampleAutocomplete,
  example_TS: (knobs: Record<string, unknown>) => Autocomplete_Example_TS(knobs),
  example_CSS: (knobs: Record<string, unknown>) => Autocomplete_Example_CSS(knobs),
  knobs: {
    defaultValue: {
      kind: "text",
      label: "Default Value",
      default: "Option 1",
      description: "The default value of the autocomplete input.",
    },
    autoHighlight: {
      kind: "boolean",
      label: "Default Open",
      default: false,
      description: "Whether the autocomplete dropdown is open by default.",
    },
    disabled: {
      kind: "boolean",
      label: "Disabled",
      default: false,
      description: "Whether the autocomplete is disabled.",
    }
  },
  subComponents: {
    Root: {
      description: "The root provider component for the autocomplete. Manages state and context.",
      props: [],
    },
    Input: {
      description: "The text input field for typing search queries.",
      renders: "<input>",
      props: [],
    },
    Portal: {
      description: "Portals the popup out of the DOM hierarchy.",
      props: [],
    },
    Positioner: {
      description: "Positions the popup relative to the input.",
      renders: "<div>",
      props: [],
    },
    Popup: {
      description: "The dropdown popup containing the list of options.",
      renders: "<div>",
      props: [],
    },
    Empty: {
      description: "Displayed when no options match the input value.",
      renders: "<div>",
      props: [],
    },
    List: {
      description: "The list container for autocomplete items.",
      renders: "<ul>",
      props: [],
    },
    Item: {
      description: "An individual selectable option in the autocomplete list.",
      renders: "<li>",
      props: [],
    },
  },
};

export { autocomplete };
