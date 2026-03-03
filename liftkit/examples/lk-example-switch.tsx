import { Switch, SwitchThumb } from "@/liftkit/definitions";

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
