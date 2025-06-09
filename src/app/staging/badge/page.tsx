import React from "react";
import NavBar from "@/registry/nextjs/components/navbar";
import Button from "@/registry/nextjs/components/button";
import Section from "@/registry/nextjs/components/section";
import Heading from "@/registry/nextjs/components/heading";
import Grid from "@/registry/nextjs/components/grid";
import Row from "@/registry/nextjs/components/row";
import Column from "@/registry/nextjs/components/column";
import Container from "@/registry/nextjs/components/containers";
export default function Staging() {
  const buttonColors: LkColorWithOnToken[] = [
    "primary",
    "secondary",
    "tertiary",
    "error",
    "warning",
    "info",
    "success",
    "primarycontainer",
    "secondarycontainer",
    "tertiarycontainer",
    "errorcontainer",
    "warningcontainer",
    "infocontainer",
    "successcontainer",
    "surface",
    "surfacecontainerlowest",
    "surfacecontainerlow",
    "surfacecontainerhigh",
    "surfacecontainerhighest",
    "surfacevariant",
    "inversesurface",
    "background",
  ];

  const buttonVariants = ["fill", "outline", "text"];

  return (
    <div>
      <Section>
        <Container>
          <Heading tag="h1" fontClass="display1-bold" className="text-align-center">
            Hello world!
          </Heading>
        </Container>
      </Section>
    </div>
  );
}
