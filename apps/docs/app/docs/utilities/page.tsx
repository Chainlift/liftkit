import { MdxTable, MdxTd, MdxTh } from "@/components/mdx/mdx-table";
import { readUtilities } from "./read-utilities";

export const metadata = {
  title: "Utilities",
  description: "Every LiftKit utility class.",
};

function slugFromFile(file: string) {
  return file.replace(/\.css$/, "");
}

/** Every utility class, read from the library's stylesheets at build time. */
export default function UtilitiesPage() {
  const groups = readUtilities();
  const total = groups.reduce((sum, group) => sum + group.classes.length, 0);

  return (
    <>
      <h1 className="title1-bold mb-sm mt-none">Utilities</h1>
      <p className="body mb-md">
        LiftKit ships {total} utility classes. They come with <code>liftkit/styles.css</code> and work on any element.
        Spacing and size classes use the <code>--lk-base-*</code> ladder, so they scale with the element&apos;s font
        size.
      </p>
      {groups.map((group) => (
        <section key={group.file}>
          <h2 id={slugFromFile(group.file)} className="title2-bold mb-sm mt-lg">
            {group.title}
          </h2>
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
        </section>
      ))}
    </>
  );
}
