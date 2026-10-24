import * as React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverPositioner,
  PopoverPopup,
  PopoverArrow,
  PopoverTitle,
  PopoverDescription,
  Icon,
} from "@/liftkit/component-definitions";

export function ExamplePopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Icon aria-label="notifications" name="bell" />
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverPositioner sideOffset={8}>
          <PopoverPopup>
            <PopoverArrow></PopoverArrow>
            <PopoverTitle>Notifications</PopoverTitle>
            <PopoverDescription>You are all caught up. Good job!</PopoverDescription>
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </Popover>
  );
}

