import { getDocsNav } from "@/lib/docs-nav";
import Link from "next/link";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const nav = getDocsNav();

  return (
    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr 280px" }}>
      <aside style={{ padding: 16, borderRight: "1px solid #eee" }}>
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
      <main style={{ padding: 24 }}>{children}</main>
      <aside style={{ padding: 16, borderLeft: "1px solid #eee" }}></aside>
    </div>
  );
}
