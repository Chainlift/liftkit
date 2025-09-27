// app/hover-card/page.tsx

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardPortal,
  HoverCardContent,
  HoverCardArrow,
} from "@/registry/nextjs/components/hover-card"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Hover Card Example</h1>

      <HoverCard>
        <HoverCardTrigger>
          <button>Hover over me</button>
        </HoverCardTrigger>

        <HoverCardPortal>
          <HoverCardContent side="top" align="center">
            <p><strong>John Doe</strong></p>
            <p style={{ marginTop: 4 }}>Software Engineer at Example Corp</p>
            <p style={{ marginTop: 8 }}>Loves coding, coffee, and cats.</p>
            <HoverCardArrow />
          </HoverCardContent>
        </HoverCardPortal>
      </HoverCard>
    </main>
  )
}
