import { SiteHeader } from "@/components/site-header";
import { ComponentMosaic } from "@/app/docs/lib/component-mosaic";
import { ThemePanel } from "@/app/docs/theme-panel/theme-panel";

export default function PlayGround() {
  return (
    <div className="flex-v h-fullscreen overflow-hidden">
      <SiteHeader />
      <div className="flex flex-row items-start flex-grow overflow-hidden">
        <ThemePanel mode="sidebar" />
        <div className="overflow-auto h-full flex flex-col flex-grow items-center">
          <ComponentMosaic />
        </div>
      </div>
    </div>
  );
}
