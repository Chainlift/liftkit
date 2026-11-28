export type Control =
  | { kind: "boolean"; label?: string; description?: string; default?: boolean }
  | { kind: "text"; label?: string; description?: string; default?: string; placeholder?: string }
  | {
      kind: "select";
      label?: string;
      description?: string;
      default?: string;
      options: { label: string; value: string }[];
    }
  | {
      kind: "number";
      label?: string;
      description?: string;
      default?: number;
      min?: number;
      max?: number;
      step?: number;
    }
  | { kind: "color"; label?: string; description?: string; default?: string } // if you want to wire to CSS vars, etc.
  | { kind: "slot"; label?: string; description?: string; default?: string } // convenience for children
  | {
      kind: "radio";
      label?: string;
      description?: string;
      default?: string;
      options: { label: string; value: string }[];
    };

/**
 * Metadata for a sub-component (e.g., Accordion.Root, Accordion.Item)
 * Used to generate props tables and documentation without affecting ComponentPreview
 */
export type SubComponentEntry = {
  /** The actual React component (for potential future use) */
  Component?: React.ComponentType<any>;
  /** Description of what this sub-component does */
  description?: string;
  /** HTML element it renders (e.g., "<div>", "<button>", "<h3>") */
  renders?: string;
  /** Props information for generating props tables */
  props?: Array<{
    name: string;
    type: string;
    defaultValue?: string;
    description?: string;
    required?: boolean;
  }>;
  /** Data attributes from the API reference */
  dataAttributes?: Array<{
    name: string;
    type?: string;
    description?: string;
  }>;
  /** CSS Variables from the API reference */
  cssVariables?: Array<{
    name: string;
    type?: string;
    defaultValue?: string;
    description?: string;
  }>;
};

/** Everything a component docs page needs besides its demo and optional notes.mdx. */
export type ComponentDocMeta = {
  title: string;
  /** One sentence shown under the title and used as the page's meta description. */
  description: string;
  /** This component's page in the Base UI docs. */
  baseUiUrl?: string;
  /** Stylesheet shown in the CSS tab, from packages/liftkit/src/css/components. Defaults to lk-<slug>.css. */
  cssFile?: string;
  /** Props exposed as interactive controls on the live demo. */
  knobs?: Record<string, Control>;
  /** Parts of the component, documented in the API reference. */
  subComponents?: Record<string, SubComponentEntry>;
};
