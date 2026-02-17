import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import styles from "./avatar.module.css";
import { Avatar, AvatarImage, AvatarFallback } from "@/liftkit/ui/avatar/avatar";

export default function ExampleAvatar() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <BaseAvatar.Root className={styles.Root}>
        <BaseAvatar.Image
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
          width="48"
          height="48"
          className={styles.Image}
        />
        <BaseAvatar.Fallback className={styles.Fallback}>LT</BaseAvatar.Fallback>
      </BaseAvatar.Root>
      <BaseAvatar.Root className={styles.Root}>LT</BaseAvatar.Root>
    </div>
  );
}

export function ExampleAvatarWrapped() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Avatar className={styles.Root}>
        <AvatarImage
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
          width="48"
          height="48"
          className={styles.Image}
        />
        <AvatarFallback className={styles.Fallback}>LT</AvatarFallback>
      </Avatar>
      <Avatar className={styles.Root}>LT</Avatar>
    </div>
  );
}