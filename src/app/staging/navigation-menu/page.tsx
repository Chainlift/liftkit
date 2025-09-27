// app/navigation-menu/page.tsx

import {
  NavigationMenu,
  NavigationMenuSub,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "@/registry/nextjs/components/navigation-menu"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Navigation Menu Example</h1>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul style={{ padding: 12, listStyle: "none" }}>
                <li>
                  <NavigationMenuLink href="#">Product A</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#">Product B</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#">Product C</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Company</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul style={{ padding: 12, listStyle: "none" }}>
                <li>
                  <NavigationMenuLink href="#">About</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#">Careers</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#">Press</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#">Contact</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>
    </main>
  )
}
