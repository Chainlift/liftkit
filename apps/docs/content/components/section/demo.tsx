import { Section, type LkSectionProps } from "liftkit";

export default function SectionDemo(knobs: LkSectionProps) {
  return (
    <Section className="w-full border border-color-outlinevariant rounded-xs" {...knobs} />
  );
}
