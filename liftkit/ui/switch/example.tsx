import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { Switch, SwitchThumb } from "./switch";
import styles from "./switch.module.css";

export default function ExampleSwitch() {
  return (
    <label className={styles.Label}>
      <BaseSwitch.Root defaultChecked className={styles.Switch}>
        <BaseSwitch.Thumb className={styles.Thumb} />
      </BaseSwitch.Root>
      Notifications
    </label>
  );
}

export function ExampleSwitch2() {
  return (
    <label>
      <Switch defaultChecked>
        <SwitchThumb />
      </Switch>
      Notifications
    </label>
  );
}
