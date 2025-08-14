"use client";
import Column from "@/registry/nextjs/components/column";
import Row from "@/registry/nextjs/components/row";
import Card from "@/registry/nextjs/components/card";
import ThemeController from "@/registry/nextjs/components/theme-controller";
import Section from "@/registry/nextjs/components/section";
import Container from "@/registry/nextjs/components/container";
import Grid from "@/registry/nextjs/components/grid";
import Image from "@/registry/nextjs/components/image";

export default function TailwindTest() {

  const lkSizes: LkSizeUnit[] = ["3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"];
  const lkColors: LkColor[] = [
    "primary",
    "secondary",
    "tertiary",

    "onprimary",
    "onsecondary",
    "ontertiary",

    "primarycontainer",
    "secondarycontainer",
    "tertiarycontainer",

    "onprimarycontainer",
    "ontertiarycontainer",
    "onsecondarycontainer",

    "primaryfixed",
    "secondaryfixed",
    "tertiaryfixed",

    "onprimaryfixed",
    "onsecondaryfixed",
    "ontertiaryfixed",

    "primaryfixeddim",
    "secondaryfixeddim",
    "tertiaryfixeddim",

    "onprimaryfixedvariant",
    "onsecondaryfixedvariant",
    "ontertiaryfixedvariant",

    "background",
    "onbackground",
    "surface",


    "onsurface",
    "surfacevariant",
    "onsurfacevariant",

    "surfacecontainerlowest",
    "surfacecontainerlow",
    "surfacecontainer",
    "surfacecontainerhigh",
    "surfacecontainerhighest",

    "surfacedim",
    "surfacebright",

    "error",
    "warning",
    "success",

    "onerror",
    "onwarning",
    "onsuccess",

    "errorcontainer",
    "warningcontainer",
    "successcontainer",

    "onerrorcontainer",
    "onwarningcontainer",
    "onsuccesscontainer",

    "info",
    "oninfo",
    "infocontainer",
    "oninfocontainer",

    "inversesurface",
    "inverseonsurface",
    "inverseprimary",

    "outline",
    "outlinevariant",
    "shadow",
    "scrim"
  ];

  const lkTypography: LkFontClass[] = [
    "display1",
    "display1-bold",
    "display2",
    "display2-bold",
    "title1",
    "title1-bold",
    "title2",
    "title2-bold",
    "title3",
    "title3-bold",
    "heading",
    "heading-bold",
    "subheading",
    "subheading-bold",
    "body",
    "body-bold",
    "callout",
    "callout-bold",
    "label",
    "label-bold",
    "caption",
    "caption-bold",
    "capline",
    "capline-bold",
  ];

  // you can use any number here to customize opacity
  const opacities = ["opacity-100", "opacity-75", "opacity-43", "opacity-23", "opacity-3", "opacity-0"]
  const colorOpacities = ["bg-tertiary/100", "bg-tertiary/75", "bg-tertiary/43", "bg-tertiary/23", "bg-tertiary/3", "bg-tertiary/0"]

  const aspects = [
    "aspect-auto",
    "aspect-1/1",
    "aspect-2.39/1",
    "aspect-2/1",
    "aspect-16/9",
    "aspect-3/2",
    "aspect-4/3",
    "aspect-5/4",
    "aspect-1/2.39",
    "aspect-1/2",
    "aspect-9/16",
    "aspect-4/5",
  ];

  const objectFitVals = ["object-fill", "object-contain", "object-cover"];


  return (
    <>
      <ThemeController />
      <Section padding="md">
        <Container maxWidth="md">
          <h1 className="display2-bold mb-md">Tailwind staging</h1>

          <h2 className="heading mb-sm">Gap tests (taiwind first)</h2>
          <Row className="gap-lg flex-wrap">
            {lkSizes.map((size) => (
              <Column className="gap-sm" key={size}>

                <h3 className='body'>{size}</h3>

                <div className="flex flex-col gap-md">
                  <Grid columns={1} gap={size as LkSizeUnit} className={`gap-${size} bg-ontertiarycontainer`}>
                    <div data-lk-component="placeholder-block"></div>
                    <div data-lk-component="placeholder-block"></div>
                  </Grid>
                  <Grid columns={1} gap={size as LkSizeUnit} className="bg-onsecondarycontainer">
                    <div data-lk-component="placeholder-block"></div>
                    <div data-lk-component="placeholder-block"></div>
                  </Grid>
                </div>

              </Column>
            ))}

          </Row>
        </Container>
      </Section>

      <Section padding="md" className="bg-surfacecontainer">
        <Container maxWidth="md">
          <h2 className="heading mb-sm">Colors test</h2>

          <Row className="gap-lg flex-wrap">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-md">
              {lkColors.map((color, index) => (
                <div key={color} className={`${[23, 33, 51].includes(index) && 'mb-3xl'}`}>
                  <h3 className='body'>{color}</h3>
                  <div className={`bg-${color} px-sm py-xl rounded-md`}></div>
                </div>
              ))}
            </div>
          </Row>
        </Container>
      </Section>

      <Section padding="md" className="bg-surfacecontainer">
        <Container maxWidth="md">
          <h2 className="heading mb-sm">Opacity test</h2>

          <Row className="gap-lg flex-wrap">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-md">
              {opacities.map((opacity) => (
                <div key={opacity}>
                  <h3 className='body'>{opacity}</h3>
                  <div className={`bg-success ${opacity} px-sm py-xl rounded-md`}></div>
                </div>
              ))}

              {colorOpacities.map((color) => (
                <div key={color}>
                  <h3 className='body'>{color}</h3>
                  <div className={`${color} px-sm py-xl rounded-md`}></div>
                </div>
              ))}
            </div>
          </Row>
        </Container>
      </Section>


      <Section padding="md">
        <Container maxWidth="md">
          <h2 className="heading mb-sm">Radius (Rounded) test</h2>

          <Row className="gap-lg flex-wrap">
            <div className="w-full grid grid-cols-5 gap-md">
              {lkSizes.map((size) => (
                <div key={size}>
                  <h3 className='body'> rounded-{size}</h3>
                  <div className={`px-md h-50 rounded-${size} bg-warningcontainer border-2 border-warning`}></div>
                </div>
              ))}
            </div>
          </Row>
        </Container>
      </Section>

      <Section padding="md" className="bg-surfacecontainer">
        <Container maxWidth="md">
          <h2 className="heading mb-xl">Typography test</h2>

          <Grid columns={2} className="gap-lg items-center">
            {lkTypography.map((size) => (
              <p key={size} className={`${size} capitalize`}>{size}</p>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section padding="md" className="bg-inversesurface">
        <Container maxWidth="md">
          <h2 className="heading mb-xl">Shadow test</h2>

          <Grid columns={3} gap="xl">
            {['sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
              <div key={size}>
                <h3 className='body'> rounded-{size}</h3>

                <div key={size} className={`shadow-${size} bg-onsurface px-md p-lg`}>
                </div>
              </div>
            ))}
          </Grid>
        </Container>

      </Section>

      <Section padding="md" className="bg-inversesurface">
        <Container maxWidth="md">
          <h2 className="heading mb-xl">Card test</h2>

          <Grid columns={2} gap="lg">
            {lkTypography
              .filter(className => !className.includes('-bold'))
              .map((size) => (
                <Card key={size} scaleFactor={size} opticalCorrection="y" className="shadow-2xl text-onsurface capitalize" material="flat">
                  <h2 className={`${size}`}>{size}</h2>
                  <p className="subheading">Subheading</p>
                  <p className="body mt-sm">
                    Chainlift is a company that makes design kits for programmers. Founded in 2021 by Garrett Mack from
                    his attic in Irvine.
                  </p>
                </Card>
              ))}
          </Grid>
        </Container>
      </Section>

      <Section padding="md">
        <h2 className="heading mb-xl">Image component test</h2>


        <Container>
          <Column gap="md" className="w-full">

            {[...lkSizes,].map((width) => (
              <Container key={width}>
                <Column gap="md" className="w-full">
                  <div className="title1-bold mt-md">Width: {width}</div>
                  {aspects.map((aspect) => (
                    <Grid key={width + aspect} className="w-full gap-md grid-cols-4">

                      <div className="heading">{aspect}</div>

                      {objectFitVals.map((objectFit) => (
                        <div key={width + aspect + objectFit}>
                          <div className="caption">{objectFit}</div>
                          <div className="outline outline-info">
                            <Image
                              src="/testimage.png"
                              className={`${aspect} ${objectFit}`}
                              width={width}
                              alt={`${aspect} ratio with ${objectFit} `}
                            />
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
          </Column>
          <div lk-component="divider" className="">
            <div lk-divider-element="line"></div>
          </div>
        </Container>

      </Section>
    </>
  );
}
