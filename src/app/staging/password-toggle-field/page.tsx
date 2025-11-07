// app/password-toggle-field/page.tsx

import Icon from "@/registry/nextjs/components/icon";
import {
  PasswordToggleField,
  PasswordToggleFieldInput,
  PasswordToggleFieldToggle,
  PasswordToggleFieldSlot,
  PasswordToggleFieldIcon,
} from "@/registry/nextjs/components/password-toggle-field";
import TextInput from "@/registry/nextjs/components/text-input";
import "./styles.css";
import StateLayer from "@/registry/nextjs/components/state-layer";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Password Toggle Field Example</h1>

      <PasswordToggleField>
        <div className="password-toggle-field-wrapper">
          <PasswordToggleFieldInput placeholder="Password" />
          <PasswordToggleFieldToggle>
            <PasswordToggleFieldIcon visible={<Icon name="eye" />} hidden={<Icon name="eye-closed" />} />
            <StateLayer />
          </PasswordToggleFieldToggle>
        </div>
      </PasswordToggleField>
    </main>
  );
}
