"use client";
import Column from "@/registry/nextjs/components/column";
import Heading from "@/registry/nextjs/components/heading";
import Row from "@/registry/nextjs/components/row";
import Section from "@/registry/nextjs/components/section";
import Image from "@/registry/nextjs/components/image";
import Container from "@/registry/nextjs/components/containers";
import Grid from "@/registry/nextjs/components/grid";
import MenuItem from "@/registry/nextjs/components/menu-item";
import type { IconName } from "lucide-react/dynamic";

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
      <Section>
        <Heading tag="h2">Image Component Tests</Heading>
        <MenuItemGroup color="primary" />
      </Section>
    </>
  );
}

function MenuItemGroup({ color = "primary" }: { color?: LkColor | string }) {
  return (
    <>
      <div className="bg-surfacecontainerhigh p-xl">
        <Row gap="md">
          <div className={`tempcard color-${color}`}>
            <MenuItem>Start icon</MenuItem>
            <MenuItem>Start icon with long text</MenuItem>
            <MenuItem>boop</MenuItem>
            <MenuItem>Start icon with extremely long text</MenuItem>
          </div>
          <div className={`tempcard color-${color}`}>
            <MenuItem startIcon="circle">Start icon</MenuItem>
            <MenuItem startIcon="circle">Start icon with long text</MenuItem>
            <MenuItem startIcon="circle">boop</MenuItem>
            <MenuItem startIcon="circle">Start icon with extremely long text</MenuItem>
          </div>
          <div className={`tempcard color-${color}`}>
            <MenuItem endIcon="arrow-right">End icon</MenuItem>
            <MenuItem endIcon="arrow-right">End icon with long text</MenuItem>
            <MenuItem endIcon="arrow-right">boop</MenuItem>
            <MenuItem endIcon="arrow-right">End icon with extremely long text</MenuItem>
          </div>
          <div className={`tempcard color-${color}`}>
            <MenuItem startIcon="circle" endIcon="arrow-right">
              End icon
            </MenuItem>
            <MenuItem startIcon="circle" endIcon="arrow-right">
              End icon with long text
            </MenuItem>
            <MenuItem startIcon="circle" endIcon="arrow-right">
              boop
            </MenuItem>
            <MenuItem startIcon="circle" endIcon="arrow-right">
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
