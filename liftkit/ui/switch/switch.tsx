"use client";

import { cn } from "@/lib/cn";
import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import "./switch.css";

function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return <SwitchPrimitive.Root data-slot="switch" className={cn("", "Switch", className)} {...props} />;
}

function SwitchThumb({ className, ...props }: SwitchPrimitive.Thumb.Props) {
  return <SwitchPrimitive.Thumb data-slot="switch-thumb" className={cn("", "Thumb", className)} {...props} />;
}

export { Switch, SwitchThumb };
