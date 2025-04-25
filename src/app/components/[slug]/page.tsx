import Grid from "@/liftkit/components/grid";
import NavBar from "@/liftkit/components/navbar";
import { getDirectoryContents } from "@/lib/fs";
import Column from "@/liftkit/components/column";
import MenuItem from "@/liftkit/components/menu-item";
import LkLink from "@/localComponents/LkLink";
import Badge from "@/liftkit/components/badge";
import Sticker from "@/liftkit/components/sticker";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/components/${slug}.mdx`);

  console.log(getDirectoryContents("src/content/components"));
  const components = getDirectoryContents("src/content/components");

  return (
    <div>
      <NavBar></NavBar>

      <Grid columns={5} gap={"xl"}>
        <Column>
          {components.map((component: any, index: number) => (
            <LkLink key={index} href={`/components/${component.slug}`}>
              <MenuItem>{component.slug}</MenuItem>
            </LkLink>
          ))}
        </Column>
        <div className="colspan-3">
          <Badge color="errorcontainer" scale="lg" className="test"></Badge>
          <Sticker></Sticker>
          <Post />
        </div>
      </Grid>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: "section" },
    // TODO: fix dynamic components section.
    // { slug: "container" },
    { slug: "grid" },
    { slug: "badge" },
    { slug: "button" },
    { slug: "card" },
    { slug: "column" },
    { slug: "containers" },
    { slug: "dropdown-chip" },
    { slug: "dropdown-list" },
    { slug: "heading" },
    { slug: "icon-button" },
    { slug: "icon" },
    { slug: "image" },
    { slug: "menu-chip" },
    { slug: "menu-item" },
    { slug: "menu-list" },
    { slug: "navbar" },
    { slug: "paragraph" },
    { slug: "row" },
    { slug: "select" },
    { slug: "snackbar" },
    { slug: "sticker" },
    //  { slug: "tab-content" },
    { slug: "tab-link" },
    // { slug: "tab-menu" },
    // { slug: "tabs" },
    { slug: "text-input" },
    { slug: "text" },
  ];
}

export const dynamicParams = false;
