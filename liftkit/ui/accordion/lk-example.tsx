import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";

export default function ExampleAccordion({ multiple = false }: { multiple?: boolean }) {
  return (
    <Accordion multiple={multiple}>
      <AccordionItem>
        <AccordionTrigger>What is Base UI?</AccordionTrigger>
        <AccordionContent>
          Base UI is a library of high-quality unstyled React components for design systems and web apps.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>How do I get started?</AccordionTrigger>
        <AccordionContent>
          Head to the "Quick start" guide in the docs. If you've used unstyled libraries before, you'll feel at home.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>Can I use it for my project?</AccordionTrigger>
        <AccordionContent>Of course! Base UI is free and open source.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
