import Text from "@/registry/nextjs/components/text";
import "@/registry/nextjs/components/sticker/sticker.css";
import { getOnToken } from "@/registry/universal/lib/colorUtils";

/**
 * Props for the LkSticker component.
 * 
 * @param fontClass - Optional font class styling for the sticker text
 * @param bgColor - Optional background color with on-token support for the sticker
 * @param children - Optional React nodes to render inside the sticker
 * @param className - Optional CSS class name (note: internal logic controls rendering order)
 */
interface LkStickerProps extends React.HTMLAttributes<HTMLDivElement> {
  fontClass?: LkFontClass;
  bgColor?: LkColor; // supports all LkColors instead of only those with on-token support
  children?: React.ReactNode;
  className?: string; // explicitly extracting because internal logic controls its rendering order
}

export default function Sticker({
  fontClass = "label",
  bgColor = "primarycontainer",
  children,
  className,
  ...restProps
}: LkStickerProps) {
  return (
    <div data-lk-component="sticker" {...restProps} className={`bg-${bgColor} color-${getOnToken(bgColor)} ${className || ""}`}>
      <Text fontClass={fontClass}>{children || "Sticker"}</Text>
    </div>
  );
}
