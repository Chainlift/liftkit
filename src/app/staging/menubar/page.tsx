// app/menubar/page.tsx

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarPortal,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarItemIndicator,
  MenubarLabel,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@/registry/nextjs/components/menubar"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Menubar Example</h1>

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarPortal>
            <MenubarContent>
              <MenubarItem>New File</MenubarItem>
              <MenubarItem>Open...</MenubarItem>
              <MenubarItem disabled>Save</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Export</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>PDF</MenubarItem>
                  <MenubarItem>DOCX</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarPortal>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarPortal>
            <MenubarContent>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
              <MenubarSeparator />
              <MenubarCheckboxItem checked>Word Wrap</MenubarCheckboxItem>
              <MenubarCheckboxItem>Line Numbers</MenubarCheckboxItem>
            </MenubarContent>
          </MenubarPortal>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarPortal>
            <MenubarContent>
              <MenubarLabel>Zoom</MenubarLabel>
              <MenubarRadioGroup value="100%">
                <MenubarRadioItem value="50%">50%</MenubarRadioItem>
                <MenubarRadioItem value="100%">100%</MenubarRadioItem>
                <MenubarRadioItem value="200%">200%</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarPortal>
        </MenubarMenu>
      </Menubar>
    </main>
  )
}
