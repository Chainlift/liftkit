import { Section, Container, type LkContainerProps } from "@chainlift/liftkit";

export default function ContainerDemo(knobs: LkContainerProps) {
  return (
    <Section className="w-full">
      <Container {...knobs} />
    </Section>
  );
}
