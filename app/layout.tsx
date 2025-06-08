import "@/styles/globals.css";
import { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";

import { Providers } from "./providers";
import ClientWrapper from "./client-wrapper";

import { Navbar } from "@/components/navbar";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  authors: [{ name: "Siddharth Jain" }],
  creator: "Siddharth Jain",
  description:
    "A showcase of innovative web development and design projects by Siddharth Jain",
  keywords:
    "web development, frontend, backend, full stack, React, Next.js, portfolio",
  title: "Siddharth`s Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={`${grotesk.variable} ${mono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <ClientWrapper />
          <Navbar />
          <main className="flex-1 pt-24 bg-background text-foreground">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
