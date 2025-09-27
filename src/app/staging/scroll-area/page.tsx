// app/scroll-area/page.tsx

import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from "@/registry/nextjs/components/scroll-area"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Scroll Area Example</h1>

      <ScrollArea style={{ width: 300, height: 150, border: "1px solid gray" }}>
        <ScrollAreaViewport>
          <div style={{ padding: 12 }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique
              magna. Sed sed sapien et ligula tincidunt tristique. Maecenas sed purus nec dui
              viverra tincidunt.
            </p>
            <p>
              Donec ut purus vitae lacus pulvinar varius. Integer eu augue non justo imperdiet
              finibus. Aliquam erat volutpat. Suspendisse sed lectus nec magna pellentesque
              bibendum.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Morbi nec velit nec libero pretium pharetra non sit amet sapien.
            </p>
          </div>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="vertical">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaScrollbar orientation="horizontal">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaCorner />
      </ScrollArea>
    </main>
  )
}
