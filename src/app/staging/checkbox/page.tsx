"use client";

import { Checkbox } from "@/registry/nextjs/components/checkbox";
import { Label } from "@/registry/nextjs/components/label";

export default function CheckboxDemo() {

//TODO: In docs, specify that this example applies an mt-3xs class to the checkbox to align it with the label text
  return (
    <div className="flex flex-col gap-6">
      <form>
        <div className="display-flex align-items-center gap-md mb-md">
          <Checkbox id="terms" className="mt-3xs"/>
          <Label htmlFor="terms" >Accept terms and conditions</Label>
        </div>
        <div className="display-flex align-items-center gap-md">
          <Checkbox id="terms-2" defaultChecked className="mt-3xs" />
          <div>
            <Label htmlFor="terms-2" className="body-bold">
              Accept terms and conditions
            </Label>
            <p className="color-onsurfacevariant subheading">
              By clicking this checkbox, you agree to the terms and conditions.
            </p>
          </div>
        </div>
        <div>
          <Checkbox id="toggle" disabled />
          <Label htmlFor="toggle">Enable notifications</Label>
        </div>
        <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
          <Checkbox
            id="toggle-2"
            defaultChecked
            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
          />
          <div className="grid gap-1.5 font-normal">
            <p className="text-sm leading-none font-medium">Enable notifications</p>
            <p className="text-muted-foreground text-sm">You can enable or disable notifications at any time.</p>
          </div>
        </Label>
      </form>
    </div>
  );
}
