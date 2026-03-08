"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoldenBox } from "@/liftkit/component-definitions/goldenbox/goldenbox";
import { StateLayer } from "@/liftkit/component-definitions/state-layer/state-layer";
import type { getDocsNav } from "@/lib/docs-nav";
import "./nav-sidebar.css";

type NavItems = ReturnType<typeof getDocsNav>;

export function NavSidebar({ nav }: { nav: NavItems }) {
  const pathname = usePathname();

  return (
    <GoldenBox>
      <nav className="sidebar pb-2xl">
        {nav.map((item) => (
          <div key={item.href}>
            <Link href={item.href}>
              <div className={`px-sm relative overflow-hidden rounded-xs${pathname === item.href ? " bg-error" : ""}`}>
                <h2 className="heading my-xs">{item.title}</h2>
                <StateLayer />
              </div>
            </Link>
            {item.children?.map((c) => (
              <Link key={c.href} href={c.href}>
                <div
                  className={`px-sm py-2xs relative overflow-hidden rounded-2xs${pathname === c.href ? " bg-surfacecontainerhigh" : ""}`}
                >
                  <span className="callout">{c.title}</span>
                  <StateLayer />
                </div>
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </GoldenBox>
  );
}
