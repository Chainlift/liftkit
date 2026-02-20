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
      <code>{`.Menubar {
  display: flex;
  background-color: var(--lk-surfacecontainerlow);
  border: 1px solid var(--lk-outlinevariant);
  border-radius: 0.375rem;
  padding: 0.125rem;
}

.MenuTrigger {
  box-sizing: border-box;
  background: none;
  padding: 0 0.75rem;
  margin: 0;
  outline: 0;
  border: 0;
  color: var(--color-gray-600);
  border-radius: 0.25rem;
  user-select: none;
  height: 2rem;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;

  &[data-pressed],
  &:focus-visible {
    background-color: var(--color-gray-100);
    outline: none;
  }

  &[data-disabled] {
    opacity: 0.5;
  }
}

.MenuPositioner {
  outline: 0;
}

.MenuPopup {
  box-sizing: border-box;
  padding-block: 0.25rem;
  border-radius: 0.375rem;
  background-color: var(--lk-surface);
  color: var(--lk-onsurface);
  transform-origin: var(--transform-origin);

  &[data-ending-style] {
    opacity: 0;
    transition: opacity 150ms;
  }

  &[data-instant] {
    transition: none;
  }

  @media (prefers-color-scheme: light) {
    outline: 1px solid var(--lk-outlinevariant);
    box-shadow:
      0 10px 15px -3px var(--lk-outlinevariant),
      0 4px 6px -4px var(--lk-outlinevariant);
  }

  @media (prefers-color-scheme: dark) {
    outline: 1px solid var(--lk-outlinevariant);
    outline-offset: -1px;
  }
}

.MenuItem {
  outline: 0;
  cursor: default;
  user-select: none;
  padding: 0.5rem 1rem;
  display: flex;
  font-size: 0.875rem;
  line-height: 1rem;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  &[data-popup-open] {
    z-index: 0;
    position: relative;
  }

  &[data-popup-open]::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset-block: 0;
    inset-inline: 0.25rem;
    border-radius: 0.25rem;
    background-color: var(--color-gray-100);
  }

  &[data-highlighted] {
    z-index: 0;
    position: relative;
    color: var(--lk-surfacecontainerlow);
  }

  &[data-highlighted]::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset-block: 0;
    inset-inline: 0.25rem;
    border-radius: 0.25rem;
    background-color: var(--lk-onsurface);
  }
}

.MenuSeparator {
  margin: 0.375rem 1rem;
  height: 1px;
  background-color: var(--lk-outlinevariant);
}
`}</code>
    </pre>
  );
}
