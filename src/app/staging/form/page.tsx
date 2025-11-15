// app/form/page.tsx

import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormValidityState,
  FormSubmit,
} from "@/registry/nextjs/components/form";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Form Example</h1>

      <Form>
        <FormField name="email">
          <FormLabel>Email</FormLabel>
          <FormControl asChild>
            <input type="email" placeholder="Enter your email" required />
          </FormControl>
          <FormMessage match="valueMissing">Email is required</FormMessage>
          <FormMessage match="typeMismatch">Please enter a valid email address</FormMessage>
          <FormValidityState>
            {(validity) =>
              validity && (
                <div style={{ fontSize: "12px", color: validity.valid ? "green" : "red" }}>
                  Status: {validity.valid ? "Valid" : "Invalid"}
                </div>
              )
            }
          </FormValidityState>
        </FormField>

        <FormField name="password">
          <FormLabel>Password</FormLabel>
          <FormControl asChild>
            <input type="password" placeholder="Enter your password" required minLength={6} />
          </FormControl>
          <FormMessage match="valueMissing">Password is required</FormMessage>
          <FormMessage match="tooShort">Password must be at least 6 characters</FormMessage>
          <FormValidityState>
            {(validity) =>
              validity && (
                <div style={{ fontSize: "12px", color: validity.valid ? "green" : "red" }}>
                  Status: {validity.valid ? "Valid" : "Invalid"}
                </div>
              )
            }
          </FormValidityState>
        </FormField>

        <FormSubmit asChild>
          <button type="submit" style={{ marginTop: 16 }}>
            Submit
          </button>
        </FormSubmit>
      </Form>
    </main>
  );
}
