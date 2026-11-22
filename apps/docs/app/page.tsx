import Link from "next/link";
import { Button, Container, Section } from "liftkit";
import { SiteHeader } from "@/components/site-header";
import { SiteSearch } from "@/components/site-search";
import { ComponentMosaicV2 } from "@/app/docs/lib/component-mosaic-v2";
import { LiftKitLogo } from "@/components/liftkit-logo";
import { RandomSlogan } from "@/components/random-slogan";

export default function Home() {
  return (
    <div className="w-full">
      <SiteHeader>
        <SiteSearch />
      </SiteHeader>
      <Section className="text-align-center" padding="3xl">
        <Container maxWidth="none" className="items-center">
          <div className="flex-v">
            <LiftKitLogo className="w-full" />
            <RandomSlogan className="display2-bold mt-sm mb-sm color-onsurfacelow" />
          </div>
          <div>
            <Button fontClass="title3" className="self-start" render={<Link href="/docs" />} nativeButton={false}>
              Get started
            </Button>
          </div>
        </Container>
      </Section>
      <Section padding="2xl">
        <ComponentMosaicV2 />
      </Section>
    </div>
  );
}
