"use client";
import styles from "./page.module.css";
import Section from "@/registry/nextjs/components/section";
import Text from "@/registry/nextjs/components/text";
import Row from "@/registry/nextjs/components/row";

import Sticker from "@/registry/nextjs/components/sticker";
import Button from "@/registry/nextjs/components/button";
import Image from "@/registry/nextjs/components/image";
import Badge from "@/registry/nextjs/components/badge";
import Icon from "@/registry/nextjs/components/icon";
import Grid from "@/registry/nextjs/components/grid";
import TabContent from "@/registry/nextjs/components/tab-content";
import Tabs from "@/registry/nextjs/components/tabs";
import Card from "@/registry/nextjs/components/card";

import NavBar from "@/registry/nextjs/components/navbar";
import IconButton from "@/registry/nextjs/components/icon-button";
import ThemeController from "@/registry/nextjs/components/theme-controller";

const contentStyle: React.CSSProperties = {
  background: "#e0e0e0",
  border: "1px dashed #888",
  padding: "1rem",
  textAlign: "center",
  fontSize: "14px",
  color: "darkgreen",
};

const aspectRatios = ["auto", "1/1", "2.39/1", "2/1", "16/9", "3/2", "4/3", "5/4", "1/2.39", "1/2", "9/16", "4/5"];

const sizes = ["3xs", "2xs", "xs", "sm", "lg", "xl", "2xl", "3xl", "4xl"];

const radii = ["none", "zero", "3xs", "2xs", "xs", "sm", "lg", "xl", "2xl", "3xl", "4xl"];

export default function Home() {
  const tabLabels = ["Home", "Profile", "Settings"];
  const variants = ["fill", "outline", "text"] as const;
  const buttonSizes = ["sm", "md", "lg"] as const;

  // const handleChange = (value: string) => {
  //   setSelectedValue(value);
  //   console.log(value);
  // };

  // const options = [
  //   { label: "Option 1", value: "option1" },
  //   { label: "Option 2", value: "option2" },
  //   { label: "Option 3", value: "option3" },
  // ];

  return (
    <div className={styles.page}>
    <ThemeController/>
      <NavBar
        navButtons={[
          <Button key="1" label="Home" variant="text" />,
          <Button key="2" label="About" variant="text" />,
          <Button key="3" label="Careers" variant="text" />,
        ]}
        iconButtons={[
          <IconButton key="search" icon="search" variant="text" color="surfacecontainer" />,
          <IconButton key="heart" icon="book" variant="text" color="surfacecontainer" />,
        ]}
        ctaButtons={[
          <Button key="secondary" label="Secondary" variant="outline" color="surface" />,
          <Button key="primary" label="Primary" variant="fill" color="surfacecontainer" />,
        ]}
      />
      {/* <Snackbar badgeColor="error" globalColor="surface" /> */}
      <div
        style={{
          display: "grid",
          gap: "1rem",
          padding: "2rem",
          background: "#f0f0f0",
        }}
      >
        {/* Default usage */}
        {/* <Snackbar /> */}

        {/* Custom message */}
        {/* <Snackbar message="Your changes have been saved." fontClass="label" backgroundColor="error" /> */}

        {/* Custom badge color */}
        {/* <Snackbar badgeColor="error" message="There was a problem saving your changes." /> */}

        {/* Custom primary and secondary button colors */}
        {/* <Snackbar primaryButtonColor="success" secondaryButtonColor="error" message="Settings updated successfully." /> */}

        {/* Global color overrides badge + both buttons */}
        {/* <Snackbar globalColor="warning" message="This will overwrite existing data." /> */}

        {/* Adding custom class or inline styles */}
        {/* <Snackbar
          message="Styled with className and onClick!"
          className="custom-snackbar"
          onClick={() => alert("Snackbar clicked")}
          style={{ cursor: "pointer" }}
        /> */}
      </div>
      <Tabs tabLinks={tabLabels}>
        {tabLabels.map((label, index) => (
          <TabContent key={index}>
            <p>This is the content for {label}</p>
          </TabContent>
        ))}
      </Tabs>

      <Grid columns={2} gap="md">
        <div style={{ background: "red" }}>Item 1</div>
        <div style={{ background: "blue" }}>Item 2</div>
      </Grid>

      <Grid columns={3} gap="sm" autoResponsive>
        <div style={{ background: "green" }}>Responsive 1</div>
        <div style={{ background: "purple" }}>Responsive 2</div>
        <div style={{ background: "orange" }}>Responsive 3</div>
      </Grid>
      <Text fontClass="display1" tag="footer" color="primary">
        Hello World
      </Text>
      <p className="title1">
        ancient times cats were not merely companions—they were revered as divine beings. Cultures like ancient Egypt
        honored cats as sacred creatures embodying grace&quot; mystery&quot; and spiritual power. The goddess Bastet
        depicted with the head of a lioness or domestic cat&quot; symbolized protection fertility&quot; and the
        nurturing aspects of home life. Even beyond Egypt the enigmatic nature of cats—their watchful eyes&quot; silent
        movements and uncanny independence—has inspired a timeless belief that they walk between worlds. To this day
        many still joke (or suspect) that cats arent just pets but deities in disguise&quot; quietly ruling their human
        households with regal indifference.
      </p>
      <div style={{ padding: "2rem" }}>
        <h2>Row with gap, justifyContent, alignItems</h2>
        <Row gap="lg" justify-content="space-around" align-items="center">
          <div style={{ background: "#ddd", padding: "1rem" }}>Item 1</div>
          <div style={{ background: "#bbb", padding: "1rem" }}>Item 2</div>
          <div style={{ background: "#999", padding: "1rem" }}>Item 3</div>
        </Row>

        <h2 style={{ marginTop: "2rem" }}>Row with wrapChildren</h2>
        <Row gap="lg" wrap-children="true" style={{ maxWidth: "300px" }}>
          <div style={{ background: "#ccc", width: "200px", padding: "1rem" }}>A</div>
          <div style={{ background: "#aaa", width: "200px", padding: "1rem" }}>B</div>
          <div style={{ background: "#888", width: "200px", padding: "1rem" }}>C</div>
        </Row>

        <h2 style={{ marginTop: "2rem" }}>Row with defaultChildBehavior = auto-grow</h2>
        <Row gap="sm" default-child-behavior="auto-grow">
          <div style={{ background: "#eef", padding: "1rem" }}>Grow 1</div>
          <div style={{ background: "#ccf", padding: "1rem" }}>Grow 2</div>
          <div style={{ background: "#aaf", padding: "1rem" }}>Grow 3</div>
        </Row>
      </div>
      <Badge icon="replace" color="surfacecontainerhigh" scale="lg" iconStrokeWidth={1} />
      <span className="absolute top-0">Hello</span>
      <Icon name="airplay" color="primary" fontClass="title2" />
      <div style={{ display: "grid", gap: "2rem", padding: "2rem" }}>
        {/* Basic Card */}
        <Card>
          <h2>Basic Card</h2>
          <p>This is a basic card with default styling.</p>
        </Card>

        {/* Filled Card with Title Scale */}
        <Card scale-factor="caption" variant="fill" material="flat" optical-correction="y">
          <Text tag="h1" fontClass="display1">
            Filled Card
          </Text>

          <h2>Filled Card</h2>
          <p>This card uses the fill variant and title1 scale.</p>
        </Card>

        <div style={{ display: "grid", gap: "2rem", padding: "2rem" }}>
          {/* Basic Card */}
          <Card>
            <h2>Basic Card</h2>
            <p>This is a basic card with default styling.</p>
          </Card>

          {/* Filled Card with Title Scale */}
          <Card scaleFactor="title1" variant="fill" material="flat" optical-correction="left">
            <h2>Filled Card</h2>
            <p>This card uses the fill variant and title1 scale.</p>
          </Card>

          {/* Outline Glass Card with Clickable Style */}

          <Card
            scaleFactor="body"
            variant="outline"
            material="glass"
            isClickable
            onClick={() => alert("Card clicked!")}
          >
            <h2>Glass Card</h2>
            <p>This one has a glass blur effect and is clickable.</p>
          </Card>
        </div>

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

        <p className="title1">
          ancient times cats were not merely companions—they were revered as divine beings. Cultures like ancient Egypt
          honored cats as sacred creatures embodying grace&quot; mystery&quot; and spiritual power. The goddess Bastet
          depicted with the head of a lioness or domestic cat&quot; symbolized protection fertility&quot; and the
          nurturing aspects of home life. Even beyond Egypt the enigmatic nature of cats—their watchful eyes&quot;
          silent movements and uncanny independence—has inspired a timeless belief that they walk between worlds. To
          this day many still joke (or suspect) that cats arent just pets but deities in disguise&quot; quietly ruling
          their human households with regal indifference.
        </p>
        <div style={{ padding: "2rem" }}>
          <h2>Row with gap, justifyContent, alignItems</h2>
          <Row gap="lg" justify-content="space-around" align-items="center">
            <div style={{ background: "#ddd", padding: "1rem" }}>Item 1</div>
            <div style={{ background: "#bbb", padding: "1rem" }}>Item 2</div>
            <div style={{ background: "#999", padding: "1rem" }}>Item 3</div>
          </Row>

          <h2 style={{ marginTop: "2rem" }}>Row with wrapChildren</h2>
          <Row gap="lg" wrap-children="true" style={{ maxWidth: "300px" }}>
            <div style={{ background: "#ccc", width: "200px", padding: "1rem" }}>A</div>
            <div style={{ background: "#aaa", width: "200px", padding: "1rem" }}>B</div>
            <div style={{ background: "#888", width: "200px", padding: "1rem" }}>C</div>
          </Row>

          <h2 style={{ marginTop: "2rem" }}>Row with defaultChildBehavior = auto-grow</h2>
          <Row gap="sm" default-child-behavior="auto-grow">
            <div style={{ background: "#eef", padding: "1rem" }}>Grow 1</div>
            <div style={{ background: "#ccf", padding: "1rem" }}>Grow 2</div>
            <div style={{ background: "#aaf", padding: "1rem" }}>Grow 3</div>
          </Row>
        </div>
        <Badge icon="replace" color="surfacecontainerhigh" scale="lg" iconStrokeWidth={1} />
        <span className="absolute top-0">Hello</span>
        <Icon name="airplay" color="primary" fontClass="title2" />
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
        </div>
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
            <h2 style={{ marginTop: "2rem" }}>Row with defaultChildBehavior = auto-grow</h2>
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
                      <Button label="Left Icon" variant={variant} size={size} color="error" startIcon="airplay" />
                      <span>startIcon</span>
                    </div>
                    <div>
                      <Button label="Right Icon" variant={variant} size={size} color="primary" endIcon="airplay" />
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
                      <Button label="No Icon" variant={variant} size={size} color="primary" />
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
              <Image src="/testimage.png" alt={radius} lk-image-border-radius={radius} className="radius-test-img" />
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
            <Image src="/testimage.png" alt="contain" lk-image-object-fit="contain" />
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
            <Image src="/testimage.png" alt="scale-down" lk-image-object-fit="scale-down" />
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
        <p className="title1">
          ancient times, cats were not merely companions—they were revered as divine beings. Cultures like ancient Egypt
          honored cats as sacred creatures, embodying grace, mystery, and spiritual power. The goddess Bastet, depicted
          with the head of a lioness or domestic cat, symbolized protection, fertility, and the nurturing aspects of
          home life. Even beyond Egypt, the enigmatic nature of cats—their watchful eyes, silent movements, and uncanny
          independence—has inspired a timeless belief that they walk between worlds. To this day, many still joke (or
          suspect) that cats aren’t just pets, but deities in disguise, quietly ruling their human households with regal
          indifference.
        </p>
      </div>
    </div>
  );
}
