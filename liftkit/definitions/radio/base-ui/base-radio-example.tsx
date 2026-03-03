"use client";
import * as React from "react";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { Radio, RadioIndicator, RadioGroup } from "./radio";
import styles from "./radio.module.css";

export default function ExampleRadioGroup() {
  const id = React.useId();
  return (
    <BaseRadioGroup aria-labelledby={id} defaultValue="fuji-apple" className={styles.RadioGroup}>
      <div className={styles.Caption} id={id}>
        Best apple
      </div>

      <label className={styles.Item}>
        <BaseRadio.Root value="fuji-apple" className={styles.Radio}>
          <BaseRadio.Indicator className={styles.Indicator} />
        </BaseRadio.Root>
        Fuji
      </label>

      <label className={styles.Item}>
        <BaseRadio.Root value="gala-apple" className={styles.Radio}>
          <BaseRadio.Indicator className={styles.Indicator} />
        </BaseRadio.Root>
        Gala
      </label>

      <label className={styles.Item}>
        <BaseRadio.Root value="granny-smith-apple" className={styles.Radio}>
          <BaseRadio.Indicator className={styles.Indicator} />
        </BaseRadio.Root>
        Granny Smith
      </label>
    </BaseRadioGroup>
  );
}

export function ExampleRadioGroup2() {
  const id = React.useId();
  return (
    <RadioGroup aria-labelledby={id} defaultValue="fuji-apple">
      <div id={id}>Best apple</div>

      <label>
        <Radio value="fuji-apple">
          <RadioIndicator />
        </Radio>
        Fuji
      </label>

      <label>
        <Radio value="gala-apple">
          <RadioIndicator />
        </Radio>
        Gala
      </label>

      <label>
        <Radio value="granny-smith-apple">
          <RadioIndicator />
        </Radio>
        Granny Smith
      </label>
    </RadioGroup>
  );
}
