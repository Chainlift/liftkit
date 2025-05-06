
import styles from "./page.module.css";
import Sticker from "@/liftkit/components/sticker";

export default function Home() {
  return (
    <div className={styles.page}>
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
