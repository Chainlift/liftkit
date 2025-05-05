import Badge from "@/liftkit/components/badge";
import styles from "./page.module.css";
import Paragraph from "@/liftkit/components/paragraph";

export default function Home() {
  return (
    <div className={styles.page}>
      <Badge></Badge>
      <Paragraph fontClass="title1">
        ancient times, cats were not merely companions—they were revered as
        divine beings. Cultures like ancient Egypt honored cats as sacred
        creatures, embodying grace, mystery, and spiritual power. The goddess
        Bastet, depicted with the head of a lioness or domestic cat, symbolized
        protection, fertility, and the nurturing aspects of home life. Even
        beyond Egypt, the enigmatic nature of cats—their watchful eyes, silent
        movements, and uncanny independence—has inspired a timeless belief that
        they walk between worlds. To this day, many still joke (or suspect) that
        cats aren’t just pets, but deities in disguise, quietly ruling their
        human households with regal indifference.
      </Paragraph>
    </div>
  );
}
