import { Switch, SwitchThumb } from "@/liftkit/ui";

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
