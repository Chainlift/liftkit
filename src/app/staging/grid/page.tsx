import Container from "@/registry/nextjs/components/containers";
import Grid from "@/registry/nextjs/components/grid";
import Section from "@/registry/nextjs/components/section";

export default function GridStaging() {
  return (
    <>
      <Section padding="md">
        <Container maxWidth="md">
          <Grid columns={3} gap="md" autoResponsive></Grid>
        </Container>
      </Section>
    </>
  );
}
