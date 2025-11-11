// one-time-password-field.tsx
"use client";

import * as React from "react";
import * as OTPFieldPrimitive from "@radix-ui/react-one-time-password-field";
import { cn } from "@/registry/nextjs/lib/utilities";
import "./one-time-password-field.css";
import { StateLayer } from "@/registry/nextjs/components/state-layer";
import { LkStateLayerProps } from "@/registry/nextjs/components/state-layer";
const OneTimePasswordField = React.forwardRef<
  React.ComponentRef<typeof OTPFieldPrimitive.Root>,
  React.ComponentProps<typeof OTPFieldPrimitive.Root>
>(function OneTimePasswordField({ className, ...props }, ref) {
  return (
    <OTPFieldPrimitive.Root
      ref={ref}
      data-slot="one-time-password-field-root"
      className={cn("placeholder", className)}
      {...props}
    ></OTPFieldPrimitive.Root>
  );
});

const OneTimePasswordFieldInput = React.forwardRef<
  React.ComponentRef<typeof OTPFieldPrimitive.Input>,
  React.ComponentProps<typeof OTPFieldPrimitive.Input>
>(function OneTimePasswordFieldInput({ className, ...props }, ref) {
  return (
    <OTPFieldPrimitive.Input
      ref={ref}
      data-slot="one-time-password-field-input"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const OneTimePasswordFieldHiddenInput = React.forwardRef<
  React.ComponentRef<typeof OTPFieldPrimitive.HiddenInput>,
  React.ComponentProps<typeof OTPFieldPrimitive.HiddenInput>
>(function OneTimePasswordFieldHiddenInput({ className, ...props }, ref) {
  return (
    <OTPFieldPrimitive.HiddenInput
      ref={ref}
      data-slot="one-time-password-field-hidden-input"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

export { OneTimePasswordField, OneTimePasswordFieldInput, OneTimePasswordFieldHiddenInput };
