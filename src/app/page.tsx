import Badge from "@/liftkit/components/badge";
import Icon from "@/liftkit/components/icon";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Badge></Badge>
      <Icon name="airplay" color="primary" fontClass="title2" />
    </div>
  );
}
