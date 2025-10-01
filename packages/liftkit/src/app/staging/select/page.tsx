"use client";
import Column from "@/registry/nextjs/components/column";
import Heading from "@/registry/nextjs/components/heading";
import Section from "@/registry/nextjs/components/section";
import Container from "@/registry/nextjs/components/container";
import Button from "@/registry/nextjs/components/button";
import { Select, SelectTrigger, SelectMenu, SelectOption } from "@/registry/nextjs/components/select";
import React from "react";

export default function SelectStaging() {
  const fontClasses: LkFontClass[] = [
    "display1",
    "display2",
    "title1",
    "title2",
    "title3",
    "heading",
    "subheading",
    "body",
    "callout",
    "label",
    "caption",
    "capline",
  ];

  const [selectedValue, setSelectedValue] = React.useState<string>("Please choose an option");
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedValue(event.target.value);
  }

  return (
    <>
      <Section padding="md">
        <Container>
          <Heading tag="h2" className="mb-md">
            Select Component Tests
          </Heading>
        </Container>
        <Column>
          {selectedValue}
          {fontClasses.map((fontClass) => (
            <div key={fontClass}>
              <h2 className="subheading mono mb-xs">
                fontClass=<strong className="color-primary">{fontClass}</strong>
              </h2>

              <Select
                options={[
                  { label: "Option 1", value: "opt1" },
                  { label: "Option 2", value: "opt2" },
                  { label: "Option 3", value: "opt3" },
                ]}
                value={selectedValue}
                onChange={handleChange}
                name={fontClass}
              >
                <SelectTrigger>
                  <Button label="Select"></Button>
                </SelectTrigger>
                <SelectMenu
                  cardProps={{ scaleFactor: fontClass, material: "glass", materialProps: { thickness: "normal" } }}
                >
                  <SelectOption value="opt1">Option 1</SelectOption>
                  <SelectOption value="opt2">Option 2</SelectOption>
                  <SelectOption value="opt3">Option 3</SelectOption>
                </SelectMenu>
              </Select>
            </div>
          ))}
        </Column>
      </Section>
    </>
  );
}
