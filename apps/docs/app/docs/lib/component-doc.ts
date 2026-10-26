import type { Control, SubComponentEntry } from "./component-manifest";

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
