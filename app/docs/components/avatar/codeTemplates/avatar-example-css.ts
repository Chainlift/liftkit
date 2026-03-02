export function Avatar_Example_CSS(updatedKnobVals: Record<string, unknown> = {}) {
  return `[data-slot="avatar-root"] {
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

[data-slot="avatar-image"] {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

[data-slot="avatar-fallback"] {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: 1rem;
}`;
}
