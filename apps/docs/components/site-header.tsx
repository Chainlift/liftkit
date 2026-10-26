"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Icon, NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@chainlift/liftkit";

const GITHUB_URL = "https://github.com/Chainlift/liftkit";

const PAGES: { label: string; href: string; isActive: (pathname: string) => boolean }[] = [
  { label: "Home", href: "/", isActive: (p) => p === "/" },
  { label: "Docs", href: "/docs", isActive: (p) => p.startsWith("/docs") },
  { label: "Theme Generator", href: "/playground", isActive: (p) => p.startsWith("/playground") },
];

/** Site-wide top navigation, shared by every page. */
export function SiteHeader() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {PAGES.map(({ label, href, isActive }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink active={isActive(pathname)} render={<NextLink href={href} />}>
              {label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-h items-center gap-xs"
          >
            <Icon name="github" aria-hidden="true" />
            View on GitHub
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
