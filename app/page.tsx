import FramerMotionLayout from "./FramerMotionLayout";
import RootContents from "@/components/RootContents";

export default function Home() {
  return (
    <main className="relative min-h-screen select-none overflow-hidden text-white antialiased">
      <FramerMotionLayout>
        <RootContents />
      </FramerMotionLayout>
    </main>
  );
}
