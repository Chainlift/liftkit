// app/avatar/page.tsx

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/registry/nextjs/components/avatar"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Avatar Example</h1>

      <div style={{ display: "flex", gap: 16 }}>
        <Avatar>
          <AvatarImage src="https://via.placeholder.com/100" alt="User avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        <Avatar>
          <AvatarImage src="" alt="Broken image fallback" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </div>
    </main>
  )
}
