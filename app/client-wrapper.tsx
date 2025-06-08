"use client";

import { Navbar } from "@/components/navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { LoaderScreen } from "@/components/LoaderScreen";
export default function ClientWrapper() {
  return (
    <>
      <CustomCursor />
      <LoaderScreen />
      <Navbar />
    </>
  );
}
