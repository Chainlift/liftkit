"use client";
import Column from "@/registry/nextjs/components/column";
import Heading from "@/registry/nextjs/components/heading";
import Section from "@/registry/nextjs/components/section";
import Image from "@/registry/nextjs/components/image";
import Container from "@/registry/nextjs/components/container";
import Grid from "@/registry/nextjs/components/grid";

type LkAspectRatio =
  | "auto"
  | "1/1"
  | "2.39/1"
  | "2/1"
  | "16/9"
  | "3/2"
  | "4/3"
  | "5/4"
  | "1/2.39"
  | "1/2"
  | "9/16"
  | "4/5";

const aspects: LkAspectRatio[] = [
  "auto",
  "1/1",
  "2.39/1",
  "2/1",
  "16/9",
  "3/2",
  "4/3",
  "5/4",
  "1/2.39",
  "1/2",
  "9/16",
  "4/5",
];

const widths: LkSizeUnit[] = ["3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const;

const objectFitVals: React.CSSProperties["objectFit"][] = ["fill", "contain", "cover", "none", "scale-down"];

export default function ImageStaging() {
  return (
    <>
      <Section>
        <Heading tag="h2">Image Component Tests</Heading>

        {widths.map((width) => (
          <Container key={width}>
            <Column gap="md" className="w-full">
              <div className="title1-bold">Width: {width}</div>
              {aspects.map((aspect) => (
                <Grid key={width + aspect} columns={6} gap="md" style={{ width: "100%" }}>
                  <div>
                    <div className="heading mono">Aspect: {aspect}</div>
                  </div>
                  {objectFitVals.map((objectFit) => (
                    <div key={width + aspect + objectFit}>
                      <div className="caption">ObjectFit: {objectFit}</div>
                      <div style={{ outline: "1px solid var(--lk-info)" }}>
                        <Image src="/testimage.png" width={width} aspect={aspect} objectFit={objectFit} alt=""></Image>
                      </div>
                    </div>
                  ))}
                </Grid>
              ))}
            </Column>
            <div lk-component="divider" className="">
              <div lk-divider-element="line"></div>
            </div>
          </Container>
        ))}
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
