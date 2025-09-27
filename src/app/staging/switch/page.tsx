// app/switch/page.tsx

import { Switch } from "@/registry/nextjs/components/switch"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Switch Example</h1>

      <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Switch id="airplane-mode" />
          <span>Airplane Mode</span>
        </label>

        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Switch id="wifi" defaultChecked />
          <span>Wi-Fi</span>
        </label>

        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Switch id="disabled" disabled />
          <span>Disabled Option</span>
        </label>
      </form>
    </main>
  )
}
