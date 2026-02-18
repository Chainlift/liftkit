export function LocalCodeSample() {
  return (
    <pre style={{
      overflowX: "auto",
      padding: 16,
      borderRadius: 12,
      border: "1px solid var(--lk-outline)",
      backgroundColor: "var(--lk-surface-container-low)",
      fontSize: "0.875rem",
      lineHeight: 1.5,
    }}>
      <code>{`import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuPopup,
  ContextMenuItem,
  ContextMenuSeparator,
} from "./context-menu";

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click here</ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuItem>Add to Library</ContextMenuItem>
            <ContextMenuItem>Add to Playlist</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Play Next</ContextMenuItem>
            <ContextMenuItem>Play Last</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Favorite</ContextMenuItem>
            <ContextMenuItem>Share</ContextMenuItem>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenu>
  );
}
`}</code>
    </pre>
  );
}
