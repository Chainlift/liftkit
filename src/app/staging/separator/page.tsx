// app/separator/page.tsx

import { Separator } from "@/registry/nextjs/components/separator"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Separator Example</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <p>Section 1</p>
          <Separator orientation="horizontal" />
          <p>Section 2</p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span>Item A</span>
          <Separator orientation="vertical" />
          <span>Item B</span>
          <Separator orientation="vertical" />
          <span>Item C</span>
        </div>
      </div>
    </main>
  )
}
