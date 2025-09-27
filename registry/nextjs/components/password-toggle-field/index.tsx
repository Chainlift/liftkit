// password-toggle-field.tsx
"use client"

import * as React from "react"
import * as PasswordToggleFieldPrimitive from "@radix-ui/react-password-toggle-field"
import { cn } from "@/registry/nextjs/lib/utilities"
import "./password-toggle-field.css"

const PasswordToggleField = React.forwardRef<
  React.ComponentRef<typeof PasswordToggleFieldPrimitive.Root>,
  React.ComponentProps<typeof PasswordToggleFieldPrimitive.Root>
>(function PasswordToggleField({ ...props }, ref) {
  return (
    <PasswordToggleFieldPrimitive.Root
      data-slot="password-toggle-field-root"
      {...props}
    />
  )
})

const PasswordToggleFieldInput = React.forwardRef<
  React.ComponentRef<typeof PasswordToggleFieldPrimitive.Input>,
  React.ComponentProps<typeof PasswordToggleFieldPrimitive.Input>
>(function PasswordToggleFieldInput({ className, ...props }, ref) {
  return (
    <PasswordToggleFieldPrimitive.Input
      ref={ref}
      data-slot="password-toggle-field-input"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const PasswordToggleFieldToggle = React.forwardRef<
  React.ComponentRef<typeof PasswordToggleFieldPrimitive.Toggle>,
  React.ComponentProps<typeof PasswordToggleFieldPrimitive.Toggle>
>(function PasswordToggleFieldToggle({ className, ...props }, ref) {
  return (
    <PasswordToggleFieldPrimitive.Toggle
      ref={ref}
      data-slot="password-toggle-field-toggle"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const PasswordToggleFieldSlot = React.forwardRef<
  React.ComponentRef<typeof PasswordToggleFieldPrimitive.Slot>,
  React.ComponentProps<typeof PasswordToggleFieldPrimitive.Slot>
>(function PasswordToggleFieldSlot({ ...props }, ref) {
  return (
    <PasswordToggleFieldPrimitive.Slot
      data-slot="password-toggle-field-slot"
      {...props}
    />
  )
})

const PasswordToggleFieldIcon = React.forwardRef<
  React.ComponentRef<typeof PasswordToggleFieldPrimitive.Icon>,
  React.ComponentProps<typeof PasswordToggleFieldPrimitive.Icon>
>(function PasswordToggleFieldIcon({ className, ...props }, ref) {
  return (
    <PasswordToggleFieldPrimitive.Icon
      ref={ref}
      data-slot="password-toggle-field-icon"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

export {
  PasswordToggleField,
  PasswordToggleFieldInput,
  PasswordToggleFieldToggle,
  PasswordToggleFieldSlot,
  PasswordToggleFieldIcon,
}
