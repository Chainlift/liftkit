"use client";

import { cn } from "@/lib/cn";
import { Toast as ToastPrimitive } from "@base-ui/react/toast";
import "./toast.css";

function ToastProvider({ ...props }: ToastPrimitive.Provider.Props) {
  return <ToastPrimitive.Provider {...props} />;
}

function ToastPortal({ ...props }: ToastPrimitive.Portal.Props) {
  return <ToastPrimitive.Portal {...props} />;
}

function ToastViewport({ className, ...props }: ToastPrimitive.Viewport.Props) {
  return <ToastPrimitive.Viewport data-slot="toast-viewport" className={cn("", "Viewport", className)} {...props} />;
}

function Toast({ className, ...props }: ToastPrimitive.Root.Props) {
  return <ToastPrimitive.Root data-slot="toast" className={cn("", "Toast", className)} {...props} />;
}

function ToastContent({ className, ...props }: ToastPrimitive.Content.Props) {
  return <ToastPrimitive.Content data-slot="toast-content" className={cn("", "Content", className)} {...props} />;
}

function ToastTitle({ className, ...props }: ToastPrimitive.Title.Props) {
  return <ToastPrimitive.Title data-slot="toast-title" className={cn("", "Title", className)} {...props} />;
}

function ToastDescription({ className, ...props }: ToastPrimitive.Description.Props) {
  return (
    <ToastPrimitive.Description data-slot="toast-description" className={cn("", "Description", className)} {...props} />
  );
}

function ToastClose({ className, ...props }: ToastPrimitive.Close.Props) {
  return <ToastPrimitive.Close data-slot="toast-close" className={cn("", "Close", className)} {...props} />;
}

const useToastManager = ToastPrimitive.useToastManager;

export {
  ToastProvider,
  ToastPortal,
  ToastViewport,
  Toast,
  ToastContent,
  ToastTitle,
  ToastDescription,
  ToastClose,
  useToastManager,
};
