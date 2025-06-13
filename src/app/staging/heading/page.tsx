import Column from "@/registry/nextjs/components/column";
import Heading from "@/registry/nextjs/components/heading";
import Row from "@/registry/nextjs/components/row";
import Section from "@/registry/nextjs/components/section";

const LkColors: LkColor[] = [
  "primary",
  "onprimary",
  "primarycontainer",
  "onprimarycontainer",
  "secondary",
  "onsecondary",
  "secondarycontainer",
  "onsecondarycontainer",
  "tertiary",
  "ontertiary",
  "tertiarycontainer",
  "ontertiarycontainer",
  "error",
  "onerror",
  "errorcontainer",
  "onerrorcontainer",
  "background",
  "onbackground",
  "surface",
  "onsurface",
  "surfacevariant",
  "onsurfacevariant",
  "shadow",
  "inversesurface",
  "scrim",
  "inverseonsurface",
  "inverseprimary",
  "success",
  "onsuccess",
  "successcontainer",
  "onsuccesscontainer",
  "warning",
  "onwarning",
  "warningcontainer",
  "onwarningcontainer",
  "info",
  "oninfo",
  "infocontainer",
  "oninfocontainer",
  "primaryfixed",
  "onprimaryfixed",
  "primaryfixeddim",
  "onprimaryfixedvariant",
  "secondaryfixed",
  "onsecondaryfixed",
  "secondaryfixeddim",
  "onsecondaryfixedvariant",
  "tertiaryfixed",
  "ontertiaryfixed",
  "tertiaryfixeddim",
  "ontertiaryfixedvariant",
  "surfacedim",
  "surfacebright",
  "surfacecontainerlowest",
  "surfacecontainerlow",
  "surfacecontainer",
  "surfacecontainerhigh",
  "surfacecontainerhighest",
  "outline",
  "outlinevariant",
];

export default function HeadingStaging() {
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
      <Section padding="md" style={{maxWidth: "100vw", overflowX: "auto"}}>
        <Row gap="md">
          {fontClasses.map((fontClass) => (
            <Column key={fontClass} gap="none">
                <div className="body-bold m-bottom-md">{fontClass}</div>
              {getHeadingList(fontClass)}
            </Column>
          ))}
        </Row>
      </Section>
    </>
  );
}

function getHeadingList(fontClass: LkFontClass) {
  const headingTags: LkHeadingTag[] = ["h1", "h2", "h3", "h4", "h5", "h6"];
  return (
    <>
      {headingTags.map((tag) => (
        <Heading key={tag} tag={tag} fontClass={fontClass} fontColor="primary">
          {tag}
        </Heading>
      ))}
    </>
  );
}
