// dialog.tsx
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/registry/nextjs/lib/utilities";
import "./dialog.css";

const Dialog = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Root>,
  React.ComponentProps<typeof DialogPrimitive.Root>
>(function Dialog({ ...props }, ref) {
  return <DialogPrimitive.Root data-slot="dialog-root" {...props} />;
});

const DialogTrigger = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Trigger>,
  React.ComponentProps<typeof DialogPrimitive.Trigger>
>(function DialogTrigger({ className, ...props }, ref) {
  return (
    <DialogPrimitive.Trigger ref={ref} data-slot="dialog-trigger" className={cn("placeholder", className)} {...props} />
  );
});

const DialogPortal = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Portal>,
  React.ComponentProps<typeof DialogPrimitive.Portal>
>(function DialogPortal({ ...props }, ref) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
});

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentProps<typeof DialogPrimitive.Overlay>
>(function DialogOverlay({ className, ...props }, ref) {
  return (
    <DialogPrimitive.Overlay ref={ref} data-slot="dialog-overlay" className={cn("placeholder", className)} {...props} />
  );
});

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentProps<typeof DialogPrimitive.Content>
>(function DialogContent({ className, ...props }, ref) {
  return (
    <DialogPrimitive.Content ref={ref} data-slot="dialog-content" className={cn("placeholder", className)} {...props} />
  );
});

const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentProps<typeof DialogPrimitive.Title>
>(function DialogTitle({ className, ...props }, ref) {
  return (
    <DialogPrimitive.Title ref={ref} data-slot="dialog-title" className={cn("placeholder", className)} {...props} />
  );
});

const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentProps<typeof DialogPrimitive.Description>
>(function DialogDescription({ className, ...props }, ref) {
  return (
    <DialogPrimitive.Description
      ref={ref}
      data-slot="dialog-description"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const DialogClose = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Close>,
  React.ComponentProps<typeof DialogPrimitive.Close>
>(function DialogClose({ className, ...props }, ref) {
  return (
    <DialogPrimitive.Close ref={ref} data-slot="dialog-close" className={cn("placeholder", className)} {...props} />
  );
});

const DialogHeader = React.forwardRef<React.ComponentRef<"div">, React.ComponentProps<"div">>(function DialogHeader(
  { className, ...props },
  ref
) {
  return <div ref={ref} data-slot="dialog-header" className={cn(className)} {...props} />;
});

const DialogFooter = React.forwardRef<React.ComponentRef<"div">, React.ComponentProps<"div">>(function DialogFooter(
  { className, ...props },
  ref
) {
  return <div ref={ref} data-slot="dialog-footer" className={cn(className)} {...props} />;
});

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
