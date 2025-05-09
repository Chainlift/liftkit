import Text from "@/liftkit/components/text";

interface LkStickerProps extends React.HTMLAttributes<HTMLDivElement> {
  content?: string;
  color?:  LkColorWithOnToken
 
}

export default function Sticker({
  content = "Sticker",
  color = "primarycontainer",
  ...restProps
}: LkStickerProps) {

  return (
    <div lk-component="sticker" {...restProps} lk-sticker-color={color}>
      <Text fontClass="label" content={content} />
    </div>
  );
}
