"use client";

import { Checkbox } from "@/registry/nextjs/components/checkbox";
import { Label } from "@/registry/nextjs/components/label";

export default function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="display-flex align-items-center gap-md">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="display-flex align-items-center gap-md">
        <Checkbox id="terms-2" defaultChecked />
        <div>
          <Label htmlFor="terms-2" className="body-bold">Accept terms and conditions</Label>
          <p className="text-muted-foreground text-sm">
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
    </div>
  );
}
