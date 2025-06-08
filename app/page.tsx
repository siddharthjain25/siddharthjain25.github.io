"use client";

import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/Hero";
export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
    </main>
  );
}
