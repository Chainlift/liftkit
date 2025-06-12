import Container from "@/registry/nextjs/components/containers";
import Heading from "@/registry/nextjs/components/heading";
import IconButton from "@/registry/nextjs/components/icon-button";
import Row from "@/registry/nextjs/components/row";
import Section from "@/registry/nextjs/components/section";

export default function IconButtonStaging() {
  const sizes: LkIconButtonSize[] = ["xs", "sm", "md", "lg", "xl"];
  const fontClasses: LkFontClass[] = ["display1", "display2", "title1", "title2", "title3", "heading", "subheading", "body", "callout", "label", "caption", "capline"];

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
          <Row gap="md">
            {fontClasses.map((fontClass) => (
              <IconButton key={fontClass} icon="circle" fontClass={fontClass}></IconButton>
            ))}
          </Row>
        </Container>
      </Section>
    </>
  );
}
