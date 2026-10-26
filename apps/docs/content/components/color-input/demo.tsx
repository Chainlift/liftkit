"use client";

import { useState } from "react";
import { ColorInput, type LkColorInputProps } from "@chainlift/liftkit";

export default function ColorInputDemo(knobs: Partial<LkColorInputProps>) {
  const [color, setColor] = useState("#0051e0");
  return <ColorInput value={color} onValueChange={setColor} aria-label="Brand color" {...knobs} />;
}
