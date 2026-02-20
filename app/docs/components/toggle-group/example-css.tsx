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
      <code>{`.Panel {
  display: flex;
  gap: 1px;
  border: 1px solid var(--lk-outlinevariant);
  background-color: var(--lk-surfacecontainerlow);
  border-radius: 0.375rem;
  padding: 0.125rem;
}

.Button {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  background-color: transparent;
  color: var(--color-gray-600);
  user-select: none;

  &:focus-visible {
    background-color: transparent;
    outline: 2px solid var(--lk-info);
    outline-offset: -1px;
  }

  @media (hover: hover) {
    &:hover {
      background-color: var(--color-gray-100);
    }
  }

  &:active {
    background-color: var(--lk-outlinevariant);
  }

  &[data-pressed] {
    background-color: var(--color-gray-100);
    color: var(--lk-onsurface);
  }
}

.Icon {
  width: 1rem;
  height: 1rem;
}
`}</code>
    </pre>
  );
}
