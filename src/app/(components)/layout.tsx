import LeftSide from "@/app/(components)/layout-parts/left-side/left-side";
import React from "react";
import { Toaster } from "@/components/ui/sonner";


import type { Viewport } from "next";
import LenisScroll from "@/components/LenisScroll";
// import RequestComponents from "@/components/requestcomponets";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <LenisScroll />
      <LeftSide />
      <section className="flex flex-1 flex-col overflow-auto px-2 md:px-8 lg:px-12" role="main" aria-label="Main content">
        <div className="flex-1">
          {/* <RequestComponents /> */}
          {children}
        </div>
      </section>
      <Toaster />
    </main>
  );
}