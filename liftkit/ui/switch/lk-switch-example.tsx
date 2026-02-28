import { Switch, SwitchThumb } from "./switch";

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
