
import Badge from "@/liftkit/components/badge";
import Image from "@/liftkit/components/image";


const aspectRatios = [
  "auto", "1/1", "2.39/1", "2/1", "16/9", "3/2", "4/3",
  "5/4", "1/2.39", "1/2", "9/16", "4/5"
];
const sizes = ["3xs", "2xs", "xs", "sm", "lg", "xl", "2xl", "3xl", "4xl"];

const radii = ["none", "zero", "3xs", "2xs", "xs", "sm", "lg", "xl", "2xl", "3xl", "4xl"];


export default function Home() {
  return (

    <>
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
      <Image src="/testimage.png" alt="contain" lk-image-object-fit="contain" />
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
      <Image src="/testimage.png" alt="scale-down" lk-image-object-fit="scale-down"  />
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
   
 
    </div>
     <Badge></Badge>

   </>
  );
}
