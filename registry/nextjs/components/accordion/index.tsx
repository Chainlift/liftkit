// accordion.tsx
"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/registry/nextjs/lib/utilities";
import "./accordion.css";
import Row from "@/registry/nextjs/components/row";
import Icon from "@/registry/nextjs/components/icon";
import StateLayer from "@/registry/nextjs/components/state-layer";

const Accordion = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Root>,
  React.ComponentProps<typeof AccordionPrimitive.Root>
>(function Accordion({ className, ...props }, ref) {
  return (
    <AccordionPrimitive.Root ref={ref} data-slot="accordion-root" className={cn("placeholder", className)} {...props} />
  );
});

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentProps<typeof AccordionPrimitive.Item>
>(function AccordionItem({ className, ...props }, ref) {
  return (
    <AccordionPrimitive.Item ref={ref} data-slot="accordion-item" className={cn("placeholder", className)} {...props} />
  );
});

const AccordionHeader = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Header>,
  React.ComponentProps<typeof AccordionPrimitive.Header>
>(function AccordionHeader({ className, ...props }, ref) {
  return (
    <AccordionPrimitive.Header
      ref={ref}
      data-slot="accordion-header"
      className={cn("placeholder", className)}
      {...props}
    ></AccordionPrimitive.Header>
  );
});

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentProps<typeof AccordionPrimitive.Trigger>
>(function AccordionTrigger({ className, ...props }, ref) {
  return (
    <AccordionPrimitive.Trigger
      ref={ref}
      data-slot="accordion-trigger"
      className={cn("placeholder", className)}
      {...props}
    ></AccordionPrimitive.Trigger>
  );
});

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentProps<typeof AccordionPrimitive.Content>
>(function AccordionContent({ className, ...props }, ref) {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      data-slot="accordion-content"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

export { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent };
