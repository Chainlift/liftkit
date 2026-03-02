export function Field_Example_CSS(updatedKnobVals: Record<string, unknown> = {}) {
  return `
[data-slot="field"] {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.25rem;
  width: 100%;
  max-width: 16rem;
}

[data-slot="field-label"] {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: var(--lk-onsurface);
}

[data-slot="field-input"] {
  box-sizing: border-box;
  padding-left: 0.875rem;
  margin: 0;
  border: 1px solid var(--lk-outlinevariant);
  width: 100%;
  height: 2.5rem;
  border-radius: 0.375rem;
  font-family: inherit;
  font-size: 1rem;
  background-color: transparent;
  color: var(--lk-onsurface);

  &:focus {
    outline: 2px solid var(--lk-info);
    outline-offset: -1px;
  }
}

[data-slot="field-error"] {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--color-red-800);
}

[data-slot="field-description"] {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--color-gray-600);
}

  `;
}
