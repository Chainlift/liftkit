import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuPopup,
  ContextMenuItem,
  ContextMenuSeparator,
} from "./context-menu";
import styles from "./context-menu.module.css";

export default function ExampleMenu() {
  return (
    <BaseContextMenu.Root>
      <BaseContextMenu.Trigger className={styles.Trigger}>Right click here</BaseContextMenu.Trigger>
      <BaseContextMenu.Portal>
        <BaseContextMenu.Positioner className={styles.Positioner}>
          <BaseContextMenu.Popup className={styles.Popup}>
            <BaseContextMenu.Item className={styles.Item}>Add to Library</BaseContextMenu.Item>
            <BaseContextMenu.Item className={styles.Item}>Add to Playlist</BaseContextMenu.Item>
            <BaseContextMenu.Separator className={styles.Separator} />
            <BaseContextMenu.Item className={styles.Item}>Play Next</BaseContextMenu.Item>
            <BaseContextMenu.Item className={styles.Item}>Play Last</BaseContextMenu.Item>
            <BaseContextMenu.Separator className={styles.Separator} />
            <BaseContextMenu.Item className={styles.Item}>Favorite</BaseContextMenu.Item>
            <BaseContextMenu.Item className={styles.Item}>Share</BaseContextMenu.Item>
          </BaseContextMenu.Popup>
        </BaseContextMenu.Positioner>
      </BaseContextMenu.Portal>
    </BaseContextMenu.Root>
  );
}

export function ExampleMenu2() {
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
