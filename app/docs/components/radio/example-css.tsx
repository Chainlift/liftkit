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
      <code>{`.RadioGroup {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.25rem;
  color: var(--lk-onsurface);
}

.Caption {
  font-weight: 500;
}

.Item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.Radio {
  box-sizing: border-box;
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  outline: 0;
  padding: 0;
  margin: 0;
  border: none;

  &[data-unchecked] {
    border: 1px solid var(--lk-outlinevariant);
    background-color: transparent;
  }

  &[data-checked] {
    background-color: var(--lk-onsurface);
  }

  &:focus-visible {
    outline: 2px solid var(--lk-info);
    outline-offset: 2px;
  }
}

.Indicator {
  display: flex;
  align-items: center;
  justify-content: center;

  &[data-unchecked] {
    display: none;
  }

  &::before {
    content: "";
    border-radius: 100%;
    width: 0.5rem;
    height: 0.5rem;
    background-color: var(--lk-surfacecontainerlow);
  }
}
`}</code>
    </pre>
  );
}
