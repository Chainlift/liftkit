// app/checkbox/page.tsx

import { Checkbox } from "@/registry/nextjs/components/checkbox"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Checkbox Example</h1>

      <form style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Checkbox id="terms" />
          <span>Accept terms and conditions</span>
        </label>

        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Checkbox id="subscribe" defaultChecked />
          <span>Subscribe to newsletter</span>
        </label>

        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Checkbox id="disabled" disabled />
          <span>Disabled option</span>
        </label>
      </form>
    </main>
  )
}
