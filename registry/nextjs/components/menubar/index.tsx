// menubar.tsx
"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { cn } from "@/registry/nextjs/lib/utilities"
import "./menubar.css"

const Menubar = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Root>,
  React.ComponentProps<typeof MenubarPrimitive.Root>
>(function Menubar({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Root
      ref={ref}
      data-slot="menubar-root"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const MenubarMenu = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Menu>,
  React.ComponentProps<typeof MenubarPrimitive.Menu>
>(function MenubarMenu({...props }, ref) {
  return (
    <MenubarPrimitive.Menu
 
      data-slot="menubar-menu"

      {...props}
    />
  )
})

const MenubarTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentProps<typeof MenubarPrimitive.Trigger>
>(function MenubarTrigger({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Trigger
      ref={ref}
      data-slot="menubar-trigger"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

// No className or ref on Portal
function MenubarPortal(props: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return (
    <MenubarPrimitive.Portal
      data-slot="menubar-portal"
      {...props}
    />
  )
}

const MenubarContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Content>,
  React.ComponentProps<typeof MenubarPrimitive.Content>
>(function MenubarContent({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Content
      ref={ref}
      data-slot="menubar-content"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const MenubarArrow = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Arrow>,
  React.ComponentProps<typeof MenubarPrimitive.Arrow>
>(function MenubarArrow({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Arrow
      ref={ref}
      data-slot="menubar-arrow"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const MenubarItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Item>,
  React.ComponentProps<typeof MenubarPrimitive.Item>
>(function MenubarItem({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Item
      ref={ref}
      data-slot="menubar-item"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const MenubarGroup = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Group>,
  React.ComponentProps<typeof MenubarPrimitive.Group>
>(function MenubarGroup({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Group
      ref={ref}
      data-slot="menubar-group"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const MenubarLabel = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Label>,
  React.ComponentProps<typeof MenubarPrimitive.Label>
>(function MenubarLabel({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Label
      ref={ref}
      data-slot="menubar-label"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const MenubarCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>
>(function MenubarCheckboxItem({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      data-slot="menubar-checkbox-item"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const MenubarRadioGroup = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.RadioGroup>,
  React.ComponentProps<typeof MenubarPrimitive.RadioGroup>
>(function MenubarRadioGroup({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.RadioGroup
      ref={ref}
      data-slot="menubar-radio-group"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const MenubarRadioItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentProps<typeof MenubarPrimitive.RadioItem>
>(function MenubarRadioItem({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.RadioItem
      ref={ref}
      data-slot="menubar-radio-item"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const MenubarItemIndicator = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.ItemIndicator>,
  React.ComponentProps<typeof MenubarPrimitive.ItemIndicator>
>(function MenubarItemIndicator({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.ItemIndicator
      ref={ref}
      data-slot="menubar-item-indicator"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const MenubarSeparator = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Separator>,
  React.ComponentProps<typeof MenubarPrimitive.Separator>
>(function MenubarSeparator({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Separator
      ref={ref}
      data-slot="menubar-separator"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const MenubarSub = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Sub>,
  React.ComponentProps<typeof MenubarPrimitive.Sub>
>(function MenubarSub({ ...props }, ref) {
  return (
    <MenubarPrimitive.Sub
      data-slot="menubar-sub"
      {...props}
    />
  )
})

const MenubarSubTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentProps<typeof MenubarPrimitive.SubTrigger>
>(function MenubarSubTrigger({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      data-slot="menubar-sub-trigger"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const MenubarSubContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentProps<typeof MenubarPrimitive.SubContent>
>(function MenubarSubContent({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.SubContent
      ref={ref}
      data-slot="menubar-sub-content"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarPortal,
  MenubarContent,
  MenubarArrow,
  MenubarItem,
  MenubarGroup,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarItemIndicator,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
