import { Input as BaseInput } from "@base-ui/react/input";
import { Input } from "./input";
import styles from "./input.module.css";

export default function ExampleInput() {
  return (
    <label className={styles.Label}>
      Name
      <BaseInput placeholder="Enter your name" className={styles.Input} />
    </label>
  );
}

export function ExampleInput2() {
  return (
    <label>
      Name
      <Input placeholder="Enter your name" />
    </label>
  );
}
