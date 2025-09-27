// select.tsx
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { cn } from "@/registry/nextjs/lib/utilities"
import "./select.css"

const Select = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Root>,
  React.ComponentProps<typeof SelectPrimitive.Root>
>(function Select({...props }, ref) {
  return (
    <SelectPrimitive.Root
      data-slot="select-root"
      {...props}
    />
  )
})

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentProps<typeof SelectPrimitive.Trigger>
>(function SelectTrigger({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      data-slot="select-trigger"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const SelectValue = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Value>,
  React.ComponentProps<typeof SelectPrimitive.Value>
>(function SelectValue({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Value
      ref={ref}
      data-slot="select-value"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const SelectIcon = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Icon>,
  React.ComponentProps<typeof SelectPrimitive.Icon>
>(function SelectIcon({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Icon
      ref={ref}
      data-slot="select-icon"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

// No className or ref on Portal
function SelectPortal(props: React.ComponentProps<typeof SelectPrimitive.Portal>) {
  return (
    <SelectPrimitive.Portal
      data-slot="select-portal"
      {...props}
    />
  )
}

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentProps<typeof SelectPrimitive.Content>
>(function SelectContent({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Content
      ref={ref}
      data-slot="select-content"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const SelectScrollUpButton = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>
>(function SelectScrollUpButton({ className, ...props }, ref) {
  return (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      data-slot="select-scroll-up-button"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const SelectScrollDownButton = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>
>(function SelectScrollDownButton({ className, ...props }, ref) {
  return (
    <SelectPrimitive.ScrollDownButton
      ref={ref}
      data-slot="select-scroll-down-button"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const SelectViewport = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Viewport>,
  React.ComponentProps<typeof SelectPrimitive.Viewport>
>(function SelectViewport({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Viewport
      ref={ref}
      data-slot="select-viewport"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const SelectGroup = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Group>,
  React.ComponentProps<typeof SelectPrimitive.Group>
>(function SelectGroup({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Group
      ref={ref}
      data-slot="select-group"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const SelectLabel = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Label>,
  React.ComponentProps<typeof SelectPrimitive.Label>
>(function SelectLabel({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Label
      ref={ref}
      data-slot="select-label"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentProps<typeof SelectPrimitive.Item>
>(function SelectItem({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Item
      ref={ref}
      data-slot="select-item"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const SelectItemIndicator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ItemIndicator>,
  React.ComponentProps<typeof SelectPrimitive.ItemIndicator>
>(function SelectItemIndicator({ className, ...props }, ref) {
  return (
    <SelectPrimitive.ItemIndicator
      ref={ref}
      data-slot="select-item-indicator"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentProps<typeof SelectPrimitive.Separator>
>(function SelectSeparator({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Separator
      ref={ref}
      data-slot="select-separator"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const SelectViewportContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Viewport>,
  React.ComponentProps<typeof SelectPrimitive.Viewport>
>(function SelectViewportContent({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Viewport
      ref={ref}
      data-slot="select-viewport"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectViewport,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectItemIndicator,
  SelectSeparator,
  SelectViewportContent,
}
