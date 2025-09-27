// app/toggle-group/page.tsx

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/nextjs/components/toggle-group"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Toggle Group Example</h1>

      <section style={{ marginBottom: 40 }}>
        <h2>Single Selection</h2>
        <ToggleGroup type="single" defaultValue="left" aria-label="Text alignment">
          <ToggleGroupItem value="left" aria-label="Left Align">
            <span>Left</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center Align">
            <span>Center</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right Align">
            <span>Right</span>
          </ToggleGroupItem>
        </ToggleGroup>
      </section>

      <section>
        <h2>Multiple Selection</h2>
        <ToggleGroup type="multiple" defaultValue={["bold"]} aria-label="Text formatting">
          <ToggleGroupItem value="bold" aria-label="Bold">
            <span>B</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <span>I</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <span>U</span>
          </ToggleGroupItem>
        </ToggleGroup>
      </section>
    </main>
  )
}
