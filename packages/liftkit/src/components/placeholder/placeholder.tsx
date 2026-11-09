import "../../css/components/lk-placeholder.css";

/**
 * Internal. A labeled box that fills its parent, marking where content goes.
 * Section and Container render it when they have no children.
 *
 * @param label - Text shown in the box, e.g. "Section"
 */
export function Placeholder({ label }: { label: string }) {
  return (
    <div data-lk-component="placeholder">
      <span className="capline">{label}</span>
    </div>
  );
}
