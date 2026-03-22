import * as React from "react";
import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu";
import { CircleAlertIcon, CircleCheckIcon, CircleDashedIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuPositioner,
  NavigationMenuLink,
  Icon,
} from "@/liftkit/component-definitions";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function ExampleNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built with Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="display-grid">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href} className="w-5xl">
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex items-center gap-2">
                      <Icon name="circle" aria-hidden="true" />
                      Backlog
                    </Link>
                  }
                />
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex items-center gap-2">
                      <Icon name="circle" aria-hidden="true" />
                      To Do
                    </Link>
                  }
                />
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex items-center gap-2">
                     <Icon name="chevron-down" aria-hidden="true"/>
                      Done
                    </Link>
                  }
                />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink render={<Link href="/docs">Docs</Link>} />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div>
              <div className="callout font-500 mb-xs">{title}</div>
              <div className="subheading color-onsurfacelow">{children}</div>
            </div>
          </Link>
        }
      />
    </li>
  );
}

function Link(props: BaseNavigationMenu.Link.Props) {
  return (
    <BaseNavigationMenu.Link
      render={
        // Use the `render` prop to render your framework's Link component
        // for client-side routing.
        // e.g. `<NextLink href={props.href} />` instead of `<a />`.
        <a />
      }
      {...props}
    />
  );
}

const overviewLinks = [
  {
    href: "/react/overview/quick-start",
    title: "Quick Start",
    description: "Install and assemble your first component.",
  },
  {
    href: "/react/overview/accessibility",
    title: "Accessibility",
    description: "Learn how we build accessible components.",
  },
  {
    href: "/react/overview/releases",
    title: "Releases",
    description: "See what’s new in the latest Base UI versions.",
  },
  {
    href: "/react/overview/about",
    title: "About",
    description: "Learn more about Base UI and our mission.",
  },
] as const;

const handbookLinks = [
  {
    href: "/react/handbook/styling",
    title: "Styling",
    description: "Base UI components can be styled with plain CSS, Tailwind CSS, CSS-in-JS, or CSS Modules.",
  },
  {
    href: "/react/handbook/animation",
    title: "Animation",
    description: "Base UI components can be animated with CSS transitions, CSS animations, or JavaScript libraries.",
  },
  {
    href: "/react/handbook/composition",
    title: "Composition",
    description: "Base UI components can be replaced and composed with your own existing components.",
  },
] as const;
