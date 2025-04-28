import Grid from "@/liftkit/components/grid";
import NavBar from "@/liftkit/components/navbar";
import { getDirectoryContents } from "@/lib/fs";
import Column from "@/liftkit/components/column";
import MenuItem from "@/liftkit/components/menu-item";
import LkLink from "@/localComponents/LkLink";

interface Component {
  title: string;
  slug: string;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/docs/${slug}.mdx`);

  console.log(getDirectoryContents("src/content/docs"));
  const components: Component[] = getDirectoryContents("src/content/docs");

  return (
    <div>
      <NavBar></NavBar>

      <Grid columns={5} gap={"xl"}>
        <Column>
          {components.map((component, index: number) => (
            <LkLink key={index} href={`/components/${component.slug}`}>
              <MenuItem>{component.slug}</MenuItem>
            </LkLink>
          ))}
        </Column>
        <div className="colspan-3">
          <Post />
        </div>
      </Grid>
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "faq" }];
}

export const dynamicParams = false;
