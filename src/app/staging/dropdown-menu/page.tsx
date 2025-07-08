"use client";
import Column from "@/registry/nextjs/components/column";
import Heading from "@/registry/nextjs/components/heading";
import Row from "@/registry/nextjs/components/row";
import Section from "@/registry/nextjs/components/section";
import Container from "@/registry/nextjs/components/container";
import MenuItem from "@/registry/nextjs/components/menu-item";
import { LkIconProps } from "@/registry/nextjs/components/icon";
import { Dropdown, DropdownTrigger, DropdownMenu } from "@/registry/nextjs/components/dropdown";
import IconButton from "@/registry/nextjs/components/icon-button";

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

  return (
    <>
      <Section padding="md">
        <Container>
          <Heading tag="h2" className="mb-md">
            Dropdown Menu Component Tests
          </Heading>
        </Container>
        <Row defaultChildBehavior="auto-grow">
          <Column>
            {fontClasses.map((fontClass) => (
              <div key={fontClass}>
                <h2 className="subheading mono mb-xs">
                  fontClass=<strong className="color-primary">{fontClass}</strong>
                </h2>
                <Dropdown>
                  <DropdownTrigger>
                    <IconButton fontClass={fontClass} icon="ellipsis"></IconButton>
                  </DropdownTrigger>
                  <DropdownMenu
                    cardProps={{ scaleFactor: fontClass, material: "glass", materialProps: { thickness: "normal" } }}
                  >
                    <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                      End icon with extremely long text
                    </MenuItem>
                    <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                      End icon with extremely long text
                    </MenuItem>
                    <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                      End icon with extremely long text
                    </MenuItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            ))}
          </Column>
          <Column>
            {fontClasses.map((fontClass) => (
              <div key={fontClass + "1"}>
                <h2 className="subheading mono mb-xs">
                  fontClass=<strong className="color-primary">{fontClass}</strong>
                </h2>
                <Dropdown>
                  <DropdownTrigger>
                    <IconButton fontClass={fontClass} icon="ellipsis"></IconButton>
                  </DropdownTrigger>
                  <DropdownMenu
                    cardProps={{ scaleFactor: fontClass, material: "glass", materialProps: { thickness: "normal" } }}
                  >
                    <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                      End icon with extremely long text
                    </MenuItem>
                    <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                      End icon with extremely long text
                    </MenuItem>
                    <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                      End icon with extremely long text
                    </MenuItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            ))}
          </Column>
          <Column>
            {fontClasses.map((fontClass) => (
              <div key={fontClass + "2"}>
                <h2 className="subheading mono mb-xs">
                  fontClass=<strong className="color-primary">{fontClass}</strong>
                </h2>
                <Dropdown>
                  <DropdownTrigger>
                    <IconButton fontClass={fontClass} icon="ellipsis"></IconButton>
                  </DropdownTrigger>
                  <DropdownMenu
                    cardProps={{ scaleFactor: fontClass, material: "glass", materialProps: { thickness: "normal" } }}
                  >
                    <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                      End icon with extremely long text
                    </MenuItem>
                    <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                      End icon with extremely long text
                    </MenuItem>
                    <MenuItem startIcon={startIconConfig} endIcon={endIconConfig}>
                      End icon with extremely long text
                    </MenuItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            ))}
          </Column>
        </Row>
      </Section>
    </>
  );
}

// function MenuItemGroup({
//   color = "warning",
//   fontClass = "body",
// }: {
//   color?: LkColor | string;
//   fontClass?: LkFontClass;
// }) {
//   return (
//     <>
//       <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
//         End icon
//       </MenuItem>
//       <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
//         End icon with long text
//       </MenuItem>
//       <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
//         boop
//       </MenuItem>
//       <MenuItem fontClass={fontClass} startIcon={startIconConfig} endIcon={endIconConfig}>
//         End icon with extremely long text
//       </MenuItem>
//     </>
//   );
// }

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
