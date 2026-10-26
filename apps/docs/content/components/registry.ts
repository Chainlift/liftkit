import type { ComponentType } from "react";
import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

import buttonMeta from "./button/meta";
import ButtonDemo from "./button/demo";

export type ComponentDoc = {
  meta: ComponentDocMeta;
  /** The live demo. Its source file (demo.tsx) is also the code sample. */
  Demo: ComponentType<any>;
};

/**
 * Components documented by the shared template at /docs/components/[slug].
 * Imported by the client-side preview, so keep it browser-safe: meta and demos
 * only. Each component's optional notes.mdx is loaded by the page itself.
 */
export const componentDocs: Record<string, ComponentDoc> = {
  button: { meta: buttonMeta, Demo: ButtonDemo },
};
