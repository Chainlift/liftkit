import { componentDocs } from "@/content/components/registry";
import { defaultKnobValues } from "./demo-source";

/** Name and demo columns, 34:66. fr units split the space left after the gap, so the demo column never spills past the row. */
const ROW_COLUMNS = "minmax(0, 34fr) minmax(0, 66fr)";

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
