"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import LenisScroll from "@/components/LenisScroll";
import { KBarProvider } from "@/components/KBarProvider";

export function AppContent({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <KBarProvider>
        <LenisScroll />
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
          <Navbar />
          <main className="">
            {children}
          </main>
        {/* </div> */}
      </KBarProvider>
    </ThemeProvider>
  );
} 