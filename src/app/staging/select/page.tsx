// app/select/page.tsx

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectViewport,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectItemIndicator,
  SelectSeparator,
} from "@/registry/nextjs/components/select"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Select Example</h1>

      <Select defaultValue="apple">
        <SelectTrigger>
          <SelectValue />
          <SelectIcon>▼</SelectIcon>
        </SelectTrigger>

        <SelectPortal>
          <SelectContent>
            <SelectScrollUpButton>▲</SelectScrollUpButton>
            <SelectViewport>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">
                  Apple <SelectItemIndicator>✔</SelectItemIndicator>
                </SelectItem>
                <SelectItem value="banana">
                  Banana <SelectItemIndicator>✔</SelectItemIndicator>
                </SelectItem>
                <SelectItem value="orange">
                  Orange <SelectItemIndicator>✔</SelectItemIndicator>
                </SelectItem>
              </SelectGroup>

              <SelectSeparator />

              <SelectGroup>
                <SelectLabel>Vegetables</SelectLabel>
                <SelectItem value="carrot">
                  Carrot <SelectItemIndicator>✔</SelectItemIndicator>
                </SelectItem>
                <SelectItem value="broccoli">
                  Broccoli <SelectItemIndicator>✔</SelectItemIndicator>
                </SelectItem>
              </SelectGroup>
            </SelectViewport>
            <SelectScrollDownButton>▼</SelectScrollDownButton>
          </SelectContent>
        </SelectPortal>
      </Select>
    </main>
  )
}
