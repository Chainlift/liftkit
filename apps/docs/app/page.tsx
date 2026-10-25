import { DocsShell } from "@/app/docs/lib/docs-shell";
import DocsHome from "@/app/docs/page.mdx";

export default function Home() {
  return (
    <DocsShell>
      <DocsHome />
    </DocsShell>
  );
}
