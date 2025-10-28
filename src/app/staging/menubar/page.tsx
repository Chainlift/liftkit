"use client";

import React from "react";
import Container from "@/registry/nextjs/components/container";
import Section from "@/registry/nextjs/components/section";
import Heading from "@/registry/nextjs/components/heading";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
} from "@/registry/nextjs/components/menubar";

export default function MenubarDemo() {
  const [bookmarksShown, setBookmarksShown] = React.useState(false);
  const [urlsShown, setUrlsShown] = React.useState(true);
  const [selectedProfile, setSelectedProfile] = React.useState("benoit");

  return (
    <Container>
      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Heading fontClass="display2">Menubar Examples</Heading>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Basic Menubar */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Browser-Style Menubar
              </Heading>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      New Window <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>New Incognito Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Share</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Email link</MenubarItem>
                        <MenubarItem>Messages</MenubarItem>
                        <MenubarItem>Notes</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>
                      Print... <MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Find</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Search the web</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Find...</MenubarItem>
                        <MenubarItem>Find Next</MenubarItem>
                        <MenubarItem>Find Previous</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                    <MenubarCheckboxItem checked={bookmarksShown} onCheckedChange={setBookmarksShown}>
                      Always Show Bookmarks Bar
                    </MenubarCheckboxItem>
                    <MenubarCheckboxItem checked={urlsShown} onCheckedChange={setUrlsShown}>
                      Always Show Full URLs
                    </MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarItem inset>
                      Reload <MenubarShortcut>⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled inset>
                      Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Hide Sidebar</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Profiles</MenubarTrigger>
                  <MenubarContent>
                    <MenubarRadioGroup value={selectedProfile} onValueChange={setSelectedProfile}>
                      <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                      <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                      <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
                    </MenubarRadioGroup>
                    <MenubarSeparator />
                    <MenubarItem inset>Edit...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Add Profile...</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>

            {/* Simple Application Menu */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Simple Application Menu
              </Heading>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>Application</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>About LiftKit</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Preferences... <MenubarShortcut>⌘,</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Quit LiftKit <MenubarShortcut>⌘Q</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Window</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Minimize <MenubarShortcut>⌘M</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>Zoom</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Bring All to Front</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Help</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Documentation</MenubarItem>
                    <MenubarItem>Keyboard Shortcuts</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Report Issue</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>

            {/* Destructive Actions Menu */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                With Destructive Actions
              </Heading>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>Project</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New Project</MenubarItem>
                    <MenubarItem>Open Project</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Export Project</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem variant="destructive">
                      Delete Project <MenubarShortcut>⌫</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Database</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Connect</MenubarItem>
                    <MenubarItem>Backup</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem variant="destructive">Reset Database</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
