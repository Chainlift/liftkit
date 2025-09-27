// app/aspect-ratio/page.tsx

import { AspectRatio } from "@/registry/nextjs/components/aspect-ratio"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Aspect Ratio Example</h1>

      <div style={{ width: 400 }}>
        <AspectRatio ratio={16 / 9}>
          <img
            src="https://via.placeholder.com/800x450"
            alt="Placeholder"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </AspectRatio>
      </div>
    </main>
  )
}
