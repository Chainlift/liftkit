import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/liftkit/component-definitions";
import { GoldenBox } from "@/liftkit/component-definitions";
import { StateLayer } from "@/liftkit/component-definitions/state-layer/state-layer";

export function ExampleAccordion({ multiple = false }: { multiple?: boolean }) {
  return (
    <Accordion multiple={multiple} className="w-6xl">
      <AccordionItem>
        <AccordionTrigger>
          <GoldenBox scaleFactor="body" opticalCorrection="all">
            <span className="body font-500">What is Base UI?</span>
          </GoldenBox>
          <StateLayer />
        </AccordionTrigger>
        <AccordionContent className="p-0">
          <GoldenBox scaleFactor="body" noPadding="top">
            Base UI is a library of high-quality unstyled React components for design systems and web apps.
          </GoldenBox>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>
          <GoldenBox scaleFactor="body" opticalCorrection="all">
            <span className="body font-500">How do I get started?</span>
          </GoldenBox>
          <StateLayer />
        </AccordionTrigger>
        <AccordionContent className="p-0">
          <GoldenBox scaleFactor="body" noPadding="top">
            Head to the "Quick start" guide in the docs. If you've used unstyled libraries before, you'll feel at home.
          </GoldenBox>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>
          <GoldenBox scaleFactor="body" opticalCorrection="all">
            <span className="body font-500"> Can I use it for my project?</span>
          </GoldenBox>
          <StateLayer />
        </AccordionTrigger>
        <AccordionContent className="p-0">
          <GoldenBox scaleFactor="body" noPadding="top">
            Of course! Base UI is free and open source.
          </GoldenBox>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
