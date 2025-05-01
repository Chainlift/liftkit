import styles from "./page.module.css";
import Welcome from "@/content/components/button.mdx";

export default function Home() {
  return (
    <div className={styles.page}>
      <Welcome />
    </div>
  );
}
