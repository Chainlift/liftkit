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
      <code>{`.Root {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border-radius: 100%;
  user-select: none;
  font-weight: 500;
  color: var(--lk-onsurface);
  background-color: var(--lk-surfacecontainer);
  font-size: 1rem;
  line-height: 1;
  overflow: hidden;
  height: 3rem;
  width: 3rem;
}

.Image {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.Fallback {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: 1rem;
}
`}</code>
    </pre>
  );
}
