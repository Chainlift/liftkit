export function Toolbar_Example_CSS(updatedKnobVals: Record<string, unknown> = {}) {
  return `
[data-slot="toolbar"] {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 1px;
  border: 1px solid var(--lk-outlinevariant);
  background-color: var(--lk-surfacecontainerlow);
  border-radius: 0.375rem;
  padding: 0.125rem;
  width: 37.5rem;
}

[data-slot="toolbar-group"] {
  display: flex;
  gap: 0.25rem;
}

[data-slot="toolbar-button"] {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  background-color: transparent;
  color: var(--color-gray-600);
  user-select: none;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;

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

  &[aria-pressed] {
    padding: 0 0.75rem;
  }

  &[role="combobox"] {
    min-width: 8rem;
    justify-content: space-between;
    padding: 0 0.75rem;
  }
}

[data-slot="toolbar-separator"] {
  width: 1px;
  height: 16px;
  margin: 0.25rem;
  background-color: var(--lk-outlinevariant);
}

[data-slot="toolbar-link"] {
  color: var(--lk-surfacecontainerlow0);
  font-family: inherit;
  font-size: 0.875rem;
  text-decoration: none;
  align-self: center;
  flex: 0 0 auto;
  margin-inline: auto 0.875rem;

  &:focus-visible {
    outline: 2px solid var(--lk-info);
    outline-offset: -2px;
    border-radius: var(--radius-sm);
  }

  @media (hover: hover) {
    &:hover {
      color: var(--lk-info);
    }
  }
}

.Select {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  height: 2.5rem;
  padding-left: 0.875rem;
  padding-right: 0.75rem;
  margin: 0;
  outline: 0;
  border: 1px solid var(--lk-outlinevariant);
  border-radius: 0.375rem;
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--lk-onsurface);
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  min-width: 9rem;

  @media (hover: hover) {
    &:hover {
      background-color: var(--color-gray-100);
    }
  }

  &[data-popup-open] {
    background-color: var(--color-gray-100);
  }

  &:focus-visible {
    outline: 2px solid var(--lk-info);
    outline-offset: -1px;
  }
}

.SelectIcon {
  display: flex;
}

.Positioner {
  outline: 0;
  -webkit-user-select: none;
  user-select: none;
  z-index: 1;
}

.Popup {
  box-sizing: border-box;
  padding-block: 0.25rem;
  border-radius: 0.375rem;
  background-color: var(--lk-surface);
  color: var(--lk-onsurface);
  transform-origin: var(--transform-origin);
  transition:
    transform 150ms,
    opacity 150ms;
  overflow-y: auto;
  max-height: var(--available-height);

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 0;
    transform: scale(0.9);
  }

  &[data-side="none"] {
    transition: none;
    transform: none;
    opacity: 1;
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

.Arrow {
  display: flex;

  &[data-side="top"] {
    bottom: -8px;
    rotate: 180deg;
  }

  &[data-side="bottom"] {
    top: -8px;
    rotate: 0deg;
  }

  &[data-side="left"] {
    right: -13px;
    rotate: 90deg;
  }

  &[data-side="right"] {
    left: -13px;
    rotate: -90deg;
  }
}

.ArrowFill {
  fill: canvas;
}

.ArrowOuterStroke {
  @media (prefers-color-scheme: light) {
    fill: var(--lk-outlinevariant);
  }
}

.ArrowInnerStroke {
  @media (prefers-color-scheme: dark) {
    fill: var(--lk-outlinevariant);
  }
}

.Item {
  box-sizing: border-box;
  outline: 0;
  line-height: 1rem;
  padding-block: 0.5rem;
  padding-left: 0.625rem;
  padding-right: 1rem;
  min-width: var(--anchor-width);
  display: grid;
  gap: 0.5rem;
  align-items: center;
  grid-template-columns: 0.75rem 1fr;
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  scroll-margin-block: 1rem;
  font-size: 0.875rem;

  @media (pointer: coarse) {
    padding-block: 0.625rem;
  }

  [data-side="none"] & {
    padding-right: 3rem;
    min-width: calc(var(--anchor-width) + 1rem);
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

.ItemIndicator {
  grid-column-start: 1;
}

.ItemIndicatorIcon {
  display: block;
  width: 0.75rem;
  height: 0.75rem;
}

.ItemText {
  grid-column-start: 2;
}

  `;
}
