import * as React from "react";
import { Toolbar as BaseToolbar } from "@base-ui/react/toolbar";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { Select as BaseSelect } from "@base-ui/react/select";
import styles from "./toolbar.module.css";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectPositioner,
  SelectPopup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
} from "@/liftkit/definitions/select/select";
import { Toggle } from "@/liftkit/definitions/toggle/toggle";
import { ToggleGroup } from "@/liftkit/definitions/toggle-group/toggle-group";
import { Toolbar, ToolbarButton, ToolbarGroup, ToolbarSeparator, ToolbarLink, ToolbarInput } from "./toolbar";

export default function ExampleBaseToolbar() {
  return (
    <BaseToolbar.Root className={styles.BaseToolbar}>
      <BaseToggleGroup className={styles.Group} aria-label="Alignment">
        <BaseToolbar.Button
          render={<BaseToggle />}
          aria-label="Align left"
          value="align-left"
          className={styles.Button}
        >
          Align Left
        </BaseToolbar.Button>
        <BaseToolbar.Button
          render={<BaseToggle />}
          aria-label="Align right"
          value="align-right"
          className={styles.Button}
        >
          Align Right
        </BaseToolbar.Button>
      </BaseToggleGroup>
      <BaseToolbar.Separator className={styles.Separator} />
      <BaseToolbar.Group className={styles.Group} aria-label="Numerical format">
        <BaseToolbar.Button className={styles.Button} aria-label="Format as currency">
          $
        </BaseToolbar.Button>
        <BaseToolbar.Button className={styles.Button} aria-label="Format as percent">
          %
        </BaseToolbar.Button>
      </BaseToolbar.Group>
      <BaseToolbar.Separator className={styles.Separator} />
      <BaseSelect.Root defaultValue="Helvetica">
        <BaseToolbar.Button render={<BaseSelect.Trigger />} className={styles.Button}>
          <BaseSelect.Value />
          <BaseSelect.Icon className={styles.BaseSelectIcon}>
            <ChevronUpDownIcon />
          </BaseSelect.Icon>
        </BaseToolbar.Button>
        <BaseSelect.Portal>
          <BaseSelect.Positioner className={styles.Positioner} sideOffset={8}>
            <BaseSelect.Popup className={styles.Popup}>
              <BaseSelect.Item className={styles.Item} value="Helvetica">
                <BaseSelect.ItemIndicator className={styles.ItemIndicator}>
                  <CheckIcon className={styles.ItemIndicatorIcon} />
                </BaseSelect.ItemIndicator>
                <BaseSelect.ItemText className={styles.ItemText}>Helvetica</BaseSelect.ItemText>
              </BaseSelect.Item>
              <BaseSelect.Item className={styles.Item} value="Arial">
                <BaseSelect.ItemIndicator className={styles.ItemIndicator}>
                  <CheckIcon className={styles.ItemIndicatorIcon} />
                </BaseSelect.ItemIndicator>
                <BaseSelect.ItemText className={styles.ItemText}>Arial</BaseSelect.ItemText>
              </BaseSelect.Item>
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </BaseSelect.Root>
      <BaseToolbar.Separator className={styles.Separator} />
      <BaseToolbar.Link className={styles.Link} href="#">
        Edited 51m ago
      </BaseToolbar.Link>
    </BaseToolbar.Root>
  );
}

export function ExampleToolbar2() {
  return (
    <>
      <Toolbar>
        <ToggleGroup aria-label="Alignment">
          <ToolbarButton render={<Toggle />} aria-label="Align left" value="align-left">
            Align Left
          </ToolbarButton>
          <ToolbarButton render={<Toggle />} aria-label="Align right" value="align-right">
            Align Right
          </ToolbarButton>
        </ToggleGroup>
        <ToolbarSeparator />
        <ToolbarGroup aria-label="Numerical format">
          <ToolbarButton aria-label="Format as currency">$</ToolbarButton>
          <ToolbarButton aria-label="Format as percent">%</ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <Select defaultValue="Helvetica">
          <ToolbarButton render={<SelectTrigger />}>
            <SelectValue />
            <SelectIcon>
              <ChevronUpDownIcon />
            </SelectIcon>
          </ToolbarButton>
          <SelectPortal>
            <SelectPositioner sideOffset={8}>
              <SelectPopup>
                <SelectItem value="Helvetica">
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                  <SelectItemText>Helvetica</SelectItemText>
                </SelectItem>
                <SelectItem value="Arial">
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                  <SelectItemText>Arial</SelectItemText>
                </SelectItem>
              </SelectPopup>
            </SelectPositioner>
          </SelectPortal>
        </Select>
        <ToolbarSeparator />
        <ToolbarLink href="#">Edited 51m ago</ToolbarLink>
      </Toolbar>
    </>
  );
}

function ChevronUpDownIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="currentcolor" strokeWidth="1.5" {...props}>
      <path d="M0.5 4.5L4 1.5L7.5 4.5" />
      <path d="M0.5 7.5L4 10.5L7.5 7.5" />
    </svg>
  );
}

function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg fill="currentcolor" width="10" height="10" viewBox="0 0 10 10" {...props}>
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  );
}
