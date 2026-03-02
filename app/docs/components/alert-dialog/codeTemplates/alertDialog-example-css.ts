import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";

export function AlertDialog_Example_CSS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "AlertDialog";
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `
  [data-slot="alert-dialog-trigger"],
[data-slot="alert-dialog-close"] {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 0.875rem;
  margin: 0;
  outline: 0;
  border: 1px solid var(--lk-outlinevariant);
  border-radius: 0.375rem;
  background-color: var(--lk-surfacecontainerlow);
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: var(--lk-onsurface);
  user-select: none;

  &[data-color="red"] {
    color: var(--lk-error);
  }

  @media (hover: hover) {
    &:hover {
      background-color: var(--lk-surfacecontainer);
    }
  }

  &:active {
    background-color: var(--lk-surfacecontainer);
  }

  &:focus-visible {
    outline: 2px solid var(--lk-info);
    outline-offset: -1px;
  }

  &[data-popup-open] {
    /* Popup open state (for Trigger) */
  }

  &[data-disabled] {
    /* Disabled state (for Trigger/Close) */
  }
}

[data-slot="alert-dialog-overlay"] {
  position: fixed;
  min-height: 100dvh;
  inset: 0;
  background-color: black;
  opacity: 0.2;
  transition: opacity 150ms;

  /* iOS 26+: Ensure the backdrop covers the entire visible viewport. */
  @supports (-webkit-touch-callout: none) {
    position: absolute;
  }

  @media (prefers-color-scheme: dark) {
    opacity: 0.7;
  }

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 0;
  }

  &[data-open] {
    /* Open state styles */
  }

  &[data-closed] {
    /* Closed state styles */
  }
}

[data-slot="alert-dialog-viewport"] {
  &[data-open] {
    /* Open state styles */
  }

  &[data-closed] {
    /* Closed state styles */
  }

  &[data-nested] {
    /* Nested dialog styles */
  }

  &[data-nested-dialog-open] {
    /* Has nested dialogs open */
  }

  &[data-starting-style] {
    /* Animating in */
  }

  &[data-ending-style] {
    /* Animating out */
  }
}

[data-slot="alert-dialog-content"] {
  box-sizing: border-box;
  position: fixed;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  max-width: calc(100vw - 3rem);
  margin-top: -2rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  outline: 1px solid var(--lk-outlinevariant);
  background-color: var(--lk-surfacecontainerlowest);
  color: var(--lk-onsurface);
  transition: all 150ms;

  @media (prefers-color-scheme: dark) {
    outline: 1px solid var(--lk-outlinevariant);
  }

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
  }

  &[data-open] {
    /* Open state styles */
  }

  &[data-closed] {
    /* Closed state styles */
  }

  &[data-nested] {
    /* Nested dialog styles */
  }

  &[data-nested-dialog-open] {
    /* Has nested dialogs open */
  }
}

[data-slot="alert-dialog-title"] {
  margin-top: -0.375rem;
  margin-bottom: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: -0.0025em;
  font-weight: 500;
}

[data-slot="alert-dialog-description"] {
  margin: 0 0 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--lk-onsurfacevariant);
}

[data-slot="alert-dialog-action"] {
  display: flex;
  justify-content: end;
  gap: 1rem;
}

`;
}
