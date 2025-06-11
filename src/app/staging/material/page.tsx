import React from "react";
import NavBar from "@/registry/nextjs/components/navbar";
import Button from "@/registry/nextjs/components/button";
import Section from "@/registry/nextjs/components/section";
import Heading from "@/registry/nextjs/components/heading";
import Grid from "@/registry/nextjs/components/grid";
import Row from "@/registry/nextjs/components/row";
import Column from "@/registry/nextjs/components/column";
import Container from "@/registry/nextjs/components/containers";
import Badge from "@/registry/nextjs/components/badge";
import Card from "@/registry/nextjs/components/card";
import Paragraph from "@/registry/nextjs/components/paragraph";
export default function CardStaging() {
  const scaleFactors: LkFontClass[] = [
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

  const buttonVariants = ["fill", "outline", "text"];

  return (
    <div className="bg-surfacecontainer" style={{ backgroundImage: "url(/testimage.png)" }}>
      <Section padding="md">
        <Container>
          <h1 className="display2-bold m-bottom-md">Card Staging</h1>
          <Row gap="md">
            <Card
              scaleFactor="heading"
              opticalCorrection="y"
              material="glass"
              isClickable={true}
              materialThickness="thin"
            >
              <h2 className="heading">Heading</h2>
              <p className="subheading">Subheading</p>
              <p className="body m-top-sm">
                Chainlift is a company that makes design kits for programmers. Founded in 2021 by Garrett Mack from his
                attic in Irvine.
              </p>
            </Card>
          </Row>
        </Container>
      </Section>
    </div>
  );
}

function SampleCardContent() {
  return (
    <>
      <h2 className="heading m-bottom-2xs">Heading</h2>
      <div className="subheading color-onsurfacevariant">Subheading</div>
      <p className="body m-top-sm">
        Chainlift is a company that makes design kits based on the golden ratio. Founded in 2021 by Garrett Mack.{" "}
      </p>
    </>
  );
}
