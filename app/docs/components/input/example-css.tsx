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
      <code>{`.Label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
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
  width: 14rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: normal;
  background-color: transparent;
  color: var(--lk-onsurface);

  &:focus {
    outline: 2px solid var(--lk-info);
    outline-offset: -1px;
  }
}
`}</code>
    </pre>
  );
}
