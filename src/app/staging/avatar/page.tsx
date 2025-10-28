// app/avatar/page.tsx

import { Avatar, AvatarImage, AvatarFallback } from "@/registry/nextjs/components/avatar";

export function AvatarDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: "3rem" }}>
      <Avatar>
        <AvatarImage src="/logomark.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Avatar style={{ borderRadius: "0.5rem" }}>
        <AvatarImage src="/logomark.png" alt="@evilrabbit" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>

      <div style={{ display: "flex", marginLeft: "-0.5rem" }}>
        <Avatar style={{ border: "2px solid var(--background)", filter: "grayscale(1)" }}>
          <AvatarImage src="/logomark.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar style={{ border: "2px solid var(--background)", filter: "grayscale(1)", marginLeft: "-0.5rem" }}>
          <AvatarImage src="/logomark.png" alt="@maxleiter" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar style={{ border: "2px solid var(--background)", filter: "grayscale(1)", marginLeft: "-0.5rem" }}>
          <AvatarImage src="/logomark.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Avatar Examples</h1>
      <AvatarDemo />
    </main>
  );
}
