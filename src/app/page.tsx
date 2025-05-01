import Badge from "@/liftkit/components/badge";
import styles from "./page.module.css";
import Welcome from "@/content/components/button.mdx";

export default function Home() {
  return (
    <div className={styles.page}>
      <Badge icon="replace" color="surfacecontainerhigh" scale="lg" iconStrokeWidth={1}/>
      <span className="absolute top-0">Hello</span>
      {/* <Welcome /> */}
    </div>
  );
}
