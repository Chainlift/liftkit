import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MdxTable, MdxTd, MdxTh } from "@/components/mdx/mdx-table";
import { readUtilities } from "../read-utilities";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return readUtilities().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const group = readUtilities().find((candidate) => candidate.slug === slug);
  return { title: group ? `${group.title} · LiftKit utilities` : "Utilities · LiftKit" };
}

/** One utility stylesheet: its classes and the CSS each one applies, read from the library at build time. */
export default async function UtilityPage({ params }: Params) {
  const { slug } = await params;
  const group = readUtilities().find((candidate) => candidate.slug === slug);
  if (!group) notFound();

  return (
    <>
      <h1 className="title1-bold mb-sm mt-none">{group.title}</h1>
      <p className="body mb-md">
        {group.classes.length} utility {group.classes.length === 1 ? "class" : "classes"} from <code>{group.file}</code>.
        They come with <code>liftkit/styles.css</code> and work on any element.
      </p>
      <MdxTable>
        <thead>
          <tr>
            <MdxTh>Class</MdxTh>
            <MdxTh>CSS</MdxTh>
          </tr>
        </thead>
        <tbody>
          {group.classes.map((utility, index) => (
            <tr key={`${utility.selector}-${index}`}>
              <MdxTd>
                <code>{utility.selector}</code>
              </MdxTd>
              <MdxTd>
                {utility.declarations.map((declaration, line) => (
                  <code key={line} className="mono" style={{ display: "block" }}>
                    {declaration};
                  </code>
                ))}
              </MdxTd>
            </tr>
          ))}
        </tbody>
      </MdxTable>
    </>
  );
}
