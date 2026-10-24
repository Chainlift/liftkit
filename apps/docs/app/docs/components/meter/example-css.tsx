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
      <code>{`.Meter {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 0.5rem;
  width: 12rem;
}

.Label {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: var(--lk-onsurface);
}

.Value {
  grid-column-start: 2;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--lk-onsurface);
  text-align: right;
}

.Track {
  grid-column: 1 / 3;
  overflow: hidden;
  background-color: var(--color-gray-100);
  box-shadow: inset 0 0 0 1px var(--lk-outlinevariant);
  height: 0.5rem;
}

.Indicator {
  background-color: var(--lk-surfacecontainerlow0);
  transition: width 500ms;
}
`}</code>
    </pre>
  );
}
