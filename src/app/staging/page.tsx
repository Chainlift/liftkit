import React from "react";
import NavBar from "@/registry/nextjs/components/navbar";
import Button from "@/registry/nextjs/components/button";
import Section from "@/registry/nextjs/components/section";
import Heading from "@/registry/nextjs/components/heading";
import Grid from "@/registry/nextjs/components/grid";
import Row from "@/registry/nextjs/components/row";
import Column from "@/registry/nextjs/components/column";
export default function Staging() {
  const buttonColors: LkColorWithOnToken[] = [
    "primary",
    "secondary",
    "tertiary",
    "error",
    "warning",
    "info",
    "success",
    "primarycontainer",
    "secondarycontainer",
    "tertiarycontainer",
    "errorcontainer",
    "warningcontainer",
    "infocontainer",
    "successcontainer",
    "surface",
    "surfacecontainerlowest",
    "surfacecontainerlow",
    "surfacecontainerhigh",
    "surfacecontainerhighest",
    "surfacevariant",
    "inversesurface",
    "background",
  ];

  const buttonVariants = ["fill", "outline", "text"];

  return (
    <div>
      <Section>
        <Heading tag="h1" fontClass="display1-bold" className="text-align-center">
          Hello world!
        </Heading>
      </Section>
      <Row alignItems="start" gap="md" className="w-full" wrapChildren={true}>
        {(() => {
          const sizes = ["sm", "md", "lg"];
          const iconConfigs = [
            { startIcon: undefined, endIcon: undefined, label: "No Icons" },
            { startIcon: "circle", endIcon: undefined, label: "Start Icon" },
            { startIcon: undefined, endIcon: "circle", label: "End Icon" },
            { startIcon: "circle", endIcon: "circle", label: "Both Icons" },
          ];

          const generateButtons = (
            colors: LkColorWithOnToken[],
            variants: string[],
            sizes: string[],
            iconConfigs: any[],
            colorIndex = 0,
            variantIndex = 0,
            sizeIndex = 0,
            iconIndex = 0
            //adding ts-ignore because it's reporting JSX isn't a recognized namespace (it is)
            //@ts-ignore
          ): JSX.Element[] => {
            if (colorIndex >= colors.length) return [];
            if (variantIndex >= variants.length)
              return generateButtons(colors, variants, sizes, iconConfigs, colorIndex + 1, 0, 0, 0);
            if (sizeIndex >= sizes.length)
              return generateButtons(colors, variants, sizes, iconConfigs, colorIndex, variantIndex + 1, 0, 0);
            if (iconIndex >= iconConfigs.length)
              return generateButtons(colors, variants, sizes, iconConfigs, colorIndex, variantIndex, sizeIndex + 1, 0);

            const currentConfig = iconConfigs[iconIndex];
            const button = (
              <Button
                key={`${colorIndex}-${variantIndex}-${sizeIndex}-${iconIndex}`}
                label={`Button`}
                variant={variants[variantIndex] as any}
                color={colors[colorIndex]}
                size={sizes[sizeIndex] as any}
                startIcon={currentConfig.startIcon}
                endIcon={currentConfig.endIcon}
                opticIconShift={false}
              />
            );

            return [
              button,
              ...generateButtons(
                colors,
                variants,
                sizes,
                iconConfigs,
                colorIndex,
                variantIndex,
                sizeIndex,
                iconIndex + 1
              ),
            ];
          };

          return generateButtons(buttonColors, buttonVariants, sizes, iconConfigs);
        })()}
      </Row>
      <Row alignItems="start" gap="md" className="w-full" wrapChildren={true}>
        {/* Small Buttons */}

        <Column  justifyContent="start">
          {buttonColors.map((color, index) => (
            <Button
              key={index}
              label="Button"
              variant="fill"
              color={color}
              size="sm"
              startIcon="circle"
              opticIconShift={false}
            ></Button>
          ))}
        </Column>
        <Column >
          {buttonColors.map((color, index) => (
            <Button
              key={index}
              label="Button"
              variant="outline"
              color={color}
              size="sm"
              startIcon="circle"
              opticIconShift={false}
            ></Button>
          ))}
        </Column>
        <Column >
          {buttonColors.map((color, index) => (
            <Button
              key={index}
              label="Button"
              variant="text"
              color={color}
              size="sm"
              startIcon="circle"
              opticIconShift={false}
            ></Button>
          ))}
        </Column>

        {/* Normal Buttons */}

        <Column >
          {buttonColors.map((color, index) => (
            <Button key={index} label="Button" variant="fill" color={color} size="md" startIcon="circle"></Button>
          ))}
        </Column>
        <Column >
          {buttonColors.map((color, index) => (
            <Button key={index} label="Button" variant="outline" color={color} size="md" startIcon="circle"></Button>
          ))}
        </Column>
        <Column >
          {buttonColors.map((color, index) => (
            <Button key={index} label="Button" variant="text" color={color} size="md" startIcon="circle"></Button>
          ))}
        </Column>

        {/* Large buttons */}

        <Column >
          {buttonColors.map((color, index) => (
            <Button
              key={index}
              label="Button"
              variant="fill"
              color={color}
              size="lg"
              startIcon="circle"
              opticIconShift={false}
            ></Button>
          ))}
        </Column>
        <Column >
          {buttonColors.map((color, index) => (
            <Button
              key={index}
              label="Button"
              variant="outline"
              color={color}
              size="lg"
              startIcon="circle"
              opticIconShift={false}
            ></Button>
          ))}
        </Column>
        <Column >
          {buttonColors.map((color, index) => (
            <Button
              key={index}
              label="Button"
              variant="text"
              color={color}
              size="lg"
              startIcon="circle"
              opticIconShift={false}
            ></Button>
          ))}
        </Column>
      </Row>
    </div>
  );
}
