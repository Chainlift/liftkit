import { ComponentMosaic } from "@/app/docs/lib/component-mosaic";
import { ThemePanel } from "@/app/docs/theme-panel/theme-panel";


export default function PlayGround() {
  return (
    <div className="flex flex-row items-start h-fullscreen">
      <ThemePanel mode="sidebar" />
      <div className="overflow-auto h-fullscreen  flex flex-col flex-grow items-center" >
        <ComponentMosaic />
      </div>
    </div>
  );
}
