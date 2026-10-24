import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function ContextMenu_Example_TS(updatedKnobVals: Record<string, unknown> = {}) {
  const componentName = "ContextMenu"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `
  import {
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
   ${openTag}
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
`;
}
