"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./theme-context";
import type { Scheme } from "./types";

/** The scheme being shown and edited: the forced color mode, or the system's preference while on System. */
export function useScheme(): Scheme {
  const { state } = useTheme();
  const [systemDark, setSystemDark] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystemDark(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  if (state.colorMode !== "system") return state.colorMode;
  return systemDark ? "dark" : "light";
}
