// app/tooltip/page.tsx

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
} from "@/registry/nextjs/components/tooltip";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Tooltip Example</h1>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <button>Hover me</button>
          </TooltipTrigger>

          <TooltipPortal>
            <TooltipContent side="top" align="center">
              <p>This is a tooltip with some information.</p>
              <TooltipArrow />
            </TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
    </main>
  );
}
