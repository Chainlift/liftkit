"use client";

import { cn } from "@/lib/cn";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import styles from "./index.module.css";

function Menu({ ...props }: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="menu" {...props} />;
}

function MenuTrigger({ className, ...props }: MenuPrimitive.Trigger.Props) {
  return <MenuPrimitive.Trigger data-slot="menu-trigger" className={cn("", className)} {...props} />;
}

function MenuPortal({ ...props }: MenuPrimitive.Portal.Props) {
  return <MenuPrimitive.Portal {...props} />;
}

function MenuPositioner({ className, ...props }: MenuPrimitive.Positioner.Props) {
  return (
    <MenuPrimitive.Positioner data-slot="menu-positioner" className={cn("", styles.Positioner, className)} {...props} />
  );
}

function MenuPopup({ className, ...props }: MenuPrimitive.Popup.Props) {
  return <MenuPrimitive.Popup data-slot="menu-popup" className={cn("", styles.Popup, className)} {...props} />;
}

function MenuArrow({ className, ...props }: MenuPrimitive.Arrow.Props) {
  return <MenuPrimitive.Arrow data-slot="menu-arrow" className={cn("", styles.Arrow, className)} {...props} />;
}

function MenuItem({ className, ...props }: MenuPrimitive.Item.Props) {
  return <MenuPrimitive.Item data-slot="menu-item" className={cn("", styles.Item, className)} {...props} />;
}

function MenuSeparator({ className, ...props }: MenuPrimitive.Separator.Props) {
  return (
    <MenuPrimitive.Separator data-slot="menu-separator" className={cn("", styles.Separator, className)} {...props} />
  );
}

function MenuSubmenuRoot({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot data-slot="menu-submenu-root" {...props} />;
}

function MenuSubmenuTrigger({ className, ...props }: MenuPrimitive.SubmenuTrigger.Props) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="menu-submenu-trigger"
      className={cn("", styles.Item, className)}
      {...props}
    />
  );
}

export {
  Menu,
  MenuTrigger,
  MenuPortal,
  MenuPositioner,
  MenuPopup,
  MenuArrow,
  MenuItem,
  MenuSeparator,
  MenuSubmenuRoot,
  MenuSubmenuTrigger,
};
