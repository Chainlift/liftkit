

import TextInput from "@/liftkit/components/text-input";


import Paragraph from "@/liftkit/components/paragraph";
import Text from "@/liftkit/components/text";
import Row from "@/liftkit/components/row";
import styles from "./page.module.css";
import Sticker from "@/liftkit/components/sticker";
import Badge from "@/liftkit/components/badge";
import Image from "@/liftkit/components/image";

const aspectRatios = [
  "auto",
  "1/1",
  "2.39/1",
  "2/1",
  "16/9",
  "3/2",
  "4/3",
  "5/4",
  "1/2.39",
  "1/2",
  "9/16",
  "4/5",
];
const sizes = ["3xs", "2xs", "xs", "sm", "lg", "xl", "2xl", "3xl", "4xl"];

const radii = [
  "none",
  "zero",
  "3xs",
  "2xs",
  "xs",
  "sm",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
];


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
        cats aren&apos;t just pets, but deities in disguise, quietly ruling
        their human households with regal indifference.
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

      {/* RADII TESTING */}
      <div className="radius-test-grid">
        {radii.map((radius) => (
          <figure key={radius} className="radius-test-item">
            <Image
              src="/testimage.png"
              alt={radius}
              lk-component="image"
              lk-image-border-radius={radius}
              className="radius-test-img"
            />
            <figcaption className="radius-test-caption">{radius}</figcaption>
          </figure>
        ))}
      </div>

      {/* OBJECT-FIT TESTING */}
      <div className="objectfit-test-grid">
        <figure>
          <Image src="/testimage.png" alt="cover" lk-image-object-fit="cover" />
          <figcaption>object-fit: cover</figcaption>
        </figure>
        <figure>
          <Image
            src="/testimage.png"
            alt="contain"
            lk-image-object-fit="contain"
          />
          <figcaption>object-fit: contain</figcaption>
        </figure>
        <figure>
          <Image src="/testimage.png" alt="fill" lk-image-object-fit="fill" />
          <figcaption>object-fit: fill</figcaption>
        </figure>
        <figure>
          <Image src="/testimage.png" alt="none" lk-image-object-fit="none" />
          <figcaption>object-fit: none</figcaption>
        </figure>
        <figure>
          <Image
            src="/testimage.png"
            alt="scale-down"
            lk-image-object-fit="scale-down"
          />
          <figcaption>object-fit: scale-down</figcaption>
        </figure>
      </div>

      {/* ASPECT RATIO TESTING */}
      <div className="aspect-test-grid">
        {aspectRatios.map((ratio) => (
          <figure key={ratio} style={{ border: "1px solid #ccc" }}>
            <Image
              src="/testimage.png"
              alt={ratio}
              lk-component="image"
              lk-image-aspect={ratio}
              style={{ width: "100%", objectFit: "cover" }}
            />
            <figcaption className="text-center mt-2">{ratio}</figcaption>
          </figure>
        ))}
        {/* SIZE TESTING */}
        <div className="size-test-grid">
          {sizes.map((size) => (
            <figure key={size} className="size-test-item">
              <Image
                src="/testimage.png"
                alt={size}
                lk-component="image"
                lk-image-width={size}
                lk-image-height={size}
                className="size-test-img"
              />
              <figcaption className="size-test-caption">{size}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <Badge />

    </div>
  </div>
  );
}
