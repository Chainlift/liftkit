import { getDocsNav } from "@/lib/docs-nav";
import Link from "next/link";
import { TableOfContents } from "@/components/mdx/table-of-contents";
import { Table } from "lucide-react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const nav = getDocsNav();

  return (
    <div className="flex justify-center">
      <aside style={{ padding: 16, borderRight: "1px solid #eee", width: "240px" }}>
        <nav>
          {nav.map((item) => (
            <div key={item.href}>
              <Link href={item.href}>{item.title}</Link>
              {item.children?.map((c) => (
                <div key={c.href} style={{ paddingLeft: 12 }}>
                  <Link href={c.href}>{c.title}</Link>
                </div>
              ))}
            </div>
          ))}
        </nav>
      </aside>
      <main style={{ minWidth: "0px", maxWidth: "80ch", flex: "1", width: "240px" }}>{children}</main>
      <aside className="w-5xl">
        <TableOfContents />
      </aside>
    </div>
  );
}
