// app/context-menu/page.tsx

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/registry/nextjs/components/context-menu"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Context Menu Example</h1>

      <ContextMenu>
        <ContextMenuTrigger>
          <div
            style={{
              border: "1px dashed gray",
              padding: "40px",
              textAlign: "center",
              cursor: "context-menu",
            }}
          >
            Right click here
          </div>
        </ContextMenuTrigger>

        <ContextMenuPortal>
          <ContextMenuContent>
            <ContextMenuItem>New Tab</ContextMenuItem>
            <ContextMenuItem>New Window</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked>Show Bookmarks Bar</ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuLabel>People</ContextMenuLabel>
            <ContextMenuRadioGroup value="john">
              <ContextMenuRadioItem value="john">John</ContextMenuRadioItem>
              <ContextMenuRadioItem value="jane">Jane</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Developer Tools</ContextMenuItem>
                <ContextMenuItem>Extensions</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuContent>
        </ContextMenuPortal>
      </ContextMenu>
    </main>
  )
}
