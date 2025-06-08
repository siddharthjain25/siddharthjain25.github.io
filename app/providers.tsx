"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      enableSystem
      attribute="class"
      defaultTheme="system"
      themes={["light", "dark"]}
    >
      <HeroUIProvider>{children}</HeroUIProvider>
    </ThemeProvider>
  );
}
