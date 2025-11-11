// toast.tsx
"use client";

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@/registry/nextjs/lib/utilities";
import "./toast.css";
import { Button,  LkButtonProps } from "@/registry/nextjs/components/button";

const ToastProvider = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Provider>,
  React.ComponentProps<typeof ToastPrimitive.Provider>
>(function ToastProvider({ ...props }, ref) {
  return <ToastPrimitive.Provider data-slot="toast-provider" {...props} />;
});

const Toast = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Root>,
  React.ComponentProps<typeof ToastPrimitive.Root>
>(function Toast({ className, ...props }, ref) {
  return <ToastPrimitive.Root ref={ref} data-slot="toast-root" className={cn("placeholder", className)} {...props} />;
});

const ToastTitle = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Title>,
  React.ComponentProps<typeof ToastPrimitive.Title>
>(function ToastTitle({ className, ...props }, ref) {
  return <ToastPrimitive.Title ref={ref} data-slot="toast-title" className={cn("placeholder", className)} {...props} />;
});

const ToastDescription = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Description>,
  React.ComponentProps<typeof ToastPrimitive.Description>
>(function ToastDescription({ className, ...props }, ref) {
  return (
    <ToastPrimitive.Description
      ref={ref}
      data-slot="toast-description"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const ToastButton = React.forwardRef<React.ComponentRef<typeof Button>, React.ComponentProps<typeof Button>>(
  (props, forwardedRef) => <Button variant="fill" {...props} ref={forwardedRef} />
);

const ToastAction = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Action>,
  React.ComponentProps<typeof ToastPrimitive.Action> & {
    buttonProps?: LkButtonProps;
  }
>(function ToastAction({ className, children, buttonProps = {}, ...props }, ref) {
  const { variant = "fill", color = "inversesurface", fontClass = "caption", ...restButtonProps } = buttonProps;

  return (
    <ToastPrimitive.Action
      ref={ref}
      data-slot="toast-action"
      className={cn("placeholder", className)}
      {...props}
      asChild
    >
      <Button variant={variant} color={color as any} fontClass={fontClass} {...restButtonProps}>
        {children}
      </Button>
    </ToastPrimitive.Action>
  );
});

const ToastClose = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Close>,
  React.ComponentProps<typeof ToastPrimitive.Close> & {
    buttonProps?: LkButtonProps;
  }
>(function ToastClose({ className, children, buttonProps = {}, ...props }, ref) {
  const { variant = "outline", color = "inversesurface", fontClass = "caption", ...restButtonProps } = buttonProps;

  return (
    <ToastPrimitive.Close
      ref={ref}
      data-slot="toast-close"
      className={cn("placeholder", className)}
      {...props}
      asChild
    >
      <Button variant={variant} color={color as any} fontClass={fontClass} {...restButtonProps}>
        {children}
      </Button>
    </ToastPrimitive.Close>
  );
});

const ToastViewport = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Viewport>,
  React.ComponentProps<typeof ToastPrimitive.Viewport>
>(function ToastViewport({ className, ...props }, ref) {
  return (
    <ToastPrimitive.Viewport ref={ref} data-slot="toast-viewport" className={cn("placeholder", className)} {...props} />
  );
});

export { ToastProvider, Toast, ToastTitle, ToastDescription, ToastAction, ToastClose, ToastViewport };
