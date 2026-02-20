export function LocalCssSample() {
  return (
    <pre style={{
      overflowX: "auto",
      padding: 16,
      borderRadius: 12,
      border: "1px solid var(--lk-outline)",
      backgroundColor: "var(--lk-surface-container-low)",
      fontSize: "0.875rem",
      lineHeight: 1.5,
    }}>
      <code>{`.Fieldset {
  border: 0;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 16rem;
}

.Legend {
  border-bottom: 1px solid var(--lk-outlinevariant);
  padding-bottom: 0.75rem;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: -0.0025em;
  color: var(--lk-onsurface);
}

.Field {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.25rem;
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
`}</code>
    </pre>
  );
}
