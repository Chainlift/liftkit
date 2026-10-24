import { Switch, SwitchThumb } from "@/liftkit/component-definitions";

export function ExampleSwitch() {
  return (
    <label>
      <Switch defaultChecked>
        <SwitchThumb />
      </Switch>
      Notifications
    </label>
  );
}
