// app/password-toggle-field/page.tsx

import {
  PasswordToggleField,
  PasswordToggleFieldInput,
  PasswordToggleFieldToggle,
  PasswordToggleFieldSlot,
  PasswordToggleFieldIcon,
} from "@/registry/nextjs/components/password-toggle-field"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Password Toggle Field Example</h1>

      <PasswordToggleField>
        <PasswordToggleFieldInput placeholder="Enter password" />
        <PasswordToggleFieldSlot>
          <PasswordToggleFieldToggle>
            <PasswordToggleFieldIcon />
          </PasswordToggleFieldToggle>
        </PasswordToggleFieldSlot>
      </PasswordToggleField>
    </main>
  )
}
