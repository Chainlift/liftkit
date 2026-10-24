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
      <code>{`.ScrollArea {
  box-sizing: border-box;
  width: 24rem;
  height: 8.5rem;
  max-width: calc(100vw - 8rem);
}

.Viewport {
  height: 100%;
  border-radius: 0.375rem;
  outline: 1px solid var(--lk-outlinevariant);
  outline-offset: -1px;

  &:focus-visible {
    outline: 2px solid var(--lk-info);
  }
}

.Content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 0.75rem;
  padding-left: 1rem;
  padding-right: 1.5rem;
}

.Paragraph {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.375rem;
  color: var(--lk-onsurface);
}

.Scrollbar {
  display: flex;
  justify-content: center;
  background-color: var(--lk-outlinevariant);

  border-radius: 0.375rem;
  margin: 0.5rem;
  opacity: 0;
  transition: opacity 150ms;
  pointer-events: none;

  &[data-scrolling] {
    transition-duration: 0ms;
  }

  &[data-hovering],
  &[data-scrolling] {
    opacity: 1;
    pointer-events: auto;
  }

  &::before {
    content: "";
    position: absolute;

  }

  &[data-orientation="vertical"] {
    width: 0.25rem;
    margin: 0.5rem;

    &::before {
      width: 1.25rem;
      height: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &[data-orientation="horizontal"] {
    height: 0.25rem;
    margin: 0.5rem;

    &::before {
      width: 100%;
      height: 1.25rem;
      left: 0;
      right: 0;
      bottom: -0.5rem;
    }
  }
}

.Thumb {
  width: 100%;
  border-radius: inherit;
  background-color: var(--lk-surfacecontainerlow0);
}
`}</code>
    </pre>
  );
}
