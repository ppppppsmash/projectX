"use client"

import { AnimatePresence } from "framer-motion";

export default function FramerMotionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AnimatePresence>
      {children}
    </AnimatePresence>
  );
}
