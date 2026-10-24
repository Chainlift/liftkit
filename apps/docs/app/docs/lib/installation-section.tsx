import { SimpleCodeBlock } from "@/app/docs/lib/simple-code-block";

interface InstallationSectionProps {
  baseUIDep?: string;
  lkPackage?: string;
}

export function InstallationSection({
  baseUIDep = "@base-ui/react",
  lkPackage = "@liftkit/something",
}: InstallationSectionProps) {
  return (
    <>
      <p className="body mb-md">First, install these dependencies:</p>
      <div className="bg-surfacecontainerlow rounded-sm shadow-2xs overflow-hidden">
        <SimpleCodeBlock codeString={`npm install ${baseUIDep}`} lang="bash" />
      </div>

      <p className="body mt-lg mb-md">
        Then, you can copy and paste the demo code above into new file(s) in your project.
      </p>

      <p className="body mt-lg mb-md">
        <strong>Alternatively,</strong> install with NPM.
      </p>
      <div className="bg-surfacecontainerlow rounded-sm shadow-2xs overflow-hidden">
        <SimpleCodeBlock codeString={`npm install ${lkPackage}`} lang="bash" />
      </div>
    </>
  );
}
