export function Fieldset_Example_CSS(updatedKnobVals: Record<string, unknown> = {}) {
  return `
[data-slot="fieldset"] {
  border: 0;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 16rem;
}

[data-slot="fieldset-legend"] {
  border-bottom: 1px solid var(--lk-outlinevariant);
  padding-bottom: 0.75rem;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: -0.0025em;
  color: var(--lk-onsurface);
}



.Label {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: var(--lk-onsurface);
}

.Input {
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

.Error {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--color-red-800);
}

.Description {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--color-gray-600);
}

  `;
}
