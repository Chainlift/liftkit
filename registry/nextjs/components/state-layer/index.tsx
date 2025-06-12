import "@/registry/nextjs/components/state-layer/state-layer.css";

interface StateLayerProps {
  bgColor?: LkColor;
}

export default function StateLayer(props: StateLayerProps) {
  const { bgColor } = props;

  console.log(bgColor);

  return (
    <>
      <div lk-component="state-layer" className={`bg-${bgColor}`}></div>

    </>
  );
}