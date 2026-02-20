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
      <code>{`.Container {
  display: flex;
  gap: 1rem;
  text-wrap: nowrap;
}

.Separator {
  width: 1px;
  background-color: var(--lk-outlinevariant);
}

.Link {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--lk-onsurface);
  text-decoration-color: var(--color-gray-400);
  text-decoration-thickness: 1px;
  text-decoration-line: none;
  text-underline-offset: 2px;

  @media (hover: hover) {
    &:hover {
      text-decoration-line: underline;
    }
  }

  &:focus-visible {
    border-radius: 0.125rem;
    outline: 2px solid var(--lk-info);
    text-decoration-line: none;
  }
}
`}</code>
    </pre>
  );
}
