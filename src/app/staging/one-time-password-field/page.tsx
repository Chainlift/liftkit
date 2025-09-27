// app/one-time-password-field/page.tsx

import {
  OneTimePasswordField,
  OneTimePasswordFieldInput,
  OneTimePasswordFieldHiddenInput,
} from "@/registry/nextjs/components/one-time-password-field"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>One-Time Password Field Example</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          alert(`Submitted code: ${formData.get("otp")}`)
        }}
      >
        <OneTimePasswordField name="otp" maxLength={6}>
          {Array.from({ length: 6 }).map((_, i) => (
            <OneTimePasswordFieldInput key={i} index={i} />
          ))}
          <OneTimePasswordFieldHiddenInput />
        </OneTimePasswordField>

        <button type="submit" style={{ marginTop: 16 }}>
          Submit
        </button>
      </form>
    </main>
  )
}
