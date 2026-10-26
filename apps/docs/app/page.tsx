import Link from "next/link";
import { Button, Container, Section } from "@chainlift/liftkit";
import { SiteHeader } from "@/components/site-header";
import { ComponentMosaicV2 } from "@/app/docs/lib/component-mosaic-v2";

export default function Home() {
  return (
    <div className="w-full">
      <SiteHeader />
      <Section className="text-align-center" padding="3xl">
        <Container maxWidth="none" className="items-center">
          <h1 className="display2-bold mb-xs">The design system that maintains itself.</h1>
          <p className="title2 mb-md">
            LiftKit is a design system built on top of BaseUI that enforces its own standards.
          </p>
          <div>
            <Button fontClass="heading" className="self-start" render={<Link href="/docs" />} nativeButton={false}>
              Get started
            </Button>
          </div>
        </Container>
      </Section>
      <Section>
        <ComponentMosaicV2 />
      </Section>
    </div>
  );
}
