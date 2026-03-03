"use client";

import { cn } from "@/lib/cn";
import { Toast as ToastPrimitive } from "@base-ui/react/toast";
import "@/liftkit/component-css/lk-toast.css";

function ToastProvider({ ...props }: ToastPrimitive.Provider.Props) {
  return <ToastPrimitive.Provider {...props} />;
}

function ToastPortal({ ...props }: ToastPrimitive.Portal.Props) {
  return <ToastPrimitive.Portal {...props} />;
}

function ToastViewport({ className, ...props }: ToastPrimitive.Viewport.Props) {
  return <ToastPrimitive.Viewport data-slot="toast-viewport" className={cn(className)} {...props} />;
}

function Toast({ className, ...props }: ToastPrimitive.Root.Props) {
  return <ToastPrimitive.Root data-slot="toast" className={cn(className)} {...props} />;
}

function ToastContent({ className, ...props }: ToastPrimitive.Content.Props) {
  return <ToastPrimitive.Content data-slot="toast-content" className={cn(className)} {...props} />;
}

function ToastTitle({ className, ...props }: ToastPrimitive.Title.Props) {
  return <ToastPrimitive.Title data-slot="toast-title" className={cn(className)} {...props} />;
}

function ToastDescription({ className, ...props }: ToastPrimitive.Description.Props) {
  return <ToastPrimitive.Description data-slot="toast-description" className={cn(className)} {...props} />;
}

function ToastClose({ className, ...props }: ToastPrimitive.Close.Props) {
  return <ToastPrimitive.Close data-slot="toast-close" className={cn(className)} {...props} />;
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
