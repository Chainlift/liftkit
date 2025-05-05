
import Row from "@/liftkit/components/row";

export default function Home() {
  return (
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
    </div>
  );
}
