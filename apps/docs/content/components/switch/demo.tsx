import { Switch, SwitchThumb } from "liftkit";

export default function SwitchDemo() {
  return (
    <label className="label flex-h items-center gap-sm">
      Notifications
      <Switch defaultChecked>
        <SwitchThumb />
      </Switch>
    </label>
  );
}
