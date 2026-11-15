import { componentDocs } from "@/content/components/registry";
import { defaultKnobValues } from "./demo-source";

/** Left column and right column widths of each row. */
const ROW_COLUMNS = "34% 66%";

/**
 * Every documented component in one list, for testing a theme: the component's name on the left, the live demo (at
 * its default knob values) on the right.
 */
export function AllComponents() {
  return (
    <div className="w-full">
      {Object.entries(componentDocs).map(([slug, { meta, Demo }]) => (
        <div
          key={slug}
          className="display-grid items-center gap-md py-md border-b border-color-outlinevariant"
          style={{ gridTemplateColumns: ROW_COLUMNS }}
        >
          <h3 className="callout-bold">{meta.title}</h3>
          <div className="flex-h items-center flex-wrap gap-md min-w-0">
            <Demo {...defaultKnobValues(meta.knobs)} />
          </div>
        </div>
      ))}
    </div>
  );
}
