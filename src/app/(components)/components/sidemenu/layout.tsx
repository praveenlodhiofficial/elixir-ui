import React from "react";
import { Toaster } from "@/components/ui/sonner";
import LenisScroll from "@/components/LenisScroll";

export default function SideMenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen" suppressHydrationWarning>
      <LenisScroll />
      <section className="flex flex-1 flex-col overflow-auto px-2 md:px-8 lg:px-12" role="main" aria-label="Main content">
        <div className="flex-1">
          {children}
        </div>
      </section>
      <Toaster />
    </main>
  );
} 