// app/accordion/page.tsx

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "@/registry/nextjs/components/accordion";

import "./styles.css";
import { StateLayer } from "@/registry/nextjs/components/state-layer";
import { Row } from "@/registry/nextjs/components/row";
import { Icon } from "@/registry/nextjs/components/icon";
import { Card } from "@/registry/nextjs/components/card";
import { GoldenBox } from "@/registry/nextjs/components/golden-box";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1 className="capline">Accordion Example</h1>

      {/* Single-select accordion (collapsible) */}
      <h2 className="title1-bold mb-md mt-lg">Type: Single</h2>
      <h3 className="title3-bold mb-md">Orientation Vertical</h3>
      <Accordion type="single" collapsible defaultValue="item-1" orientation="vertical">
        <AccordionItem value="item-1">
          <AccordionHeader>
            <AccordionTrigger scaleFactor="body" opticalCorrection="y">
              <p className="body-bold">Section 1</p>
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
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
      <h3 className="title3-bold mb-md mt-xl">Orientation Vertical</h3>
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

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" orientation="vertical">
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger scaleFactor="body" opticalCorrection="y">
            <p className="body-bold">Section 1</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <p className="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
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
  );
}
