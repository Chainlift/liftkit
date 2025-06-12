import Container from "@/registry/nextjs/components/containers";
import Heading from "@/registry/nextjs/components/heading";
import IconButton from "@/registry/nextjs/components/icon-button";
import Row from "@/registry/nextjs/components/row";
import Column from "@/registry/nextjs/components/column";
import Section from "@/registry/nextjs/components/section";
import Text from "@/registry/nextjs/components/text";

export default function IconButtonStaging() {
  const sizes: LkIconButtonSize[] = ["xs", "sm", "md", "lg", "xl"];
  const fontClasses: LkFontClass[] = [
    "display1",
    "display2",
    "title1",
    "title2",
    "title3",
    "heading",
    "subheading",
    "body",
    "callout",
    "label",
    "caption",
    "capline",
  ];

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
          <Column gap="md">
            {fontClasses.map((fontClass) => (
              <div key={fontClass} className="flex-h-center gap-sm">
                <IconButton icon="arrow-right" fontClass={fontClass}></IconButton>
                <Text fontClass={fontClass}> {fontClass}</Text>
              </div>
            ))}
          </Column>
        </Container>
      </Section>
    </>
  );
}
