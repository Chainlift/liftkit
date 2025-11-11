"use client";
import { Grid } from "@/registry/nextjs/components/grid";
import { Container } from "@/registry/nextjs/components/container";
import { Section } from "@/registry/nextjs/components/section";
import Sticker from "@/registry/nextjs/components/sticker";
import { LkColors } from "@/registry/universal/lib/utils/debugUtils";
import Column from "@/registry/nextjs/components/column";
import { Row } from "@/registry/nextjs/components/row";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/nextjs/components/tabs-radix";
import { Card } from "@/registry/nextjs/components/card";

export default function TabsStaging() {
  return (
    <>
      <Section padding="md">
        <Container>
          <h1 className="display2-bold mb-md">Vertical Orientation</h1>
          <Tabs defaultValue="account" className="rounded-md shadow-md overflow-hidden" orientation="vertical">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card scaleFactor="title1">
                <p>Hello world! I'm a card.</p>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card scaleFactor="title1">
                <p>Hello world! I'm a card.</p>
              </Card>
            </TabsContent>
          </Tabs>
        </Container>
      </Section>
      <Section padding="md">
        <Container>
          <h1 className="display2-bold mb-md">Horizontal Orientation</h1>
          <Tabs defaultValue="account" className="rounded-md shadow-md overflow-hidden" orientation="horizontal">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card scaleFactor="title1">
                <p>Hello world! I'm a card.</p>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card scaleFactor="title1">
                <p>Hello world! I'm a card.</p>
              </Card>
            </TabsContent>
          </Tabs>
        </Container>
      </Section>
    </>
  );
}
