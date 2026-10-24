import Link from "next/link";
import { GoldenBox } from "@chainlift/liftkit";
import { Button } from "@chainlift/liftkit";
import { BaseUILogo } from "@/app/docs/lib/base-ui-logo";

interface BaseUICalloutProps {
  href: string;
}

export function BaseUICallout({ href }: BaseUICalloutProps) {
  return (
    <GoldenBox scaleFactor="heading" opticalCorrection="y" className="bg-infocontainer rounded-xs mb-xl">
      <div className="flex items-center gap-md">
        <div>
          <BaseUILogo />
        </div>
        <div className="fill-container">
          <p className="heading mb-2xs">This component wraps a Base UI primitive.</p>
          <p className="subheading">
            For full API reference, view the Base UI docs. These docs only cover LiftKit-specific info.
          </p>
        </div>
        <Link href={href}>
          <Button color="info" startIcon="external-link">
            Base UI Docs
          </Button>
        </Link>
      </div>
    </GoldenBox>
  );
}
