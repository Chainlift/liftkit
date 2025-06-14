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
        <MenuItemGroup />
      </Section>
    </>
  );
}

function MenuItemGroup() {
  return (
    <>
      <body className="bg-surfacecontainerhigh">
        <Row gap="md">
          <div className="tempcard">
            <MenuItem>No icon</MenuItem>
            <MenuItem startIcon="circle">Start icon</MenuItem>
            <MenuItem endIcon="arrow-right">End icon</MenuItem>
            <MenuItem startIcon="circle" endIcon="arrow-right">
              Both icons
            </MenuItem>
          </div>
        </Row>
      </body>

      <style jsx>{`
        .tempcard {
          padding: 1em;
          background-color: var(--lk-surfacecontainerlowest);
          border-radius: 0.5em;
          display: flex;
          flex-flow: column nowrap;
        }
      `}</style>
    </>
  );
}
