// app/label/page.tsx

import { Label } from "@/registry/nextjs/components/label"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Label Example</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <Label htmlFor="username">Username</Label>
          <input id="username" type="text" placeholder="Enter username" />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <input id="email" type="email" placeholder="Enter email" />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <input id="password" type="password" placeholder="Enter password" />
        </div>
      </div>
    </main>
  )
}
