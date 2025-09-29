// app/accordion/page.tsx

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "@/registry/nextjs/components/accordion";

import "./styles.css";
import StateLayer from "@/registry/nextjs/components/state-layer";
import Row from "@/registry/nextjs/components/row";
import Icon from "@/registry/nextjs/components/icon";
import Card from "@/registry/nextjs/components/card";
import GoldenBox from "@/registry/nextjs/components/golden-box";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Accordion Example</h1>

      {/* Single-select accordion (collapsible) */}
      <h2 className="title2-bold mb-md">Orientation Vertical</h2>
      <Accordion type="single" collapsible defaultValue="item-1" orientation="vertical">
        <AccordionItem value="item-1">
          <AccordionHeader>
            <AccordionTrigger>
              Section 1
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
        
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionHeader>
            <AccordionTrigger>Section 2</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Here is some placeholder content for section 2.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" disabled>
          <AccordionHeader>
            <AccordionTrigger>Disabled Section</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent></AccordionContent>
        </AccordionItem>
      </Accordion>
      <h2 className="title2-bold mb-md">Orientation Horizontal</h2>
      <Accordion type="single" collapsible defaultValue="item-1" orientation="horizontal">
        <AccordionItem value="item-1">
          <AccordionHeader>
            <AccordionTrigger>Section 1</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>This is the content for section 1. You can put any elements here.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionHeader>
            <AccordionTrigger>Section 2</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Here is some placeholder content for section 2.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" disabled>
          <AccordionHeader>
            <AccordionTrigger>Disabled Section</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>This section is disabled and cannot be opened.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <hr style={{ margin: "40px 0" }} />

      {/* Multiple-select accordion */}
      <Accordion type="multiple" defaultValue={["a", "c"]}>
        <AccordionItem value="a">
          <AccordionHeader>
            <AccordionTrigger>Item A</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Details about item A go here.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="b">
          <AccordionHeader>
            <AccordionTrigger>Item B</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Details about item B go here.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="c">
          <AccordionHeader>
            <AccordionTrigger>Item C</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Details about item C go here.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
