import { LiftKitLogo } from "@/src/components/liftkit-logo";
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
      <LiftKitLogo style={{ width: "clamp(320px, 50vw, 992px)" }} />
      <Text tag="h1" fontClass="display2-bold" className="mt-md">
        v2 comin&apos; soon
      </Text>
    </main>
  );
}
