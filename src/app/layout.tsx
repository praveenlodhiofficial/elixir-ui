import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { Barlow_Condensed, Exo, Roboto } from "next/font/google";
import "./globals.css";
import { AppContent } from "@/components/AppContent";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elixir UI",
  description: "Elixir UI is a reusable component library for Next.js",
  icons: {
    icon: {
      url: "/logo/elixir-logo-dark.png",
      type: "image/png",
      sizes: "48x48",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${exo.variable} ${roboto.variable} ${barlowCondensed.variable} font-exo antialiased bg-background text-foreground tracking-wider min-h-screen`}
      >
        <AppContent>
          {children}
        </AppContent>
        <Analytics />
      </body>
    </html>
  );
}
