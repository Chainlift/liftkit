"use client";

import { cn } from "@/lib/cn";
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import styles from "./index.module.css";

function Avatar({ className, ...props }: AvatarPrimitive.Root.Props) {
  return <AvatarPrimitive.Root data-slot="avatar" className={cn("", styles.Root, className)} {...props} />;
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return <AvatarPrimitive.Image data-slot="avatar-image" className={cn("", styles.Image, className)} {...props} />;
}

function AvatarFallback({ className, ...props }: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback data-slot="avatar-fallback" className={cn("", styles.Fallback, className)} {...props} />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
