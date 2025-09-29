"use client";

import Container from "@/registry/nextjs/components/container";
import Grid from "@/registry/nextjs/components/grid";
import Section from "@/registry/nextjs/components/section";
import Column from "@/registry/nextjs/components/column";

export default function GridStaging() {
  const lkSizes = ["3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"];

  return (
    <>
      <Section padding="md">
        <Container maxWidth="md">
          <h1 className="display1-bold mb-lg">Grid staging</h1>
          <div>
            <h2 className="display2-bold mb-md">Column count tests</h2>
            <Column gap="3xl" alignItems="stretch">
              <div>
                <h3 className="title2 mb-md">3 columns with no children</h3>
                <Grid columns={3} gap="md"></Grid>
              </div>
              <div>
                <h3 className="title2 mb-md">12 columns with no children</h3>
                <Grid columns={12} gap="md"></Grid>
              </div>
              <div>
                <h3 className="title2 mb-xs">50 columns with no children</h3>
                <p className="title3 color-error mb-xl">
                  Deliberately overflows in order to show how placeholders help show that.
                </p>
                <Grid columns={50} gap="md"></Grid>
              </div>
            </Column>
          </div>
          {/**TODO: Create a modular divider component from the following one, created ad-hoc during grid testing */}
          <div lk-component="divider" className="">
            <div lk-divider-element="line"></div>
          </div>
          <div>
            <h2 className="display2-bold mb-md">Gap tests</h2>
            <Column gap="3xl" alignItems="stretch">
              {lkSizes.map((size) => (
                <div key={size}>
                  <h3 className="title2 mb-md">gap={size}</h3>
                  <Grid columns={3} gap={size as LkSizeUnit}></Grid>
                </div>
              ))}
            </Column>
          </div>
          <div lk-component="divider" className="">
            <div lk-divider-element="line"></div>
          </div>
          <div>
            <h2 className="display2-bold mb-2xs">autoResponsive tests</h2>
            <p className="heading color-info mb-2xl">(Breakpoint: 480px)</p>
            <Column gap="3xl" alignItems="stretch">
              <div>
                <h3 className="title2 mb-md">autoResponsive=true</h3>
                <Grid columns={3} autoResponsive></Grid>
              </div>
              <div>
                <h3 className="title2 mb-md">autoResponsive=false</h3>
                <Grid columns={3}></Grid>
              </div>
            </Column>
          </div>
          <div lk-component="divider" className="">
            <div lk-divider-element="line"></div>
          </div>
          <div>
            <h2 className="display2-bold mb-2xs">class override tests</h2>
            <p className="heading color-info mb-2xl">(Breakpoint: 480px)</p>
            <Column gap="3xl" alignItems="stretch">
              <div>
                <h3 className="title2 mono mb-md">className=&quot;lk-debug--grid-override&quot;</h3>
                <ul>
                  <li>
                    If this doesn&apos;t look as expected, you got a className problem. Check that the prop spreaders
                    aren&apos;t creating conflicting attributes.
                  </li>
                  <li>Remember to manually change column count to whatever amount you need</li>
                </ul>
                <Grid columns={5} className="lk-debug--grid-override"></Grid>
              </div>
            </Column>
          </div>
        </Container>
      </Section>
      <style jsx>{`
        [lk-component="divider"] {
          display: flex;
          align-items: center;
          padding: var(--lk-size-3xl) 0px;

          [lk-divider-element="line"] {
            flex-grow: 1;
            height: 1px;
            background-color: var(--lk-outlinevariant);
          }
        }
      `}</style>
    </>
  );
}
