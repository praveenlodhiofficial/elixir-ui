import { Exo, Geist, Geist_Mono } from "next/font/google";

import { LiquidFrame } from "@workspace/ui/components/liquid-frame";
import "@workspace/ui/globals.css";
import { cn } from "@workspace/ui/lib/utils";
import { RootProvider } from "fumadocs-ui/provider/next";

import { ThemeProvider } from "@/web/components/theme-provider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        exo.className,
        "font-sans",
        geist.variable
      )}
    >
      <body className="flex min-h-screen flex-col tracking-wide">
        <ThemeProvider>
          <RootProvider>{children}</RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
