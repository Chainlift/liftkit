"use client";

import { cn } from "@/lib/cn";
import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import "@/liftkit/component-css/lk-switch.css";

function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return <SwitchPrimitive.Root data-slot="switch" className={cn(className)} {...props} />;
}

function SwitchThumb({ className, ...props }: SwitchPrimitive.Thumb.Props) {
  return <SwitchPrimitive.Thumb data-slot="switch-thumb" className={cn(className)} {...props} />;
}

export { Switch, SwitchThumb };
