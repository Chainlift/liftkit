import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { componentDocs } from "@/content/components/registry";
import { ComponentPreview } from "@/app/docs/lib/component-preview";
import { SubComponentSection } from "@/app/docs/lib/subcomponent-section";
import { SimpleCodeBlock } from "@/app/docs/lib/simple-code-block";
import { highlightCode } from "@/app/docs/lib/highlighted-code-server";
import { defaultKnobValues, renderDemoSource } from "@/app/docs/lib/demo-source";

const CONTENT_DIR = path.join(process.cwd(), "content", "components");
const LIFTKIT_CSS_DIR = path.join(process.cwd(), "node_modules", "@chainlift", "liftkit", "src", "css", "components");

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(componentDocs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { meta } = componentDocs[(await params).slug];
  return { title: `${meta.title} · LiftKit`, description: meta.description };
}

/** A component's optional notes.mdx: page-specific content shown after Installation. */
async function loadNotes(slug: string): Promise<React.ComponentType | null> {
  if (!fs.existsSync(path.join(CONTENT_DIR, slug, "notes.mdx"))) return null;
  return (await import(`@/content/components/${slug}/notes.mdx`)).default;
}

/** The shared template for every component docs page. */
export default async function ComponentDocPage({ params }: Params) {
  const { slug } = await params;
  const doc = componentDocs[slug];
  if (!doc) notFound();
  const { meta } = doc;
  const Notes = await loadNotes(slug);

  const demoSource = fs.readFileSync(path.join(CONTENT_DIR, slug, "demo.tsx"), "utf8");
  const cssPath = path.join(LIFTKIT_CSS_DIR, meta.cssFile ?? `lk-${slug}.css`);
  const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf8") : null;

  const [initialTs, initialCss] = await Promise.all([
    highlightCode(renderDemoSource(demoSource, defaultKnobValues(meta.knobs)), "tsx"),
    css ? highlightCode(css, "css") : null,
  ]);

  return (
    <>
      <h1 className="display2-bold mb-xs mt-none">{meta.title}</h1>
      <p className="body mb-lg">{meta.description}</p>

      <div className="w-full flex items-center justify-center bg-surfacecontainerlow">
        <ComponentPreview
          knobs={meta.knobs}
          docsLink={meta.baseUiUrl}
          demoSource={demoSource}
          initial_TS={initialTs}
          initial_CSS={initialCss}
          slug={slug}
        />
      </div>

      <h2 id="installation" className="title1-bold mb-md mt-lg">
        Installation
      </h2>
      <div className="bg-surfacecontainerlow rounded-sm shadow-2xs">
        <SimpleCodeBlock codeString="npm install @chainlift/liftkit" lang="bash" />
      </div>

      {Notes && <Notes />}

      <h2 id="api-reference" className="title1-bold mb-md mt-lg">
        API Reference
      </h2>
      <blockquote>
        <p className="body">
          <strong>This section only covers LiftKit-specific API features.</strong> {meta.title} also accepts every prop
          of its Base UI primitive.
          {meta.baseUiUrl && (
            <>
              {" "}
              For the full API, see the <a href={meta.baseUiUrl}>Base UI docs</a>.
            </>
          )}
        </p>
      </blockquote>
      <SubComponentSection subComponents={meta.subComponents} />
    </>
  );
}
