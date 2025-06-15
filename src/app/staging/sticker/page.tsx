import Column from "@/registry/nextjs/components/column";
import Sticker from "@/registry/nextjs/components/sticker";
import { LkColors } from "@/registry/universal/lib/utils/debugUtils";

export default function StickerStaging() {
  return (
    <>
      <Column gap="md">
        {LkColors.map((color) => (
          <Sticker key={color} bgColor={color}>
            {color}
          </Sticker>
        ))}
      </Column>
    </>
  );
}
