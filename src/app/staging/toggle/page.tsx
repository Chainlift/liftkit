// app/toggle/page.tsx

import { Toggle } from "@/registry/nextjs/components/toggle"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Toggle Example</h1>

      <div style={{ display: "flex", gap: 16 }}>
        <Toggle aria-label="Bold">
          <span>B</span>
        </Toggle>

        <Toggle aria-label="Italic" defaultPressed>
          <span>I</span>
        </Toggle>

        <Toggle aria-label="Underline" disabled>
          <span>U</span>
        </Toggle>
      </div>
    </main>
  )
}
