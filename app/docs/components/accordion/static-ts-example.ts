import { componentManifest } from "@/app/docs/lib/component-manifest";

function getInitialKnobs(componentName: string) {
  const manifest = componentManifest[componentName.toLowerCase() as keyof typeof componentManifest];

  const initialKnobVals: Record<string, any> = {};

  if (manifest.knobs) {
    for (const [key, control] of Object.entries(manifest.knobs)) {
      initialKnobVals[key] = control.default;
    }
  }

  return initialKnobVals;
}

export function Accordion_Example_TS_Static() {
  const initialKnobValues = getInitialKnobs("Accordion");

  const propsString = Object.entries(initialKnobValues)
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

