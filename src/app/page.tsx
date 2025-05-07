
import TextInput from "@/liftkit/components/text-input";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
    <div className="bg-light__surface p-sm gap-lg display__flex-v">
      {/* Default label position (above the input) */}
      <div>
        <TextInput
          label="Default Label"
          labelPosition="default"
          placeholderText="Enter text here"
          helpText={true}
        />
      </div>

      {/* Floating label position (inside the input) */}
      <div>

        <TextInput
          label="Floating Label"
          labelPosition="on-input"
          placeholderText="Enter text here"
          helpText={true}
        />
      </div>
    </div>
  </div>
  );
}
