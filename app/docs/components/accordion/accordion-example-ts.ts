import { getInitialKnobs } from "@/app/docs/lib/getInitialKnobs";

export function Accordion_Example_TS(knobs: Record<string, any> = {}) {
  const initialKnobValues = getInitialKnobs("Accordion"); //knob defaults loaded statically from manifest

  const dynamicKnobsLength = Object.entries(knobs).length;

  const propsString = Object.entries(dynamicKnobsLength > 0 ? knobs : initialKnobValues) //load default knobs by default, replace with dynamic
    .filter(([_, v]) => v !== undefined && v !== "" && v !== false)
    .map(([key, value]) => {
      if (typeof value === "string") return `${key}="${value}"`;
      if (typeof value === "boolean") return key; // boolean true → just the prop name
      return `${key}={${JSON.stringify(value)}}`;
    })
    .join(" ");

  const openTag = propsString ? `<Accordion ${propsString}>` : `<Accordion>`;

  return `import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";

/* STATIC SERVER */
export default function ExampleAccordion() {
  return (
    ${openTag}
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
`;
}
