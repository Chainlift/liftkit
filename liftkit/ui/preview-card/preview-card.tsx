"use client";

import { cn } from "@/lib/cn";
import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import "./lk-preview-card.css";

function PreviewCard({ ...props }: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root data-slot="preview-card" {...props} />;
}

function PreviewCardTrigger({ className, ...props }: PreviewCardPrimitive.Trigger.Props) {
  return <PreviewCardPrimitive.Trigger data-slot="preview-card-trigger" className={cn("", className)} {...props} />;
}

function PreviewCardPortal({ ...props }: PreviewCardPrimitive.Portal.Props) {
  return <PreviewCardPrimitive.Portal {...props} />;
}

function PreviewCardPositioner({ className, ...props }: PreviewCardPrimitive.Positioner.Props) {
  return <PreviewCardPrimitive.Positioner data-slot="preview-card-positioner" className={cn(className)} {...props} />;
}

function PreviewCardPopup({ className, ...props }: PreviewCardPrimitive.Popup.Props) {
  return <PreviewCardPrimitive.Popup data-slot="preview-card-popup" className={cn(className)} {...props} />;
}

function PreviewCardArrow({ className, ...props }: PreviewCardPrimitive.Arrow.Props) {
  return <PreviewCardPrimitive.Arrow data-slot="preview-card-arrow" className={cn(className)} {...props} />;
}

export {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardPopup,
  PreviewCardArrow,
};
