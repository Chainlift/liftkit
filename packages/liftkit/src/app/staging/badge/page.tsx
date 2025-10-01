import React from "react";
import Row from "@/registry/nextjs/components/row";
import Badge from "@/registry/nextjs/components/badge";
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


  return (
    <div>
      <Row>
        {buttonColors.map((color) => (
          <Badge key={color} color={color} scale="lg" iconStrokeWidth={1} />
        ))}
      </Row>
      <Row>
        {buttonColors.map((color) => (
          <Badge key={color} color={color}/>
        ))}
      </Row>
    </div>
  );
}
