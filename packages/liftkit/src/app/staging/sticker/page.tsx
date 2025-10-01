import Grid from "@/registry/nextjs/components/grid";
import Container from "@/registry/nextjs/components/container";
import Section from "@/registry/nextjs/components/section";
import Sticker from "@/registry/nextjs/components/sticker";
import { LkColors } from "@/registry/universal/lib/utils/debugUtils";

export default function StickerStaging() {
  return (
    <>
      <Section padding="md">
        <Container>
          <h1 className="display2-bold mb-md">Sticker Staging Area</h1>
          <Grid columns={4} gap="md" style={{ alignItems: "start", justifyItems: "start" }}>
            {LkColors.map((color) => (
              <Sticker key={color} bgColor={color}>
                {color}
              </Sticker>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
