import Container from "@/registry/nextjs/components/container";
import Heading from "@/registry/nextjs/components/heading";
import IconButton from "@/registry/nextjs/components/icon-button";
import Row from "@/registry/nextjs/components/row";
import Column from "@/registry/nextjs/components/column";
import Section from "@/registry/nextjs/components/section";
import Text from "@/registry/nextjs/components/text";

export default function IconButtonStaging() {
  const fontClasses: Exclude<LkFontClass, `${string}-bold` | `${string}-mono`>[] = [
    "display1",
    "display2",
    "title1",
    "title2",
    "title3",
    "heading",
    "body",
    "callout",
    "subheading",
    "label",
    "caption",
    "capline",
  ];

  return (
    <>
      <Section padding="md">
        <Container>
          <Heading tag="h1" className="display2-bold mb-md">
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
          {generateSizes()}
        </Container>
      </Section>
    </>
  );
}

function generateVariants(
  color: LkColorWithOnToken,
  fontClass: Exclude<LkFontClass, `${string}-bold` | `${string}-mono`> = "body"
) {
  const variants = ["fill", "outline", "text"];

  return (
    <Row gap="md" key={Math.random() * 10} alignItems="center" justifyContent="center">
      {variants.map((variant, index) => (
        <IconButton
          key={index}
          icon="roller-coaster"
          color={color}
          fontClass={fontClass}
          //@ts-expect-error - IconButton variant prop is not typed correctly here but it really isn't an issue
          variant={variant}
        ></IconButton>
      ))}
    </Row>
  );
}

function generateColorVariants(fontClass: Exclude<LkFontClass, `${string}-bold` | `${string}-mono`>) {
  const buttonColors: LkColorWithOnToken[] = [
    "primary",
    "secondary",
    "tertiary",
    "error",
    "warning",
    "info",
    "success",
    "primarycontainer",
    "secondarycontainer",
    "tertiarycontainer",
    "errorcontainer",
    "warningcontainer",
    "infocontainer",
    "successcontainer",
    "surface",
    "surfacecontainerlowest",
    "surfacecontainerlow",
    "surfacecontainerhigh",
    "surfacecontainerhighest",
    "surfacevariant",
    "inversesurface",
    "background",
  ];

  const colorSpread = buttonColors.map((buttonColor) => generateVariants(buttonColor, fontClass));

  return <div>{colorSpread}</div>;
}

function generateSizes() {
  const fontClasses: Exclude<LkFontClass, `${string}-bold` | `${string}-mono`>[] = [
    "display1",
    "display2",
    "title1",
    "title2",
    "title3",
    "heading",
    "body",
    "callout",
    "subheading",
    "label",
    "caption",
    "capline",
  ];

  return <div>{fontClasses.map((fontClass) => generateColorVariants(fontClass))}</div>;
}
