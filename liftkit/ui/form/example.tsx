"use client";
import * as React from "react";
import { Field as BaseField } from "@base-ui/react/field";
import { Form as BaseForm } from "@base-ui/react/form";
import { Button as BaseButton } from "@base-ui/react/button";
import { Form } from "./form";
import { Field, FieldLabel, FieldControl, FieldError } from "@/liftkit/ui/field/field";
import { Button } from "@/liftkit/ui/button/button";
import styles from "./form.module.css";

export default function ExampleForm() {
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  return (
    <BaseForm
      className={styles.Form}
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
      <BaseField.Root name="url" className={styles.Field}>
        <BaseField.Label className={styles.Label}>Homepage</BaseField.Label>
        <BaseField.Control
          type="url"
          required
          defaultValue="https://example.com"
          placeholder="https://example.com"
          pattern="https?://.*"
          className={styles.Input}
        />
        <BaseField.Error className={styles.Error} />
      </BaseField.Root>
      <BaseButton type="submit" disabled={loading} focusableWhenDisabled className={styles.Button}>
        Submit
      </BaseButton>
    </BaseForm>
  );
}

export function ExampleForm2() {
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  return (
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
      <Button type="submit" disabled={loading} focusableWhenDisabled>
        Submit
      </Button>
    </Form>
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
