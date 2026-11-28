import { Section, type LkSectionProps } from "liftkit";

export default function SectionDemo(knobs: LkSectionProps) {
  return (
    <Section className="w-full border border-color-outlinevariant bg-surfacecontainerlow" {...knobs}>
      <span className="capline">Section</span>
      <div data-lk-component="placeholder">
        <span className="caption">placeholder</span>
      </div>
    </Section>
  );
}
