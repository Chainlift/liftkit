"use client";
import Column from "@/registry/nextjs/components/column";
import Heading from "@/registry/nextjs/components/heading";
import Row from "@/registry/nextjs/components/row";
import Section from "@/registry/nextjs/components/section";
import Container from "@/registry/nextjs/components/containers";
import Grid from "@/registry/nextjs/components/grid";
import MenuItem from "@/registry/nextjs/components/menu-item";
import type { IconName } from "lucide-react/dynamic";
import { LkIconProps } from "@/registry/nextjs/components/icon";
import { Dropdown, DropdownTrigger, DropdownMenu } from "@/registry/nextjs/components/dropdown";

export default function DropdownMenuStaging() {
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

  const lkColors: LkColor[] = [
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

  const testIcons: IconName[] = ["arrow-right", "circle"];

  return (
    <>
      <Section padding="md">
        <Container>
          <Heading tag="h2" className="m-bottom-md">
            Dropdown Menu Component Tests
          </Heading>
        </Container>

        {fontClasses.map((fontClass) => (
          <Container className="m-bottom-xl" key={fontClass}>
            <h2 className="subheading mono m-bottom-xs">
              fontClass=<strong className="color-primary">{fontClass}</strong>
            </h2>
            <Dropdown>
              <DropdownTrigger>
                <button>Open Menu</button>
              </DropdownTrigger>
              <DropdownMenu cardProps={{ scaleFactor: fontClass }}>
                <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                  End icon with extremely long text
                </MenuItem>
              </DropdownMenu>
            </Dropdown>
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
