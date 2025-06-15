import "@/registry/nextjs/components/state-layer/state-layer.css";

export interface LkStateLayerProps {
  bgColor?: LkColor | "currentColor";
  forcedState?: "hover" | "active" | "focus"; // Used when you need a static state controlled by something higher, like a select field that keeps actively-selected options grayed out
}

export default function StateLayer({ bgColor = "currentColor", forcedState }: LkStateLayerProps) {
  console.log("statelayer bgColor:", bgColor);

  return (
    <>
      <div
        lk-component="state-layer"
        className={bgColor !== "currentColor" ? `bg-${bgColor}` : ""}
        style={bgColor === "currentColor" ? { backgroundColor: "currentColor" } : {}}
        {...(forcedState && { "lk-forced-state": forcedState })}
      ></div>
    </>
  );
}
