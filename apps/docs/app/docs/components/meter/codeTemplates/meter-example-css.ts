export function Meter_Example_CSS(updatedKnobVals: Record<string, unknown> = {}) {
  return `
[data-slot="meter"] {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 0.5rem;
  width: 12rem;
}

[data-slot="meter-label"] {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: var(--lk-onsurface);
}

[data-slot="meter-value"] {
  grid-column-start: 2;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--lk-onsurface);
  text-align: right;
}

[data-slot="meter-track"] {
  grid-column: 1 / 3;
  overflow: hidden;
  background-color: var(--color-gray-100);
  box-shadow: inset 0 0 0 1px var(--lk-outlinevariant);
  height: 0.5rem;
}

[data-slot="meter-indicator"] {
  background-color: var(--lk-surfacecontainerlow0);
  transition: width 500ms;
}

  `;
}
