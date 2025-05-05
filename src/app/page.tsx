import Icon from "@/liftkit/components/icon";
import Badge from "@/liftkit/components/badge";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Icon name="airplay" color="primary" fontClass="title2"/>
      <Badge></Badge>
    </div>
  );
}
