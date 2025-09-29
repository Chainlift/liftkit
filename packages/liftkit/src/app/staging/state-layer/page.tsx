import StateLayer from "@/registry/nextjs/components/state-layer";

export default function StateLayerStaging() {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "50vw",
          height: "50svh",
          border: "2px solid var(--lk-outline)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        Hover on me
        <StateLayer bgColor="primary" />
      </div>
    </>
  );
}
