// app/slider/page.tsx

import {
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from "@/registry/nextjs/components/slider"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Slider Example</h1>

      <div style={{ width: 300 }}>
        <Slider defaultValue={[50]} max={100} step={1}>
          <SliderTrack style={{ background: "#eee", height: 6, position: "relative" }}>
            <SliderRange style={{ background: "gray", height: "100%" }} />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </div>

      <div style={{ marginTop: 40, width: 300 }}>
        <Slider defaultValue={[20, 80]} max={100} step={1}>
          <SliderTrack style={{ background: "#eee", height: 6, position: "relative" }}>
            <SliderRange style={{ background: "gray", height: "100%" }} />
          </SliderTrack>
          <SliderThumb />
          <SliderThumb />
        </Slider>
      </div>
    </main>
  )
}
