import type { ComponentEntry } from "@/app/docs/lib/component-manifest";
import meta from "@/content/components/button/meta";
import ButtonDemo from "@/content/components/button/demo";

// Button's docs page uses the shared template (content/components/button).
// This entry only feeds the legacy API reference table until it reads meta directly.
const button: ComponentEntry = {
  title: meta.title,
  Component: ButtonDemo,
  knobs: meta.knobs,
  subComponents: meta.subComponents,
  docsLink: meta.baseUiUrl,
};

export { button };
