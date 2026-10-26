import { Switch, SwitchThumb } from "@chainlift/liftkit";

export default function SwitchDemo() {
  return (
    <label>
      <Switch defaultChecked>
        <SwitchThumb />
      </Switch>
      Notifications
    </label>
  );
}
