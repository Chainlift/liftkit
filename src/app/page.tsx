import Badge from "@/liftkit/components/badge";
import Icon from "@/liftkit/components/icon";
import styles from "./page.module.css";
import Section from "@/liftkit/components/section";
import Text from "@/liftkit/components/text";
import Row from "@/liftkit/components/row";
import Paragraph from "@/liftkit/components/paragraph";
import Sticker from "@/liftkit/components/sticker";
import Button from "@/liftkit/components/button";

const contentStyle: React.CSSProperties = {
  background: "#e0e0e0",
  border: "1px dashed #888",
  padding: "1rem",
  textAlign: "center",
  fontSize: "14px",
  color: "darkgreen",
};

export default function Home() {
  const variants = ["fill", "outline", "text"] as const;
  const buttonSizes = ["sm", "md", "lg"] as const;

  return (
    <div className={styles.page}>
      <Paragraph fontClass="title1">
        ancient times, cats were not merely companions—they were revered as
        divine beings. Cultures like ancient Egypt honored cats as sacred
        creatures, embodying grace, mystery, and spiritual power. The goddess
        Bastet, depicted with the head of a lioness or domestic cat, symbolized
        protection, fertility, and the nurturing aspects of home life. Even
        beyond Egypt, the enigmatic nature of cats—their watchful eyes, silent
        movements, and uncanny independence—has inspired a timeless belief that
        they walk between worlds. To this day, many still joke (or suspect) that
        cats aren’t just pets, but deities in disguise, quietly ruling their
        human households with regal indifference.
      </Paragraph>
      <div style={{ padding: "2rem" }}>
        <h2>Row with gap, justifyContent, alignItems</h2>
        <Row gap="lg" justify-content="space-around" align-items="center">
          <div style={{ background: "#ddd", padding: "1rem" }}>Item 1</div>
          <div style={{ background: "#bbb", padding: "1rem" }}>Item 2</div>
          <div style={{ background: "#999", padding: "1rem" }}>Item 3</div>
        </Row>

        <h2 style={{ marginTop: "2rem" }}>Row with wrapChildren</h2>
        <Row gap="lg" wrap-children="true" style={{ maxWidth: "300px" }}>
          <div style={{ background: "#ccc", width: "200px", padding: "1rem" }}>
            A
          </div>
          <div style={{ background: "#aaa", width: "200px", padding: "1rem" }}>
            B
          </div>
          <div style={{ background: "#888", width: "200px", padding: "1rem" }}>
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
      <Badge
        icon="replace"
        color="surfacecontainerhigh"
        scale="lg"
        iconStrokeWidth={1}
      />
      <span className="absolute top-0">Hello</span>
      <Icon name="airplay" color="primary" fontClass="title2" />
      <div style={{ display: "grid", gap: "2rem", padding: "2rem" }}>
        {/* Padding prop variations */}
        <Section padding="none">
          <div style={contentStyle}>padding="none"</div>
        </Section>

        <Section padding="xs">
          <div style={contentStyle}>padding="xs"</div>
        </Section>

        <Section padding="sm">
          <div style={contentStyle}>padding="sm"</div>
        </Section>

        <Section padding="md">
          <div style={contentStyle}>padding="md"</div>
        </Section>

        <Section padding="lg">
          <div style={contentStyle}>padding="lg"</div>
        </Section>

        <Section padding="xl">
          <div style={contentStyle}>padding="xl"</div>
        </Section>

        {/* Individual directional paddings using data attributes */}
        {/* <Section {...{ "lk-section-px": "md" }}> */}
        <Section px="md">
          <div style={contentStyle}>lk-section-px="md"</div>
        </Section>

        <Section py="lg">
          <div style={contentStyle}>lk-section-py="lg"</div>
        </Section>

        <Section pt="xs">
          <div style={contentStyle}>lk-section-pt="xs"</div>
        </Section>

        <Section pr="sm">
          <div style={contentStyle}>lk-section-pr="sm"</div>
        </Section>

        <Section pb="xl">
          <div style={contentStyle}>lk-section-pb="xl"</div>
        </Section>

        <Section pl="lg">
          <div style={contentStyle}>lk-section-pl="lg"</div>
        </Section>

        {/* Combined directional paddings */}
        <Section pt="sm" pr="md" pb="lg" pl="xl">
          <div style={contentStyle}>pt="sm" + pr="md" + pb="lg" + pl="xl"</div>
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
    </div>
  );
}
