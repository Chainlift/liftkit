// app/popover/page.tsx

import {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
  PopoverArrow,
  PopoverAnchor,
  PopoverClose,
} from "@/registry/nextjs/components/popover"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Popover Example</h1>

      <Popover>
        <PopoverTrigger>
          <button>Open Popover</button>
        </PopoverTrigger>

        <PopoverPortal>
          <PopoverContent side="bottom" align="center">
            <p>This is some popover content. You can place any elements here.</p>
            <p style={{ marginTop: 8 }}>It appears when the trigger is clicked.</p>
            <div style={{ marginTop: 12 }}>
              <PopoverClose>
                <button>Close</button>
              </PopoverClose>
            </div>
            <PopoverArrow />
          </PopoverContent>
        </PopoverPortal>
      </Popover>

      <div style={{ marginTop: 40 }}>
        <Popover>
          <PopoverAnchor>
            <button>Anchor Example</button>
          </PopoverAnchor>
          <PopoverPortal>
            <PopoverContent side="top" align="start">
              <p>This popover is anchored to a button.</p>
              <PopoverArrow />
            </PopoverContent>
          </PopoverPortal>
        </Popover>
      </div>
    </main>
  )
}
