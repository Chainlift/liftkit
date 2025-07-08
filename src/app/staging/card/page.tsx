import React from "react";

import Section from "@/registry/nextjs/components/section";

import Row from "@/registry/nextjs/components/row";
import Column from "@/registry/nextjs/components/column";
import Container from "@/registry/nextjs/components/container";

import Card from "@/registry/nextjs/components/card";
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

  return (
    <div className="bg-surfacecontainer" style={{ backgroundImage: "url(/testimage.png)" }}>
      <Section padding="md">
        <Container>
          <h1 className="display2-bold mb-md">Card Staging</h1>
          <Row gap="md">
            <Column gap="md">
              {scaleFactors.map((scaleFactor) => (
                <Card key={scaleFactor} scaleFactor={scaleFactor} opticalCorrection="y" className="shadow-2xl">
                  <h2 className={`${scaleFactor}`}>{scaleFactor}</h2>
                  <p className="subheading">Subheading</p>
                  <p className="body mt-sm">
                    Chainlift is a company that makes design kits for programmers. Founded in 2021 by Garrett Mack from
                    his attic in Irvine.
                  </p>
                </Card>
              ))}
            </Column>
            <Column gap="md">
              {scaleFactors.map((scaleFactor) => (
                <Card
                  key={scaleFactor}
                  scaleFactor={scaleFactor}
                  opticalCorrection="y"
                  material="glass"
                  isClickable={true}
                  bgColor="info"
                >
                  <h2 className={`${scaleFactor}`}>{scaleFactor}</h2>
                  <p className="subheading">Subheading</p>
                  <p className="body mt-sm opacity-70">
                    Chainlift is a company that makes design kits for programmers. Founded in 2021 by Garrett Mack from
                    his attic in Irvine.
                  </p>
                </Card>
              ))}
            </Column>
            <Column gap="md">
              {scaleFactors.map((scaleFactor) => (
                <Card
                  key={scaleFactor}
                  scaleFactor={scaleFactor}
                  opticalCorrection="y"
                  variant="outline"
                  isClickable={true}
                >
                  <h2 className={`${scaleFactor}`}>{scaleFactor}</h2>
                  <p className="subheading">Subheading</p>
                  <p className="body mt-sm">
                    Chainlift is a company that makes design kits for programmers. Founded in 2021 by Garrett Mack from
                    his attic in Irvine.
                  </p>
                </Card>
              ))}
            </Column>
          </Row>
        </Container>
      </Section>
    </div>
  );
}
