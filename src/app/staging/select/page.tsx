"use client";
import Column from "@/registry/nextjs/components/column";
import Heading from "@/registry/nextjs/components/heading";
import Row from "@/registry/nextjs/components/row";
import Section from "@/registry/nextjs/components/section";
import Container from "@/registry/nextjs/components/containers";
import Button from "@/registry/nextjs/components/button";
import MenuItem from "@/registry/nextjs/components/menu-item";
import type { IconName } from "lucide-react/dynamic";
import { LkIconProps } from "@/registry/nextjs/components/icon";
import { Dropdown, DropdownTrigger, DropdownMenu } from "@/registry/nextjs/components/dropdown";
import IconButton from "@/registry/nextjs/components/icon-button";
import { Select, SelectTrigger, SelectMenu, SelectOption } from "@/registry/nextjs/components/select";
import TextInput from "@/registry/nextjs/components/text-input";
import React from "react";

export default function SelectStaging() {
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

  const [selectedValue, setSelectedValue] = React.useState<string>("Please choose an option");
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedValue(event.target.value);
  }

  return (
    <>
      <Section padding="md">
        <Container>
          <Heading tag="h2" className="m-bottom-md">
            Select Component Tests
          </Heading>
        </Container>
        <Column>
          {selectedValue}
          {fontClasses.map((fontClass) => (
            <div key={fontClass}>
              <h2 className="subheading mono m-bottom-xs">
                fontClass=<strong className="color-primary">{fontClass}</strong>
              </h2>

              <Select
                options={[
                  { label: "Option 1", value: "opt1" },
                  { label: "Option 2", value: "opt2" },
                  { label: "Option 3", value: "opt3" },
                ]}
                value={selectedValue}
                onChange={handleChange}
                name={fontClass}
              >
                <SelectTrigger>
                  <Button label="Select"></Button>
                </SelectTrigger>
                <SelectMenu
                  cardProps={{ scaleFactor: fontClass, material: "glass", materialProps: { thickness: "normal" } }}
                >
                  <SelectOption value="opt1">Option 1</SelectOption>
                  <SelectOption value="opt2">Option 2</SelectOption>
                  <SelectOption value="opt3">Option 3</SelectOption>
                </SelectMenu>
              </Select>
            </div>
          ))}
        </Column>
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
