import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Menubar_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "MenuBar"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `
  "use client";
import * as React from "react";
import { Menubar } from "./menubar";
import {
  Menu,
  MenuTrigger,
  MenuPortal,
  MenuPositioner,
  MenuPopup,
  MenuItem,
  MenuSeparator,
  MenuSubmenuRoot,
  MenuSubmenuTrigger,
} from "@chainlift/liftkit";

export default function MenubarDemo() {
  return (
    ${openTag}
      <Menu>
        <MenuTrigger>File</MenuTrigger>
        <MenuPortal>
          <MenuPositioner sideOffset={6} alignOffset={-2}>
            <MenuPopup>
              <MenuItem onClick={handleClick}>New</MenuItem>
              <MenuItem onClick={handleClick}>Open</MenuItem>
              <MenuItem onClick={handleClick}>Save</MenuItem>
              <MenuSubmenuRoot>
                <MenuSubmenuTrigger>
                  Export
                  <ChevronRightIcon />
                </MenuSubmenuTrigger>
                <MenuPortal>
                  <MenuPositioner alignOffset={-4}>
                    <MenuPopup>
                      <MenuItem onClick={handleClick}>PDF</MenuItem>
                      <MenuItem onClick={handleClick}>PNG</MenuItem>
                      <MenuItem onClick={handleClick}>SVG</MenuItem>
                    </MenuPopup>
                  </MenuPositioner>
                </MenuPortal>
              </MenuSubmenuRoot>
              <MenuSeparator />
              <MenuItem onClick={handleClick}>Print</MenuItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </Menu>
      <Menu>
        <MenuTrigger>Edit</MenuTrigger>
        <MenuPortal>
          <MenuPositioner sideOffset={6}>
            <MenuPopup>
              <MenuItem onClick={handleClick}>Cut</MenuItem>
              <MenuItem onClick={handleClick}>Copy</MenuItem>
              <MenuItem onClick={handleClick}>Paste</MenuItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </Menu>
      <Menu>
        <MenuTrigger>View</MenuTrigger>
        <MenuPortal>
          <MenuPositioner sideOffset={6}>
            <MenuPopup>
              <MenuItem onClick={handleClick}>Zoom In</MenuItem>
              <MenuItem onClick={handleClick}>Zoom Out</MenuItem>
              <MenuSubmenuRoot>
                <MenuSubmenuTrigger>
                  Layout
                  <ChevronRightIcon />
                </MenuSubmenuTrigger>
                <MenuPortal>
                  <MenuPositioner alignOffset={-4}>
                    <MenuPopup>
                      <MenuItem onClick={handleClick}>Single Page</MenuItem>
                      <MenuItem onClick={handleClick}>Two Pages</MenuItem>
                      <MenuItem onClick={handleClick}>Continuous</MenuItem>
                    </MenuPopup>
                  </MenuPositioner>
                </MenuPortal>
              </MenuSubmenuRoot>
              <MenuSeparator />
              <MenuItem onClick={handleClick}>Full Screen</MenuItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </Menu>
      <Menu disabled>
        <MenuTrigger>Help</MenuTrigger>
      </Menu>
    </Menubar>
  );
}


function ChevronRightIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

  `;
}
