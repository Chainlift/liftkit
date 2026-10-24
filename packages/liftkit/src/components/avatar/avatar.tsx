"use client";

import { cn } from "../../lib/cn";
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import "../../css/components/lk-avatar.css";

function Avatar({ className, ...props }: AvatarPrimitive.Root.Props) {
  return <AvatarPrimitive.Root data-slot="avatar" className={cn(className)} {...props} />;
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return <AvatarPrimitive.Image data-slot="avatar-image" className={cn(className)} {...props} />;
}

function AvatarFallback({ className, ...props }: AvatarPrimitive.Fallback.Props) {
  return <AvatarPrimitive.Fallback data-slot="avatar-fallback" className={cn(className)} {...props} />;
}

export { Avatar, AvatarImage, AvatarFallback };
