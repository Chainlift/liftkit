// app/toolbar/page.tsx

import { Icon } from "@/registry/nextjs/components/icon";
import {
  Toolbar,
  ToolbarLink,
  ToolbarButton,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  ToolbarSeparator,
} from "@/registry/nextjs/components/toolbar";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Toolbar Example</h1>

      <Toolbar style={{ display: "flex", gap: 8 }}>
        <ToolbarButton>Undo</ToolbarButton>
        <ToolbarButton>Redo</ToolbarButton>
        <ToolbarSeparator />
        <ToolbarToggleGroup type="single" defaultValue="left" aria-label="Text alignment">
          <ToolbarToggleItem value="left" aria-label="Left aligned">
            Left
          </ToolbarToggleItem>
          <ToolbarToggleItem value="center" aria-label="Center aligned">
            Center
          </ToolbarToggleItem>
          <ToolbarToggleItem value="right" aria-label="Right aligned">
            Right
          </ToolbarToggleItem>
        </ToolbarToggleGroup>
        <ToolbarSeparator />
        <ToolbarToggleGroup type="multiple" defaultValue={["bold"]} aria-label="Text formatting">
          <ToolbarToggleItem value="bold" aria-label="Bold">
            <Icon name="bold" />
          </ToolbarToggleItem>
          <ToolbarToggleItem value="italic" aria-label="Italic">
            <Icon name="italic" />
          </ToolbarToggleItem>
          <ToolbarToggleItem value="underline" aria-label="Underline">
            <Icon name="underline" />
          </ToolbarToggleItem>
        </ToolbarToggleGroup>
        <ToolbarSeparator />
        <ToolbarLink href="https://example.com">Visit Example</ToolbarLink>
      </Toolbar>
    </main>
  );
}
