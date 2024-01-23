import FramerMotionLayout from "./FramerMotionLayout";
import RootContents from "@/components/RootContents";

export default function Home() {
  return (
    <main className="relative min-h-[100svh] select-none overflow-hidden text-white antialiased bg-white">
      <FramerMotionLayout>
        <RootContents />
      </FramerMotionLayout>
    </main>
  );
}
