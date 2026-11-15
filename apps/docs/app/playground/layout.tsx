import { ThemeProvider } from "@/app/docs/theme-panel/theme-context";
import { ThemeCSSInjector } from "@/app/docs/theme-panel/theme-css-injector";
import { PanelThemeLock } from "@/app/docs/theme-panel/panel-theme-lock";

/** The theme is scoped to the Theme Generator: it's only provided and applied on this route. */
export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeCSSInjector />
      <PanelThemeLock />
      {children}
    </ThemeProvider>
  );
}
