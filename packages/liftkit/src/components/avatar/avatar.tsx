"use client";

import { cn } from "../../lib/cn";
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import "../../css/components/lk-avatar.css";

export type AvatarProps = AvatarPrimitive.Root.Props & {
  /**
   * Sizes the avatar proportionally: the circle and its initials both scale from this font class.
   * @default "body"
   */
  fontClass?: Extract<
    LkFontClass,
    | "display1"
    | "display2"
    | "title1"
    | "title2"
    | "title3"
    | "heading"
    | "subheading"
    | "body"
    | "callout"
    | "label"
    | "caption"
    | "capline"
  >;
};

function Avatar({ className, fontClass = "body", ...props }: AvatarProps) {
  return <AvatarPrimitive.Root data-slot="avatar" className={cn(fontClass, className)} {...props} />;
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return <AvatarPrimitive.Image data-slot="avatar-image" className={cn(className)} {...props} />;
}

function AvatarFallback({ className, ...props }: AvatarPrimitive.Fallback.Props) {
  return <AvatarPrimitive.Fallback data-slot="avatar-fallback" className={cn(className)} {...props} />;
}

export { Avatar, AvatarImage, AvatarFallback };
