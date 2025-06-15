import Container from "@/registry/nextjs/components/containers";
import Heading from "@/registry/nextjs/components/heading";
import IconButton from "@/registry/nextjs/components/icon-button";
import Row from "@/registry/nextjs/components/row";
import Column from "@/registry/nextjs/components/column";
import Section from "@/registry/nextjs/components/section";
import Text from "@/registry/nextjs/components/text";
import Grid from "@/registry/nextjs/components/grid";
import Snackbar from "@/registry/nextjs/components/snackbar";
import Badge from "@/registry/nextjs/components/badge";
import Button from "@/registry/nextjs/components/button";

export default function SnackbarStaging() {
  const sizes: LkIconButtonSize[] = ["xs", "sm", "md", "lg", "xl"];
  const fontClasses: Exclude<LkFontClass, `${string}-bold` | `${string}-mono`>[] = [
    "heading",
    "body",
    "callout",
    "subheading",
    "label",
    "caption",
    "capline",
  ];

  const variants = ["fill", "outline", "text"];

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

  return (
    <>
      <Section padding="md">
        <Container>
          <h1 className="display2-bold m-bottom-xl">Snackbar Staging</h1>
          <Column gap="md" justifyContent="start" defaultChildBehavior="auto-shrink">
            {fontClasses.map((fontClass) => (
              <Snackbar key={fontClass} fontClass={fontClass} globalColor="successcontainer">
                <Badge color="primary"></Badge>
                <Text color="onsurface">Hello World, I'm just some text.</Text>
                {/**Note: snackbar will override the button's variant and color props. */}
                <Button label="Confirm" color="success"></Button>
                <IconButton icon="arrow-right"></IconButton>
              </Snackbar>
            ))}
          </Column>
        </Container>
      </Section>
    </>
  );
}
