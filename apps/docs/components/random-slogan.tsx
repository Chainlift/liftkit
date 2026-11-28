"use client";

import { useEffect, useState } from "react";
import { SLOGANS } from "@/content/slogans";
import { WaveText } from "./wave-text";

/**
 * The home page slogan: a random line from content/slogans.ts on every page load, with the wave on it.
 *
 * The site is statically built, so the choice has to happen in the browser. The first slogan is in the built HTML
 * (for crawlers and no-JS visitors) but stays hidden until the random one is picked after load, which avoids a flash
 * of the wrong slogan.
 */
export function RandomSlogan({ className }: { className?: string }) {
  const [slogan, setSlogan] = useState<string | null>(null);

  useEffect(() => {
    if (SLOGANS.length > 0) setSlogan(SLOGANS[Math.floor(Math.random() * SLOGANS.length)]);
  }, []);

  if (SLOGANS.length === 0) return null;

  return (
    <WaveText
      key={slogan ?? "initial"}
      as="h1"
      className={className}
      style={slogan === null ? { visibility: "hidden" } : undefined}
    >
      {slogan ?? SLOGANS[0]}
    </WaveText>
  );
}
