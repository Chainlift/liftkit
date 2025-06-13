import Container from "@/registry/nextjs/components/containers";
import Grid from "@/registry/nextjs/components/grid";
import Section from "@/registry/nextjs/components/section";

export default function GridStaging() {
  return (
    <>
      <Section padding="md">
        <Container maxWidth="md">
          <h1 className="display1-bold m-bottom-md">Grid staging</h1>
          <div>
            <h2 className="display2 m-bottom-md">3 columns with no children</h2>
            <Grid columns={3} gap="md" autoResponsive></Grid>
          </div>
           <div>
            <h2 className="display2 m-bottom-md">12 columns with no children</h2>
            <Grid columns={12} gap="md" autoResponsive></Grid>
          </div>
        </Container>
      </Section>
    </>
  );
}
