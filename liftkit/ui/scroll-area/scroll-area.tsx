"use client";

import { cn } from "@/lib/cn";
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import styles from "./index.module.css";

function ScrollArea({ className, ...props }: ScrollAreaPrimitive.Root.Props) {
  return <ScrollAreaPrimitive.Root data-slot="scroll-area" className={cn("", styles.ScrollArea, className)} {...props} />;
}

function ScrollAreaViewport({ className, ...props }: ScrollAreaPrimitive.Viewport.Props) {
  return <ScrollAreaPrimitive.Viewport data-slot="scroll-area-viewport" className={cn("", styles.Viewport, className)} {...props} />;
}

function ScrollAreaContent({ className, ...props }: ScrollAreaPrimitive.Content.Props) {
  return <ScrollAreaPrimitive.Content data-slot="scroll-area-content" className={cn("", styles.Content, className)} {...props} />;
}

function ScrollAreaScrollbar({ className, ...props }: ScrollAreaPrimitive.Scrollbar.Props) {
  return <ScrollAreaPrimitive.Scrollbar data-slot="scroll-area-scrollbar" className={cn("", styles.Scrollbar, className)} {...props} />;
}

function ScrollAreaThumb({ className, ...props }: ScrollAreaPrimitive.Thumb.Props) {
  return <ScrollAreaPrimitive.Thumb data-slot="scroll-area-thumb" className={cn("", styles.Thumb, className)} {...props} />;
}

export { ScrollArea, ScrollAreaViewport, ScrollAreaContent, ScrollAreaScrollbar, ScrollAreaThumb };
