"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { LiftKitLogo } from "@/components/liftkit-logo";
import { Icon, NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@chainlift/liftkit";

const GITHUB_URL = "https://github.com/Chainlift/liftkit";

const PAGES: {
  label: string;
  href: string;
  isActive: (pathname: string) => boolean;
}[] = [
  { label: "Docs", href: "/docs", isActive: (p) => p.startsWith("/docs") },
  {
    label: "Theme Generator",
    href: "/playground",
    isActive: (p) => p.startsWith("/playground"),
  },
];

/** Site-wide top navigation, shared by every page. */
export function SiteHeader() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-sm">
        <NavigationMenuItem>
          <NavigationMenuLink
            active={pathname === "/"}
            aria-label="LiftKit home"
            className="flex items-center color-onsurface"
            render={<NextLink href="/" />}
          >
            <LiftKitLogo className="h-md" />
          </NavigationMenuLink>
        </NavigationMenuItem>
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
