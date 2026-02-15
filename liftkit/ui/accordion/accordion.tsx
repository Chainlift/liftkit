"use client";

import { cn } from "@/lib/cn";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Icon } from "@/liftkit/ui/icon/icon";
import styles from "./accordion.module.css";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return <AccordionPrimitive.Root data-slot="accordion" className={cn("", styles.Accordion, className)} {...props} />;
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("bg-surface", styles.Item, className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className={styles.Header}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn("", styles.Trigger, className)}
        {...props}
      >
        {children}
        <Icon
          name="plus"
          data-slot="accordion-trigger-icon"
          className={cn("", styles.TriggerIcon, className)}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel data-slot="accordion-content" {...props}>
      <div className={cn("", styles.Content, className)}>{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
