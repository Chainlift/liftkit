import Badge from "@/liftkit/components/badge";
import Icon from "@/liftkit/components/icon";
import styles from "./page.module.css";
import Section from "@/liftkit/components/section";
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
      </div>
    </div>
  );
}
