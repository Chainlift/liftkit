import { SubComponentDocs } from "@/app/docs/lib/subcomponent-utils";
import type { SubComponentEntry } from "@/app/docs/lib/component-doc";

/** The API reference for every part of a component. */
export function SubComponentSection({ subComponents }: { subComponents?: Record<string, SubComponentEntry> }) {
  if (!subComponents || Object.keys(subComponents).length === 0) return null;

  return (
    <div>
      {Object.entries(subComponents).map(([name, subComponent]) => (
        <SubComponentDocs key={name} name={name} subComponent={subComponent} />
      ))}
    </div>
  );
}
