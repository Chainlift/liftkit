// form.tsx
"use client"

import * as React from "react"
import * as FormPrimitive from "@radix-ui/react-form"
import { cn } from "@/registry/nextjs/lib/utilities"
import "./form.css"

const Form = React.forwardRef<
  React.ComponentRef<typeof FormPrimitive.Root>,
  React.ComponentProps<typeof FormPrimitive.Root>
>(function Form({ className, ...props }, ref) {
  return (
    <FormPrimitive.Root
      ref={ref}
      data-slot="form-root"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const FormField = React.forwardRef<
  React.ComponentRef<typeof FormPrimitive.Field>,
  React.ComponentProps<typeof FormPrimitive.Field>
>(function FormField({ className, ...props }, ref) {
  return (
    <FormPrimitive.Field
      ref={ref}
      data-slot="form-field"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const FormLabel = React.forwardRef<
  React.ComponentRef<typeof FormPrimitive.Label>,
  React.ComponentProps<typeof FormPrimitive.Label>
>(function FormLabel({ className, ...props }, ref) {
  return (
    <FormPrimitive.Label
      ref={ref}
      data-slot="form-label"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const FormControl = React.forwardRef<
  React.ComponentRef<typeof FormPrimitive.Control>,
  React.ComponentProps<typeof FormPrimitive.Control>
>(function FormControl({ className, ...props }, ref) {
  return (
    <FormPrimitive.Control
      ref={ref}
      data-slot="form-control"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const FormMessage = React.forwardRef<
  React.ComponentRef<typeof FormPrimitive.Message>,
  React.ComponentProps<typeof FormPrimitive.Message>
>(function FormMessage({ className, ...props }, ref) {
  return (
    <FormPrimitive.Message
      ref={ref}
      data-slot="form-message"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const FormValidityState = React.forwardRef<
  React.ComponentRef<typeof FormPrimitive.ValidityState>,
  React.ComponentProps<typeof FormPrimitive.ValidityState>
>(function FormValidityState({  ...props }, ref) {
  return (
    <FormPrimitive.ValidityState
      data-slot="form-validity-state"
      {...props}
    />
  )
})

const FormSubmit = React.forwardRef<
  React.ComponentRef<typeof FormPrimitive.Submit>,
  React.ComponentProps<typeof FormPrimitive.Submit>
>(function FormSubmit({ className, ...props }, ref) {
  return (
    <FormPrimitive.Submit
      ref={ref}
      data-slot="form-submit"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

export {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormValidityState,
  FormSubmit,
}
