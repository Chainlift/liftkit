import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Avatar_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Avatar"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { Avatar, AvatarImage, AvatarFallback } from "@/liftkit/ui";

export function ExampleAvatar() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <BaseAvatar.Root>
        <BaseAvatar.Image
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
          width="48"
          height="48"
        />
        <BaseAvatar.Fallback>LT</BaseAvatar.Fallback>
      </BaseAvatar.Root>
      <BaseAvatar.Root>LT</BaseAvatar.Root>
    </div>
  );
}

export function ExampleAvatarWrapped() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
          width="48"
          height="48"
        />
        <AvatarFallback>LT</AvatarFallback>
      </Avatar>
      <Avatar>LT</Avatar>
    </div>
  );
}
`;
}
