import { DocsShell } from "@/app/docs/lib/docs-shell";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <DocsShell>{children}</DocsShell>;
}
