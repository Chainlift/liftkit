import { SiteHeader } from "@/components/site-header";
import { ComponentMosaic } from "@/app/docs/lib/component-mosaic";
import { ThemePanel } from "@/app/docs/theme-panel/theme-panel";

export default function Home() {
  return (
    <div className="w-full">
      <SiteHeader />
      <ThemePanel />
      <ComponentMosaic />
    </div>
  );
}
