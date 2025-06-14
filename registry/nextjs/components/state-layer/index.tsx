import "@/registry/nextjs/components/state-layer/state-layer.css";

interface StateLayerProps {
  bgColor?: LkColor;
}

export default function StateLayer({ bgColor = "onsurface" }: StateLayerProps) {
  console.log(bgColor);

  return (
    <>
      <div lk-component="state-layer" className={`bg-${bgColor}`}></div>
    </>
  );
}
