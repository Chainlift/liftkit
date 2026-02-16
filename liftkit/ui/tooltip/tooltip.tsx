"use client";

import { cn } from "@/lib/cn";
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import styles from "./index.module.css";

function TooltipProvider({ ...props }: TooltipPrimitive.Provider.Props) {
  return <TooltipPrimitive.Provider {...props} />;
}

function Tooltip({ ...props }: TooltipPrimitive.Root.Props) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

function TooltipTrigger({ className, ...props }: TooltipPrimitive.Trigger.Props) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" className={cn("", className)} {...props} />;
}

function TooltipPortal({ ...props }: TooltipPrimitive.Portal.Props) {
  return <TooltipPrimitive.Portal {...props} />;
}

function TooltipPositioner({ className, ...props }: TooltipPrimitive.Positioner.Props) {
  return <TooltipPrimitive.Positioner data-slot="tooltip-positioner" className={cn("", className)} {...props} />;
}

function TooltipPopup({ className, ...props }: TooltipPrimitive.Popup.Props) {
  return <TooltipPrimitive.Popup data-slot="tooltip-popup" className={cn("", styles.Popup, className)} {...props} />;
}

function TooltipArrow({ className, ...props }: TooltipPrimitive.Arrow.Props) {
  return <TooltipPrimitive.Arrow data-slot="tooltip-arrow" className={cn("", styles.Arrow, className)} {...props} />;
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipPortal, TooltipPositioner, TooltipPopup, TooltipArrow };
