"use client";
import * as React from "react";

import { Card, Field, FieldLabel, FieldControl, FieldError, Form, Button } from "liftkit";

export default function FormDemo() {
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  return (
    <Card scaleFactor="heading">
      <h2 className="heading-bold mb-sm">Sample Form</h2>
      <Form
        errors={errors}
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const value = formData.get("url") as string;

          setLoading(true);
          const response = await submitForm(value);
          const serverErrors = {
            url: response.error,
          };

          setErrors(serverErrors);
          setLoading(false);
        }}
      >
        <Field name="url">
          <FieldLabel>Homepage</FieldLabel>
          <FieldControl
            type="url"
            required
            defaultValue="https://example.com"
            placeholder="https://example.com"
            pattern="https?://.*"
          />
          <FieldError />
        </Field>
        <div className="mt-md">
          <Button type="submit" disabled={loading} focusableWhenDisabled>
            Submit
          </Button>
        </div>
      </Form>
    </Card>
  );
}

async function submitForm(value: string) {
  // Mimic a server response
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  try {
    const url = new URL(value);

    if (url.hostname.endsWith("example.com")) {
      return { error: "The example domain is not allowed" };
    }
  } catch {
    return { error: "This is not a valid URL" };
  }

  return { success: true };
}
