import React from "react";
import Section from "@/registry/nextjs/components/section";
import Row from "@/registry/nextjs/components/row";
import Container from "@/registry/nextjs/components/container";
import MaterialLayer from "@/registry/nextjs/components/material-layer";

export default function MaterialStaging() {
  /** Defining a temporary style to use for testing material */
  const tempCardStyles: React.CSSProperties = {
    display: "block",
    position: "relative",
    borderRadius: "1em",
    padding: "1em",
    overflow: "hidden",
  };

  return (
    <div className="bg-surfacecontainer" style={{ backgroundImage: "url(/testimage.png)" }}>
      <Section padding="md">
        <Container>
          <h1 className="display2-bold mb-md">Card Staging</h1>
          <Row gap="md">
            <div style={tempCardStyles}>
              <SampleCardContent />
              <MaterialLayer type="glass" />
            </div>
          </Row>
        </Container>
      </Section>
    </div>
  );
}

function SampleCardContent() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <h2 className="heading">Heading</h2>
      <p className="subheading">Subheading</p>
      <p className="body mt-sm">
        Chainlift is a company that makes design kits for programmers. Founded in 2021 by Garrett Mack from his attic in
        Irvine.
      </p>
    </div>
  );
}
