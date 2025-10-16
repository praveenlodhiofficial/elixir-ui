import type { Metadata } from "next";
import { Exo, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import "@/styles/mdx.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { CollapsibleSidebar } from "@/components/CollapsibleSidebar";
import Navbar from "@/components/Navbar";
import { KBarClientProvider } from "@/components/KBarClientProvider";

const inter = Inter({ subsets: ["latin"] });

const exo = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
   metadataBase: new URL("https://elixir.praveenlodhi.me"),
   alternates: {
      canonical: "/",
   },
   title: {
      default: "Elixir UI",
      template: "%s | Elixir UI",
   },
   description:
      "Elixir UI is a collection of components for a project with modern web technologies like Next.js, Bun, Shadcn, and MDX.",
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
      <html lang="en">
         <body
            className={`${inter.className} ${exo.className} font-exo mx-auto tracking-wide antialiased`}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               <KBarClientProvider>
                  <SidebarProvider>
                     <div className="relative mx-auto flex min-h-screen w-full flex-col">
                        <CollapsibleSidebar />
                        <div className="mx-auto flex w-full flex-1 flex-col">
                           <Navbar />
                           <main className="flex flex-1 items-center justify-center">
                              {children}
                           </main>
                        </div>
                     </div>
                     <Analytics />
                  </SidebarProvider>
               </KBarClientProvider>
            </ThemeProvider>
         </body>
      </html>
   );
}
