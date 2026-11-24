import Image from "@/registry/nextjs/components/image";
import Text from "@/registry/nextjs/components/text";

export default function Home() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image src="/logotype.svg" width="4xl" height="auto" />
      <Text tag="h1" fontClass="title2-bold" className="mt-md">
        v2 comin&apos; soon
      </Text>
    </main>
  );
}
