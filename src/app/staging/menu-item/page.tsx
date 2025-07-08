"use client";

import Heading from "@/registry/nextjs/components/heading";
import Row from "@/registry/nextjs/components/row";
import Section from "@/registry/nextjs/components/section";
import Container from "@/registry/nextjs/components/container";
import MenuItem from "@/registry/nextjs/components/menu-item";
import { LkIconProps } from "@/registry/nextjs/components/icon";

export default function MenuItemStaging() {
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
          <Heading tag="h2" className="mb-md">
            Menu Item Component Tests
          </Heading>
        </Container>

        {fontClasses.map((fontClass) => (
          <Container className="mb-xl" key={fontClass}>
            <h2 className="subheading mono mb-xs">
              fontClass=<strong className="color-primary">{fontClass}</strong>
            </h2>
            <MenuItemGroup color="onsurface" fontClass={fontClass} />
          </Container>
        ))}
        <MenuItemGroup color="warning" />
      </Section>
    </>
  );
}

function MenuItemGroup({
  color = "warning",
  fontClass = "body",
}: {
  color?: LkColor | string;
  fontClass?: LkFontClass;
}) {
  return (
    <>
      <div className="bg-surfacecontainerhigh p-xl">
        <Row gap="md">
          <div className={`tempcard color-${color}`}>
            <MenuItem fontClass={fontClass}>Start icon</MenuItem>
            <MenuItem fontClass={fontClass}>Start icon with long text</MenuItem>
            <MenuItem fontClass={fontClass}>boop</MenuItem>
            <MenuItem fontClass={fontClass}>Start icon with extremely long text</MenuItem>
          </div>
          <div className={`tempcard color-${color}`}>
            <MenuItem fontClass={fontClass} startIcon={startIconConfig}>
              Start icon
            </MenuItem>
            <MenuItem fontClass={fontClass} startIcon={startIconConfig}>
              Start icon with long text
            </MenuItem>
            <MenuItem fontClass={fontClass} startIcon={startIconConfig}>
              boop
            </MenuItem>
            <MenuItem fontClass={fontClass} startIcon={startIconConfig}>
              Start icon with extremely long text
            </MenuItem>
          </div>
          <div className={`tempcard color-${color}`}>
            <MenuItem fontClass={fontClass} endIcon={endIconConfig}>
              End icon
            </MenuItem>
            <MenuItem fontClass={fontClass} endIcon={endIconConfig}>
              End icon with long text
            </MenuItem>
            <MenuItem fontClass={fontClass} endIcon={endIconConfig}>
              boop
            </MenuItem>
            <MenuItem fontClass={fontClass} endIcon={endIconConfig}>
              End icon with extremely long text
            </MenuItem>
          </div>
          <div className={`tempcard color-${color}`}>
            <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
              End icon
            </MenuItem>
            <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
              End icon with long text
            </MenuItem>
            <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
              boop
            </MenuItem>
            <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
              End icon with extremely long text
            </MenuItem>
          </div>
        </Row>
      </div>

      <style jsx>{`
        .tempcard {
          padding: 1em;
          background-color: var(--lk-surfacecontainerlowest);
          border-radius: 0.5em;
          display: flex;
          flex-flow: column nowrap;
          flex: 1 0 0;
          flex-basis: 0;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}

const startIconConfig: LkIconProps = {
  name: "circle",
  fontClass: "body",
  color: "error",
  display: "block",
  strokeWidth: 4,
};

const endIconConfig: LkIconProps = {
  name: "arrow-right",
  fontClass: "body",
  color: "success",
  display: "block",
  strokeWidth: 2,
};
