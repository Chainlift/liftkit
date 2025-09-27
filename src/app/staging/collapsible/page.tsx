// app/collapsible/page.tsx

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/registry/nextjs/components/collapsible"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Collapsible Example</h1>

      <Collapsible>
        <CollapsibleTrigger>
          <button>Toggle Content</button>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div style={{ marginTop: 12 }}>
            <p>
              This is some collapsible content. You can place text, images, or any other elements
              here.
            </p>
            <p>
              When the trigger above is clicked, this section will open and close.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </main>
  )
}
