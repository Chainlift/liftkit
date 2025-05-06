
"use client"

import Paragraph from "@/liftkit/components/paragraph";
import Text from "@/liftkit/components/text";
import Row from "@/liftkit/components/row";
import styles from "./page.module.css";
import Sticker from "@/liftkit/components/sticker";
import Button from "@/liftkit/components/button";

import TabContent from "@/liftkit/components/tab-content";
import Tabs from "@/liftkit/components/tabs";
import { useState } from "react";

import Badge from "@/liftkit/components/badge";
import Image from "@/liftkit/components/image";
import Section from "@/liftkit/components/section";
import Grid from "@/liftkit/components/grid";

const contentStyle: React.CSSProperties = {
  background: "#e0e0e0",
  border: "1px dashed #888",
  padding: "1rem",
  textAlign: "center",
  fontSize: "14px",
  color: "darkgreen",
};
const aspectRatios = [
  "auto",
  "1/1",
  "2.39/1",
  "2/1",
  "16/9",
  "3/2",
  "4/3",
  "5/4",
  "1/2.39",
  "1/2",
  "9/16",
  "4/5",
];

const sizes = ["3xs", "2xs", "xs", "sm", "lg", "xl", "2xl", "3xl", "4xl"];

const radii = [
  "none",
  "zero",
  "3xs",
  "2xs",
  "xs",
  "sm",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
];


export default function Home() {
  const variants = ["fill", "outline", "text"] as const;
  const buttonSizes = ["sm", "md", "lg"] as const;

  const [activeTab, setActiveTab] = useState(0);
  const tabLabels = ["Home", "Profile", "Settings"];
  
  return (
    <div className={styles.page}>
      <Grid columns={2} gap="md">
        <div style={{ background: "red" }}>Item 1</div>
        <div style={{ background: "blue" }}>Item 2</div>
      </Grid>

      <Grid columns={3} gap="sm" autoResponsive>
        <div style={{ background: "green" }}>Responsive 1</div>
        <div style={{ background: "purple" }}>Responsive 2</div>
        <div style={{ background: "orange" }}>Responsive 3</div>
      </Grid>

      <Grid columns={4} gap="lg" autoResponsive data-lk-grid-minmax="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{ background: "#999" }}>{`Item ${i + 1}`}</div>
        ))}
      </Grid>

      <Text fontClass="display1" tag="footer" color="primary">
        Hello World
      </Text>


    <Tabs tabLinks={tabLabels} activeTab={activeTab} setActiveTab={setActiveTab}>
      {tabLabels.map((label, index) => (
        <TabContent key={index}>
          <p>This is the content for {label}</p>
        </TabContent>
      ))}
    </Tabs>

      <Text fontClass="display1" tag="footer" color="primary">
        Hello World
      </Text>

      <Paragraph fontClass="title1">
        ancient times cats were not merely companions—they were revered as
        divine beings. Cultures like ancient Egypt honored cats as sacred
        creatures, embodying grace, mystery, and spiritual power. The goddess
        Bastet, depicted with the head of a lioness or domestic cat, symbolized
        protection, fertility, and the nurturing aspects of home life. Even
        beyond Egypt, the enigmatic nature of cats—their watchful eyes, silent
        movements, and uncanny independence—has inspired a timeless belief that
        they walk between worlds. To this day, many still joke (or suspect) that
        cats aren&apos;t just pets, but deities in disguise, quietly ruling
        their human households with regal indifference.
      </Paragraph>
      <div>
        <div style={{ padding: "2rem" }}>
          <h2>Row with gap, justifyContent, alignItems</h2>
          <Row gap="lg" justify-content="space-around" align-items="center">
            <div style={{ background: "#ddd", padding: "1rem" }}>Item 1</div>
            <div style={{ background: "#bbb", padding: "1rem" }}>Item 2</div>
            <div style={{ background: "#999", padding: "1rem" }}>Item 3</div>
          </Row>

          <h2 style={{ marginTop: "2rem" }}>Row with wrapChildren</h2>
          <Row gap="lg" wrap-children="true" style={{ maxWidth: "300px" }}>
            <div
              style={{ background: "#ccc", width: "200px", padding: "1rem" }}
            >
              A
            </div>
            <div
              style={{ background: "#aaa", width: "200px", padding: "1rem" }}
            >
              B
            </div>
            <div
              style={{ background: "#888", width: "200px", padding: "1rem" }}
            >
              C
            </div>
          </Row>

          <h2 style={{ marginTop: "2rem" }}>
            Row with defaultChildBehavior = auto-grow
          </h2>
          <Row gap="sm" default-child-behavior="auto-grow">
            <div style={{ background: "#eef", padding: "1rem" }}>Grow 1</div>
            <div style={{ background: "#ccf", padding: "1rem" }}>Grow 2</div>
            <div style={{ background: "#aaf", padding: "1rem" }}>Grow 3</div>
          </Row>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <Sticker content="Default" />
          <Sticker content="Primary" color="primary" />
          <Sticker content="Secondary" color="secondary" />
          <Sticker content="Tertiary" color="tertiary" />
          <Sticker content="Error" color="error" />
          <Sticker content="Warning" color="warning" />
          <Sticker content="Success" color="success" />
          <Sticker content="Info" color="info" />
          <Sticker content="Surface" color="surface" />
          <Sticker content="Inverse" color="inversesurface" />
          <Sticker content="Primary Container" color="primarycontainer" />
          <Sticker content="Surface Variant" color="surfacevariant" />
        </div>
      </div>

      {/* RADII TESTING */}
      <div className="radius-test-grid">
        {radii.map((radius) => (
          <figure key={radius} className="radius-test-item">
            <Image
              src="/testimage.png"
              alt={radius}
              lk-component="image"
              lk-image-border-radius={radius}
              className="radius-test-img"
            />
            <figcaption className="radius-test-caption">{radius}</figcaption>
          </figure>
        ))}
      </div>

      {/* OBJECT-FIT TESTING */}
      <div className="objectfit-test-grid">
        <figure>
          <Image src="/testimage.png" alt="cover" lk-image-object-fit="cover" />
          <figcaption>object-fit: cover</figcaption>
        </figure>
        <figure>
          <Image
            src="/testimage.png"
            alt="contain"
            lk-image-object-fit="contain"
          />
          <figcaption>object-fit: contain</figcaption>
        </figure>
        <figure>
          <Image src="/testimage.png" alt="fill" lk-image-object-fit="fill" />
          <figcaption>object-fit: fill</figcaption>
        </figure>
        <figure>
          <Image src="/testimage.png" alt="none" lk-image-object-fit="none" />
          <figcaption>object-fit: none</figcaption>
        </figure>
        <figure>
          <Image
            src="/testimage.png"
            alt="scale-down"
            lk-image-object-fit="scale-down"
          />
          <figcaption>object-fit: scale-down</figcaption>
        </figure>
      </div>

      {/* ASPECT RATIO TESTING */}
      <div className="aspect-test-grid">
        {aspectRatios.map((ratio) => (
          <figure key={ratio} style={{ border: "1px solid #ccc" }}>
            <Image
              src="/testimage.png"
              alt={ratio}
              lk-component="image"
              lk-image-aspect={ratio}
              style={{ width: "100%", objectFit: "cover" }}
            />
            <figcaption className="text-center mt-2">{ratio}</figcaption>
          </figure>
        ))}
        {/* SIZE TESTING */}
        <div className="size-test-grid">
          {sizes.map((size) => (
            <figure key={size} className="size-test-item">
              <Image
                src="/testimage.png"
                alt={size}
                lk-component="image"
                lk-image-width={size}
                lk-image-height={size}
                className="size-test-img"
              />
              <figcaption className="size-test-caption">{size}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <Badge />
      <div>
        <div style={{ display: "grid", gap: "2rem", padding: "2rem" }}>
          {/* Padding prop variations */}
          <Section padding="none">
            <div style={contentStyle}>padding=none</div>
          </Section>

          <Section padding="xs">
            <div style={contentStyle}>padding=xs</div>
          </Section>

          <Section padding="sm">
            <div style={contentStyle}>padding=sm</div>
          </Section>

          <Section padding="md">
            <div style={contentStyle}>padding=md</div>
          </Section>

          <Section padding="lg">
            <div style={contentStyle}>padding=lg</div>
          </Section>

          <Section padding="xl">
            <div style={contentStyle}>padding=xl</div>
          </Section>

          {/* Individual directional paddings using data attributes */}
          {/* <Section {...{ "lk-section-px": "md" }}> */}
          <Section px="md">
            <div style={contentStyle}>lk-section-px=md</div>
          </Section>

          <Section py="lg">
            <div style={contentStyle}>lk-section-py=lg</div>
          </Section>

          <Section pt="xs">
            <div style={contentStyle}>lk-section-pt=xs</div>
          </Section>

          <Section pr="sm">
            <div style={contentStyle}>lk-section-pr=sm</div>
          </Section>

          <Section pb="xl">
            <div style={contentStyle}>lk-section-pb=xl</div>
          </Section>

          <Section pl="lg">
            <div style={contentStyle}>lk-section-pl=lg</div>
          </Section>

          {/* Combined directional paddings */}
          <Section pt="sm" pr="md" pb="lg" pl="xl">
            <div style={contentStyle}>pt=sm + pr=md + pb=lg + pl=xl</div>
          </Section>
          <h2 style={{ marginTop: "2rem" }}>
            Row with defaultChildBehavior = auto-grow
          </h2>
          <Row gap="sm" default-child-behavior="auto-grow">
            <div style={{ background: "#eef", padding: "1rem" }}>Grow 1</div>
            <div style={{ background: "#ccf", padding: "1rem" }}>Grow 2</div>
            <div style={{ background: "#aaf", padding: "1rem" }}>Grow 3</div>
          </Row>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <Sticker content="Default" />
          <Sticker content="Primary" color="primary" />
          <Sticker content="Secondary" color="secondary" />
          <Sticker content="Tertiary" color="tertiary" />
          <Sticker content="Error" color="error" />
          <Sticker content="Warning" color="warning" />
          <Sticker content="Success" color="success" />
          <Sticker content="Info" color="info" />
          <Sticker content="Surface" color="surface" />
          <Sticker content="Inverse" color="inversesurface" />
          <Sticker content="Primary Container" color="primarycontainer" />
          <Sticker content="Surface Variant" color="surfacevariant" />
        </div>

        <Text fontClass="display1" tag="footer" color="primary">
          Hello World
        </Text>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <Sticker content="Default" />
        <Sticker content="Primary" color="primary" />
        <Sticker content="Secondary" color="secondary" />
        <Sticker content="Tertiary" color="tertiary" />
        <Sticker content="Error" color="error" />
        <Sticker content="Warning" color="warning" />
        <Sticker content="Success" color="success" />
        <Sticker content="Info" color="info" />
        <Sticker content="Surface" color="surface" />
        <Sticker content="Inverse" color="inversesurface" />
        <Sticker content="Primary Container" color="primarycontainer" />
        <Sticker content="Surface Variant" color="surfacevariant" />
      </div>

      {variants.map((variant) => (
        <div key={variant}>
          <h2>{variant} Variant</h2>
          <div>
            {buttonSizes.map((size) => (
              <div key={`${variant}-${size}`}>
                <h3>Size: {size}</h3>
                <div>
                  <div>
                    <Button
                      label="Left Icon"
                      variant={variant}
                      size={size}
                      color="error"
                      startIcon="airplay"
                    />
                    <span>startIcon</span>
                  </div>
                  <div>
                    <Button
                      label="Right Icon"
                      variant={variant}
                      size={size}
                      color="primary"
                      endIcon="airplay"
                    />
                    <span>endIcon</span>
                  </div>
                  <div>
                    <Button
                      label="Both Icons"
                      variant={variant}
                      size={size}
                      color="primary"
                      startIcon="airplay"
                      endIcon="airplay"
                    />
                    <span>both</span>
                  </div>
                  <div>
                    <Button
                      label="No Icon"
                      variant={variant}
                      size={size}
                      color="primary"
                    />
                    <span>none</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* SIZE TESTING */}
      <div className="size-test-grid">
        {sizes.map((size) => (
          <figure key={size} className="size-test-item">
            <Image
              src="/testimage.png"
              alt={size}
              lk-image-width={size}
              lk-image-height={size}
              className="size-test-img"
            />
            <figcaption className="size-test-caption">{size}</figcaption>
          </figure>
        ))}
      </div>

      {/* RADII TESTING */}
      <div className="radius-test-grid">
        {radii.map((radius) => (
          <figure key={radius} className="radius-test-item">
            <Image
              src="/testimage.png"
              alt={radius}
              lk-image-border-radius={radius}
              className="radius-test-img"
            />
            <figcaption className="radius-test-caption">{radius}</figcaption>
          </figure>
        ))}
      </div>

      {/* OBJECT-FIT TESTING */}
      <div className="objectfit-test-grid">
        <figure>
          <Image src="/testimage.png" alt="cover" lk-image-object-fit="cover" />
          <figcaption>object-fit: cover</figcaption>
        </figure>
        <figure>
          <Image
            src="/testimage.png"
            alt="contain"
            lk-image-object-fit="contain"
          />
          <figcaption>object-fit: contain</figcaption>
        </figure>
        <figure>
          <Image src="/testimage.png" alt="fill" lk-image-object-fit="fill" />
          <figcaption>object-fit: fill</figcaption>
        </figure>
        <figure>
          <Image src="/testimage.png" alt="none" lk-image-object-fit="none" />
          <figcaption>object-fit: none</figcaption>
        </figure>
        <figure>
          <Image
            src="/testimage.png"
            alt="scale-down"
            lk-image-object-fit="scale-down"
          />
          <figcaption>object-fit: scale-down</figcaption>
        </figure>
      </div>

      {/* ASPECT RATIO TESTING */}
      <div className="aspect-test-grid">
        {aspectRatios.map((ratio) => (
          <figure key={ratio} style={{ border: "1px solid #ccc" }}>
            <Image
              src="/testimage.png"
              alt={ratio}
              lk-image-aspect={ratio}
              style={{ width: "100%", objectFit: "cover" }}
            />
            <figcaption className="text-center mt-2">{ratio}</figcaption>
          </figure>
        ))}
      </div>
      <Text fontClass="display1" tag="footer" color="primary">
        Hello World
      </Text>
    </div>
  );
}
