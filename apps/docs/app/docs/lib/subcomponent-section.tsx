import { SubComponentDocs } from "@/app/docs/lib/subcomponent-utils";
import { componentManifest } from "@/app/docs/lib/component-manifest";

export function SubComponentSection({ componentName }: { componentName: string }) {
  const subComponents = componentManifest[componentName].subComponents;

  var subComponentsArray;

  if (subComponents) {
    subComponentsArray = Object.entries(subComponents);
    console.log(subComponentsArray[0][0]);
  }

  if (!subComponents || Object.keys(subComponents).length === 0) {
    return null;
  }

  return (
    <div>
      {subComponentsArray?.map((subcomponent, index) => (
        <SubComponentDocs key={index} componentName={componentName} subComponentName={subcomponent[0]} />
      ))}
    </div>
  );
}
