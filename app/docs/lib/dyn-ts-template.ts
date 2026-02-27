export function DynTSTemplate(knobValues: Record<string, any> = {}, ) {
  const propsString = Object.entries(knobValues)
    .filter(([_, v]) => v !== undefined && v !== "" && v !== false)
    .map(([key, value]) => {
      if (typeof value === "string") return `${key}="${value}"`;
      if (typeof value === "boolean") return key; // boolean true → just the prop name
      return `${key}={${JSON.stringify(value)}}`;
    })
    .join(" ");

  const openTag = propsString ? `<Accordion ${propsString}>` : `<Accordion>`;

  return `[data-slot="accordion"] {
  box-sizing: border-box;
  display: flex;
  width: 24rem;
  max-width: calc(100vw - 8rem);
  flex-direction: column;
  justify-content: center;
  color: var(--lk-onsurface);

  &[data-orientation="vertical"] {
    /* Vertical orientation styles */
  }

  &[data-orientation="horizontal"] {
    /* Horizontal orientation styles */
  }

  &[data-disabled] {
    /* Disabled state styles */
  }
}

[data-slot="accordion-item"] {
  border-bottom: 1px solid var(--lk-outlinevariant);

  &[data-open] {
    /* Open state styles */
  }

  &[data-disabled] {
    /* Disabled state styles */
  }

  &[data-index] {
    /* Index-based styles */
  }
}

[data-slot="accordion-header"] {
  margin: 0;

  &[data-open] {
    /* Open state styles */
  }

  &[data-disabled] {
    /* Disabled state styles */
  }

  &[data-index] {
    /* Index-based styles */
  }
}

[data-slot="accordion-trigger"] {
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: baseline;
  justify-content: space-between;
  padding-block: 0.5rem;
  padding-inline: 0.75rem 0.25rem;
  color: var(--lk-onsurface);
  font-family: inherit;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  background: var(--lk-surfacecontainerlow);
  border: none;
  outline: none;
  text-align: left;

  @media (hover: hover) {
    &:hover {
      background-color: var(--lk-surfacecontainer);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--lk-info);
    z-index: 1;
  }

  &[data-panel-open] {
    /* Panel open state styles */
  }

  &[data-disabled] {
    /* Disabled state styles */
  }
}

[data-slot="accordion-trigger-icon"] {
  box-sizing: border-box;
  flex-shrink: 0;
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.5rem;
  transition: transform 150ms ease-out;

  [data-panel-open] > & {
    transform: rotate(45deg) scale(1.1);
  }
}

.Panel {
  box-sizing: border-box;
  height: var(--accordion-panel-height);
  overflow: hidden;
  color: var(--lk-onsurfacevariant);
  font-size: 1rem;
  line-height: 1.5rem;
  transition: height 150ms ease-out;

  &[data-starting-style],
  &[data-ending-style] {
    height: 0;
  }

  &[data-open] {
    /* Open state styles */
  }

  &[data-orientation="vertical"] {
    /* Vertical orientation styles */
  }

  &[data-orientation="horizontal"] {
    /* Horizontal orientation styles */
  }

  &[data-disabled] {
    /* Disabled state styles */
  }

  &[data-index] {
    /* Index-based styles */
  }
}

.Content {
  padding: 0.75rem;
}
`;
}
