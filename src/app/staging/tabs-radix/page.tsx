"use client";
import Grid from "@/registry/nextjs/components/grid";
import Container from "@/registry/nextjs/components/container";
import Section from "@/registry/nextjs/components/section";
import Sticker from "@/registry/nextjs/components/sticker";
import { LkColors } from "@/registry/universal/lib/utils/debugUtils";
import Column from "@/registry/nextjs/components/column";
import Row from "@/registry/nextjs/components/row";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/nextjs/components/tabs-radix";
import Card from "@/registry/nextjs/components/card";

export default function TabsStaging() {
  return (
    <>
      <Section padding="md">
        <Container>
          <h1 className="display2-bold mb-md">Tabs Staging Area</h1>
          <Tabs defaultValue="account" className="w-[400px]" orientation="horizontal">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card scaleFactor="title1">
                <p>Hello world! I'm a card.</p>
              </Card>
            </TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>
        </Container>
      </Section>
    </>
  );
}
