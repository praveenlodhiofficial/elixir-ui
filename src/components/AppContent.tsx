'use client'

import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import LenisScroll from '@/components/LenisScroll'
import { KBarProvider } from '@/components/KBarProvider'

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
                    <main className="pt-25">{children}</main>
               </KBarProvider>
          </ThemeProvider>
     )
}
