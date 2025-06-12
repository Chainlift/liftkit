import Container from "@/registry/nextjs/components/containers";
import Heading from "@/registry/nextjs/components/heading";
import IconButton from "@/registry/nextjs/components/icon-button";
import Section from "@/registry/nextjs/components/section";

export default function IconButtonStaging() {
  return (
    <>
      <Section padding="md">
        <Container>
          <Heading tag="h1" className="display2-bold m-bottom-md">
            Icon Button Staging
          </Heading>
        </Container>
      </Section>
      <Section padding="md">
        <Container>
          <IconButton></IconButton>
        </Container>
      </Section>
    </>
  );
}
