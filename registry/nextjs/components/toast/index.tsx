// toast.tsx
"use client"

import * as React from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"
import { cn } from "@/registry/nextjs/lib/utilities"
import "./toast.css"

const ToastProvider = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Provider>,
  React.ComponentProps<typeof ToastPrimitive.Provider>
>(function ToastProvider({ ...props }, ref) {
  return (
    <ToastPrimitive.Provider
      data-slot="toast-provider"
      {...props}
    />
  )
})

const Toast = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Root>,
  React.ComponentProps<typeof ToastPrimitive.Root>
>(function Toast({ className, ...props }, ref) {
  return (
    <ToastPrimitive.Root
      ref={ref}
      data-slot="toast-root"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const ToastTitle = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Title>,
  React.ComponentProps<typeof ToastPrimitive.Title>
>(function ToastTitle({ className, ...props }, ref) {
  return (
    <ToastPrimitive.Title
      ref={ref}
      data-slot="toast-title"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

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
  )
})

const ToastAction = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Action>,
  React.ComponentProps<typeof ToastPrimitive.Action>
>(function ToastAction({ className, ...props }, ref) {
  return (
    <ToastPrimitive.Action
      ref={ref}
      data-slot="toast-action"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const ToastClose = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Close>,
  React.ComponentProps<typeof ToastPrimitive.Close>
>(function ToastClose({ className, ...props }, ref) {
  return (
    <ToastPrimitive.Close
      ref={ref}
      data-slot="toast-close"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const ToastViewport = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Viewport>,
  React.ComponentProps<typeof ToastPrimitive.Viewport>
>(function ToastViewport({ className, ...props }, ref) {
  return (
    <ToastPrimitive.Viewport
      ref={ref}
      data-slot="toast-viewport"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

export {
  ToastProvider,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastViewport,
}
