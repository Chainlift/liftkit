"use client";

import { cn } from "@/lib/cn";
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";
import "./menubar.css";

function Menubar({ className, ...props }: MenubarPrimitive.Props) {
  return <MenubarPrimitive data-slot="menubar" className={cn("", "Menubar", className)} {...props} />;
}

export { Menubar };
