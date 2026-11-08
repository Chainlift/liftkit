import { Switch, SwitchThumb } from "liftkit";

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
