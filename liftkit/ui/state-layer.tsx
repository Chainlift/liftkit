export interface LkStateLayerProps {
  bgColor?: LkColor | "currentColor";
  forcedState?: "hover" | "active" | "focus"; // Used when you need a static state controlled by something higher, like a select field that keeps actively-selected options grayed out
}