"use client";

import { Navbar } from "@/components/navbar";
import { LoaderScreen } from "@/components/LoaderScreen";
export default function ClientWrapper() {
  return (
    <>
      <LoaderScreen />
      <Navbar />
    </>
  );
}
