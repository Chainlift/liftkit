import { Section, Container } from "@chainlift/liftkit";

export default function SectionWithContainer() {
  return (
    <Section padding="xl" className="w-full border border-color-outlinevariant rounded-xs">
      <Container maxWidth="xs">
        <h2 className="title2-bold mb-xs">A readable column</h2>
        <p className="body">
          The Section pads the content. The Container centers it and caps its width at 80 characters, a comfortable
          line length for reading.
        </p>
      </Container>
    </Section>
  );
}
