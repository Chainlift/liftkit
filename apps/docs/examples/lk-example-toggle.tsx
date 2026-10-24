"use client";
import * as React from "react";
import { Toggle, Icon } from "@/liftkit/component-definitions";

export function ExampleToggle() {
  return (
    <div>
      <Toggle
        aria-label="Favorite"
        render={(props, state) => {
          if (state.pressed) {
            return (
              <button type="button" {...props}>
                <Icon name="heart" fontClass="heading" fill="var(--lk-onsurface)"  />
              </button>
            );
          }

          return (
            <button type="button" {...props}>
              <Icon name="heart" fontClass="heading" />
            </button>
          );
        }}
      />
    </div>
  );
}
