// app/one-time-password-field/page.tsx
"use client";
import { Button } from "@/registry/nextjs/components/button";
import {
  OneTimePasswordField,
  OneTimePasswordFieldInput,
  OneTimePasswordFieldHiddenInput,
} from "@/registry/nextjs/components/one-time-password-field";
import { StateLayer } from "@/registry/nextjs/components/state-layer";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>One-Time Password Field Example</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          alert(`Submitted code: ${formData.get("otp")}`);
        }}
      >
        <OneTimePasswordField name="otp" className="mb-md">
          {Array.from({ length: 6 }).map((_, i) => (
            <div>
              <OneTimePasswordFieldInput key={i} index={i} />
            </div>
          ))}
          <OneTimePasswordFieldHiddenInput />
        </OneTimePasswordField>

        <Button type="submit">Submit</Button>
      </form>
    </main>
  );
}
