
"use client"
import MenuChip from "@/liftkit/components/menu-chip";
import Paragraph from "@/liftkit/components/paragraph";
import Text from "@/liftkit/components/text";
import Row from "@/liftkit/components/row";
import styles from "./page.module.css";
import Sticker from "@/liftkit/components/sticker";
import MenuList from "@/liftkit/components/menu-list";
import MenuItem from "@/liftkit/components/menu-item";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.page}>

    <div className="bg-light__surface">
      <MenuChip isActive={open} onClick={() => setOpen(!open)} />
      <MenuList isOpen={open}>
        <MenuItem startIcon="home">Home</MenuItem>
        <MenuItem startIcon="settings" endIcon="chevron_right">Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </div>



      <Text fontClass="display1" tag="footer" color="primary">
        Hello World
      </Text>

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
      <div>
        <div style={{ padding: "2rem" }}>
          <h2>Row with gap, justifyContent, alignItems</h2>
          <Row gap="lg" justify-content="space-around" align-items="center">
            <div style={{ background: "#ddd", padding: "1rem" }}>Item 1</div>
            <div style={{ background: "#bbb", padding: "1rem" }}>Item 2</div>
            <div style={{ background: "#999", padding: "1rem" }}>Item 3</div>
          </Row>

          <h2 style={{ marginTop: "2rem" }}>Row with wrapChildren</h2>
          <Row gap="lg" wrap-children="true" style={{ maxWidth: "300px" }}>
            <div
              style={{ background: "#ccc", width: "200px", padding: "1rem" }}
            >
              A
            </div>
            <div
              style={{ background: "#aaa", width: "200px", padding: "1rem" }}
            >
              B
            </div>
            <div
              style={{ background: "#888", width: "200px", padding: "1rem" }}
            >
              C
            </div>
          </Row>

          <h2 style={{ marginTop: "2rem" }}>
            Row with defaultChildBehavior = auto-grow
          </h2>
          <Row gap="sm" default-child-behavior="auto-grow">
            <div style={{ background: "#eef", padding: "1rem" }}>Grow 1</div>
            <div style={{ background: "#ccf", padding: "1rem" }}>Grow 2</div>
            <div style={{ background: "#aaf", padding: "1rem" }}>Grow 3</div>
          </Row>
        </div>
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
    </div>
  );
}
