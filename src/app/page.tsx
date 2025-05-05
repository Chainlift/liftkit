import Badge from "@/liftkit/components/badge";
import Icon from "@/liftkit/components/icon";
import styles from "./page.module.css";
import Section from "@/liftkit/components/section";
import Text from "@/liftkit/components/text";
import Row from "@/liftkit/components/row";
const contentStyle: React.CSSProperties = {
  background: "#e0e0e0",
  border: "1px dashed #888",
  padding: "1rem",
  textAlign: "center",
  fontSize: "14px",
  color: "darkgreen",
};

export default function Home() {
  return (
    <div className={styles.page}>
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
      <Badge></Badge>
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
        </div>

        <Text fontClass="display1" tag="footer" color="primary">
          Hello World
        </Text>
      </div>
    </div>
  );
}
