// app/radio-group/page.tsx

import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupIndicator,
} from "@/registry/nextjs/components/radio-group"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Radio Group Example</h1>

      <RadioGroup defaultValue="option-1" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <RadioGroupItem value="option-1" id="option-1" />
          <span>Option 1</span>
        </label>

        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <RadioGroupItem value="option-2" id="option-2" />
          <span>Option 2</span>
        </label>

        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <RadioGroupItem value="option-3" id="option-3" />
          <span>Option 3</span>
        </label>
      </RadioGroup>
    </main>
  )
}
