"use client";
import Container from "@/registry/nextjs/components/containers";
import Section from "@/registry/nextjs/components/section";
import Column from "@/registry/nextjs/components/column";
import TextInput from "@/registry/nextjs/components/text-input";

export default function TextInputStaging() {
  return (
    <>
      <Section padding="md">
        <Container>
          <h1 className="display2-bold m-bottom-md">Text Input Staging Area</h1>
          <Column gap="md">
            <TextInput name="Minimal props passed" placeholder="placeholder"></TextInput>
            <TextInput name="Label on input" placeholder="placeholder" labelPosition="on-input" helpText="Enter your help text." labelBackgroundColor="background"></TextInput>
          </Column>
        </Container>
      </Section>
    </>
  );
}
