import { Avatar, AvatarImage, AvatarFallback } from "@/liftkit/component-definitions";

export function ExampleAvatar() {
  return (
    <div className="flex items-center gap-md">
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
