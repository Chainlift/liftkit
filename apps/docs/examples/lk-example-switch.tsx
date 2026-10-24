import { Switch, SwitchThumb } from "@chainlift/liftkit";

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
