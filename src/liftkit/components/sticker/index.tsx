// import { getOnToken } from "@/lib/colorUtils";
import Text from "@/liftkit/components/text";

interface LkStickerProps extends React.HTMLAttributes<HTMLDivElement> {
  content?: string;
  // color?: LkColorWithOnToken; // Should match allowed subset of LkColor from Button
}

export default function Sticker({
  content = "Sticker",
  // color = "primarycontainer",
  ...restprops
}: LkStickerProps) {
  // const iconColor = getOnToken(color) as LkColor;

  return (
    <div lk-component="sticker" {...restprops}>
      <Text fontClass="label" content={content} />
    </div>
  );
}
