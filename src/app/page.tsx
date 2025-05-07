import styles from "./page.module.css";
import Paragraph from "@/liftkit/components/paragraph";
import Sticker from "@/liftkit/components/sticker";

export default function Home() {
  return (
    <div className={styles.page}>
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <Sticker content="Default" />
        <Sticker content="Primary" color="primary" />
        <Sticker content="Secondary" color="secondary" />
        <Sticker content="Tertiary" color="tertiary" />
        <Sticker content="Error" color="error" />
        <Sticker content="Warning" color="warning" />
        <Sticker content="Success" color="success" />
        <Sticker content="Info" color="info" />
        <Sticker content="Surface" color="surface" />
        <Sticker content="Inverse" color="inversesurface" />
        <Sticker content="Primary Container" color="primarycontainer" />
        <Sticker content="Surface Variant" color="surfacevariant" />
      </div>
    </div>
  );
}
