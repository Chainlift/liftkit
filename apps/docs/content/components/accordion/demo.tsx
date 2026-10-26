import type { ComponentProps } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@chainlift/liftkit";
import { GoldenBox } from "@chainlift/liftkit";
import { StateLayer } from "@chainlift/liftkit";

export default function AccordionDemo(knobs: ComponentProps<typeof Accordion>) {
  return (
    <Accordion {...knobs}>
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
