// alert-dialog.tsx
"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/registry/nextjs/lib/utilities";
import "./alert-dialog.css";
import GoldenBox from "@/registry/nextjs/components/golden-box";

const AlertDialog = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Root>,
  React.ComponentProps<typeof AlertDialogPrimitive.Root>
>(function AlertDialog({ ...props }, ref) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog-root" {...props} />;
});

const AlertDialogTrigger = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Trigger>,
  React.ComponentProps<typeof AlertDialogPrimitive.Trigger>
>(function AlertDialogTrigger({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Trigger
      ref={ref}
      data-slot="alert-dialog-trigger"
      className={cn("placeholder", className)}
      {...props}
    ></AlertDialogPrimitive.Trigger>
  );
});

const AlertDialogHeader = React.forwardRef<React.ComponentRef<"div">, React.ComponentProps<"div">>(
  function AlertDialogHeader({ className, ...props }, ref) {
    return <div ref={ref} data-slot="alert-dialog-header" className={cn("placeholder", className)} {...props} />;
  }
);

const AlertDialogFooter = React.forwardRef<React.ComponentRef<"div">, React.ComponentProps<"div">>(
  function AlertDialogFooter({ className, ...props }, ref) {
    return <div ref={ref} data-slot="alert-dialog-footer" className={cn("placeholder", className)} {...props} />;
  }
);

const AlertDialogPortal = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Portal>,
  React.ComponentProps<typeof AlertDialogPrimitive.Portal>
>(function AlertDialogPortal({ ...props }, ref) {
  return (
    <AlertDialogPrimitive.Portal
      data-slot="alert-dialog-portal"
      /* Portal doesn’t accept className; keeping slot for consistency */
      {...props}
    />
  );
});

const AlertDialogOverlay = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentProps<typeof AlertDialogPrimitive.Overlay>
>(function AlertDialogOverlay({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Overlay
      ref={ref}
      data-slot="alert-dialog-overlay"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const AlertDialogContent = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentProps<typeof AlertDialogPrimitive.Content> & {
    scaleFactor?: LkFontClass;
    opticalCorrection?: "top" | "left" | "right" | "bottom" | "x" | "y" | "all" | "none";
  }
>(function AlertDialogContent({ scaleFactor = "body", opticalCorrection = "y", className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Content ref={ref} data-slot="alert-dialog-content" className={cn(className)} {...props}>
      <GoldenBox scaleFactor={scaleFactor} opticalCorrection={opticalCorrection}>
        {props.children}
      </GoldenBox>
    </AlertDialogPrimitive.Content>
  );
});

const AlertDialogCancel = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentProps<typeof AlertDialogPrimitive.Cancel>
>(function AlertDialogCancel({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Cancel
      ref={ref}
      data-slot="alert-dialog-cancel"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const AlertDialogAction = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentProps<typeof AlertDialogPrimitive.Action>
>(function AlertDialogAction({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Action
      ref={ref}
      data-slot="alert-dialog-action"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const AlertDialogTitle = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentProps<typeof AlertDialogPrimitive.Title>
>(function AlertDialogTitle({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Title
      ref={ref}
      data-slot="alert-dialog-title"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const AlertDialogDescription = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentProps<typeof AlertDialogPrimitive.Description>
>(function AlertDialogDescription({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Description
      ref={ref}
      data-slot="alert-dialog-description"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogFooter,
};
