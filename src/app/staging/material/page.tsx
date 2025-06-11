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

  /** Defining a temporary style to use for testing material */
  const tempCardStyles: React.CSSProperties = {
    display: "block",
    position: "relative",
    borderRadius: "1em",
    padding: "1em",
  };

  return (
    <div className="bg-surfacecontainer" style={{ backgroundImage: "url(/testimage.png)" }}>
      <Section padding="md">
        <Container>
          <h1 className="display2-bold m-bottom-md">Card Staging</h1>
          <Row gap="md">
            <div style={tempCardStyles}>
              <SampleCardContent />
              
            </div>
          </Row>
        </Container>
      </Section>
    </div>
  );
}

function SampleCardContent() {
  return (
    <>
      <h2 className="heading">Heading</h2>
      <p className="subheading">Subheading</p>
      <p className="body m-top-sm">
        Chainlift is a company that makes design kits for programmers. Founded in 2021 by Garrett Mack from his attic in
        Irvine.
      </p>
    </>
  );
}
