export function Select_Example_CSS(updatedKnobVals: Record<string, unknown> = {}) {
  return `
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
  cursor: default;
}

[data-slot="select-value"][data-placeholder] {
  opacity: 0.6;
}

[data-slot="select-trigger"] {
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
  background-color: var(--lk-surface);
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--lk-onsurface);
  -webkit-user-select: none;
  user-select: none;
  min-width: 10rem;

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

[data-slot="select-icon"] {
  display: flex;
}

[data-slot="select-positioner"] {
  outline: none;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

[data-slot="select-popup"] {
  box-sizing: border-box;
  border-radius: 0.375rem;
  background-color: var(--lk-surface);
  background-clip: padding-box;
  color: var(--lk-onsurface);
  min-width: var(--anchor-width);
  transform-origin: var(--transform-origin);
  transition:
    transform 150ms,
    opacity 150ms;

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 0;
    transform: scale(0.9);
  }

  &[data-side="none"] {
    transition: none;
    transform: none;
    opacity: 1;
    min-width: calc(var(--anchor-width) + 1rem);
  }

  @media (prefers-color-scheme: light) {
    outline: 1px solid var(--lk-outlinevariant);
    box-shadow:
      0 10px 15px -3px var(--lk-outlinevariant),
      0 4px 6px -4px var(--lk-outlinevariant);
  }

  @media (prefers-color-scheme: dark) {
    outline: 1px solid var(--lk-outlinevariant);
  }
}

[data-slot="select-list"] {
  box-sizing: border-box;
  position: relative;
  padding-block: 0.25rem;
  overflow-y: auto;
  max-height: var(--available-height);
  scroll-padding-block: 1.5rem;
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

[data-slot="select-item"] {
  box-sizing: border-box;
  outline: 0;
  font-size: 0.875rem;
  line-height: 1rem;
  padding-block: 0.5rem;
  padding-left: 0.625rem;
  padding-right: 1rem;
  display: grid;
  gap: 0.5rem;
  align-items: center;
  grid-template-columns: 0.75rem 1fr;
  cursor: default;
  -webkit-user-select: none;
  user-select: none;

  @media (pointer: coarse) {
    padding-block: 0.625rem;
    font-size: 0.925rem;
  }

  [data-side="none"] & {
    font-size: 1rem;
    padding-right: 3rem;
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

[data-slot="select-item-indicator"] {
  grid-column-start: 1;
}

.ItemIndicatorIcon {
  display: block;
  width: 0.75rem;
  height: 0.75rem;
}

[data-slot="select-item-text"] {
  grid-column-start: 2;
}

[data-slot="select-scroll-up-arrow"],
[data-slot="select-scroll-down-arrow"] {
  width: 100%;
  background: canvas;
  z-index: 1;
  text-align: center;
  cursor: default;
  border-radius: 0.375rem;
  height: 1rem;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }

  &[data-direction="up"] {
    &[data-side="none"] {
      &::before {
        top: -100%;
      }
    }
  }

  &[data-direction="down"] {
    bottom: 0;

    &[data-side="none"] {
      &::before {
        bottom: -100%;
      }
    }
  }
}

  `;
}
