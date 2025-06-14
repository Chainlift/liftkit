import "@/registry/nextjs/components/state-layer/state-layer.css";

interface StateLayerProps {
  bgColor?: LkColor | "currentColor";
}

export default function StateLayer({ bgColor = "onsurface" }: StateLayerProps) {
  console.log(bgColor);

  return (
    <>
      <div
        lk-component="state-layer"
        className={bgColor !== "currentColor" ? `bg-${bgColor}` : ""}
        style={bgColor === "currentColor" ? { backgroundColor: "currentColor" } : {}}
      ></div>
    </>
  );
}
