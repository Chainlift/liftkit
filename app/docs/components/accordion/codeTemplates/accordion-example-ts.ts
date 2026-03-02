import { getInitialKnobs } from "@/app/docs/lib/codeTemplateUtils";
import { getPropsString } from "@/app/docs/lib/codeTemplateUtils";
import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";

export function Accordion_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Accordion"; //should be the same case as the component tag

  // const initialKnobValues = getInitialKnobs(componentName); //knob defaults loaded statically from manifest
  // const updatedKnobValsLength = Object.entries(updatedKnobVals).length;
  // const propsString = getPropsString(updatedKnobValsLength > 0 ? updatedKnobVals : initialKnobValues);

  // const openTag = propsString ? `<${componentName} ${propsString}>` : `<${componentName}>`;

   const openTag = getOpenTag(componentName, updatedKnobVals)

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
