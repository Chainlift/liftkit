"use client";
import Grid from "@/registry/nextjs/components/grid";
import Container from "@/registry/nextjs/components/containers";
import Section from "@/registry/nextjs/components/section";
import Sticker from "@/registry/nextjs/components/sticker";
import { LkColors } from "@/registry/universal/lib/utils/debugUtils";
import Tabs from "@/registry/nextjs/components/tabs";
import Column from "@/registry/nextjs/components/column";
import Row from "@/registry/nextjs/components/row";
import TextInput from "@/registry/nextjs/components/text-input";

export default function TextInputStaging() {
  return (
    <>
      <Section padding="md">
        <Container>
          <h1 className="display2-bold m-bottom-md">Text Input Staging Area</h1>
          <TextInput></TextInput>
        </Container>
      </Section>
    </>
  );
}
