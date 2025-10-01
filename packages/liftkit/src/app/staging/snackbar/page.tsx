import Container from "@/registry/nextjs/components/container";
import Row from "@/registry/nextjs/components/row";
import Column from "@/registry/nextjs/components/column";
import Section from "@/registry/nextjs/components/section";
import Text from "@/registry/nextjs/components/text";
import Snackbar from "@/registry/nextjs/components/snackbar";
import Button from "@/registry/nextjs/components/button";
import Icon from "@/registry/nextjs/components/icon";

export default function SnackbarStaging() {
  const colors: LkColorWithOnToken[] = [
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
          <h1 className="display2-bold mb-xl">Snackbar Staging</h1>
          <Row gap="md" justifyContent="start" defaultChildBehavior="auto-shrink">
            <Column gap="md" justifyContent="start" defaultChildBehavior="auto-shrink">
              <h2 className="title2 mono mb-md">Icon only</h2>
              {colors.map((color) => (
                <Snackbar globalColor={color} key={color}>
                  <Icon name="check-circle"></Icon>
                  <Text color="onsurface">Hello World, I&apos;m just some text.</Text>
                  {/**Note: snackbar will override the button's variant and color props. */}
                </Snackbar>
              ))}
            </Column>
            <Column gap="md" justifyContent="start" defaultChildBehavior="auto-shrink">
              <h2 className="title2 mono mb-md">Button only</h2>
              {colors.map((color) => (
                <Snackbar globalColor={color} key={color}>
                  <Text color="onsurface">Hello World, I&apos;m just some text.</Text>
                  {/**Note: snackbar will override the button's variant and color props. */}
                  <Button label="Confirm" color="success"></Button>
                </Snackbar>
              ))}
            </Column>
            <Column gap="md" justifyContent="start" defaultChildBehavior="auto-shrink">
              <h2 className="title2 mono mb-md">Icon and button</h2>
              {colors.map((color) => (
                <Snackbar globalColor={color} key={color}>
                  <Icon name="check-circle"></Icon>
                  <Text color="onsurface">Hello World, I&apos;m just some text.</Text>
                  {/**Note: snackbar will override the button's variant and color props. */}
                  <Button label="Confirm" color="success"></Button>
                </Snackbar>
              ))}
            </Column>
            <Column gap="md" justifyContent="start" defaultChildBehavior="auto-shrink">
              <h2 className="title2 mono mb-md">Neither</h2>
              {colors.map((color) => (
                <Snackbar globalColor={color} key={color}>
                  <Text color="onsurface">Hello World, I&apos;m just some text.</Text>
                </Snackbar>
              ))}
            </Column>
            <Column gap="md" justifyContent="start" defaultChildBehavior="auto-shrink">
              <h2 className="title2 mono mb-md">Neither AND no globalColor</h2>
              {colors.map((color) => (
                <Snackbar key={color}>
                  <Text color="onsurface">Hello World, I&apos;m just some text.</Text>
                </Snackbar>
              ))}
            </Column>
          </Row>
        </Container>
      </Section>
    </>
  );
}
