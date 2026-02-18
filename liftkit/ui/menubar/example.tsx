"use client";
import * as React from "react";
import { Menubar as BaseMenubar } from "@base-ui/react/menubar";
import { Menu as BaseMenu } from "@base-ui/react/menu";
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
} from "@/liftkit/ui/menu/menu";
import styles from "./menubar.module.css";

export default function ExampleMenubar() {
  return (
    <BaseMenubar className={styles.Menubar}>
      <BaseMenu.Root>
        <BaseMenu.Trigger className={styles.MenuTrigger}>File</BaseMenu.Trigger>
        <BaseMenu.Portal>
          <BaseMenu.Positioner className={styles.MenuPositioner} sideOffset={6} alignOffset={-2}>
            <BaseMenu.Popup className={styles.MenuPopup}>
              <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                New
              </BaseMenu.Item>
              <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                Open
              </BaseMenu.Item>
              <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                Save
              </BaseMenu.Item>

              <BaseMenu.SubmenuRoot>
                <BaseMenu.SubmenuTrigger className={styles.MenuItem}>
                  Export
                  <ChevronRightIcon />
                </BaseMenu.SubmenuTrigger>
                <BaseMenu.Portal>
                  <BaseMenu.Positioner alignOffset={-4}>
                    <BaseMenu.Popup className={styles.MenuPopup}>
                      <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                        PDF
                      </BaseMenu.Item>
                      <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                        PNG
                      </BaseMenu.Item>
                      <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                        SVG
                      </BaseMenu.Item>
                    </BaseMenu.Popup>
                  </BaseMenu.Positioner>
                </BaseMenu.Portal>
              </BaseMenu.SubmenuRoot>

              <BaseMenu.Separator className={styles.MenuSeparator} />
              <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                Print
              </BaseMenu.Item>
            </BaseMenu.Popup>
          </BaseMenu.Positioner>
        </BaseMenu.Portal>
      </BaseMenu.Root>

      <BaseMenu.Root>
        <BaseMenu.Trigger className={styles.MenuTrigger}>Edit</BaseMenu.Trigger>
        <BaseMenu.Portal>
          <BaseMenu.Positioner className={styles.MenuPositioner} sideOffset={6}>
            <BaseMenu.Popup className={styles.MenuPopup}>
              <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                Cut
              </BaseMenu.Item>
              <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                Copy
              </BaseMenu.Item>
              <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                Paste
              </BaseMenu.Item>
            </BaseMenu.Popup>
          </BaseMenu.Positioner>
        </BaseMenu.Portal>
      </BaseMenu.Root>

      <BaseMenu.Root>
        <BaseMenu.Trigger className={styles.MenuTrigger}>View</BaseMenu.Trigger>
        <BaseMenu.Portal>
          <BaseMenu.Positioner className={styles.MenuPositioner} sideOffset={6}>
            <BaseMenu.Popup className={styles.MenuPopup}>
              <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                Zoom In
              </BaseMenu.Item>
              <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                Zoom Out
              </BaseMenu.Item>

              <BaseMenu.SubmenuRoot>
                <BaseMenu.SubmenuTrigger className={styles.MenuItem}>
                  Layout
                  <ChevronRightIcon />
                </BaseMenu.SubmenuTrigger>
                <BaseMenu.Portal>
                  <BaseMenu.Positioner alignOffset={-4}>
                    <BaseMenu.Popup className={styles.MenuPopup}>
                      <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                        Single Page
                      </BaseMenu.Item>
                      <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                        Two Pages
                      </BaseMenu.Item>
                      <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                        Continuous
                      </BaseMenu.Item>
                    </BaseMenu.Popup>
                  </BaseMenu.Positioner>
                </BaseMenu.Portal>
              </BaseMenu.SubmenuRoot>

              <BaseMenu.Separator className={styles.MenuSeparator} />
              <BaseMenu.Item className={styles.MenuItem} onClick={handleClick}>
                Full Screen
              </BaseMenu.Item>
            </BaseMenu.Popup>
          </BaseMenu.Positioner>
        </BaseMenu.Portal>
      </BaseMenu.Root>

      <BaseMenu.Root disabled>
        <BaseMenu.Trigger className={styles.MenuTrigger}>Help</BaseMenu.Trigger>
      </BaseMenu.Root>
    </BaseMenubar>
  );
}

export function ExampleMenubar2() {
  return (
    <Menubar>
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

function handleClick(event: React.MouseEvent<HTMLElement>) {
  // eslint-disable-next-line no-console
  console.log(`${event.currentTarget.textContent} clicked`);
}

function ChevronRightIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
