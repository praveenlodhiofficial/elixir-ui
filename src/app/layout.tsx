import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Barlow_Condensed, Exo, Orbitron, Roboto } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { AppContent } from '@/components/AppContent'

const exo = Exo({
     variable: '--font-exo',
     subsets: ['latin'],
})

const barlowCondensed = Barlow_Condensed({
     variable: '--font-barlow-condensed',
     subsets: ['latin'],
     weight: ['400', '500', '600', '700'],
})

const roboto = Roboto({
     variable: '--font-roboto',
     subsets: ['latin'],
})

const orbitron = Orbitron({
     variable: '--font-orbitron',
     subsets: ['latin'],
})

export const metadata: Metadata = {
     title: 'Elixir UI',
     description: 'Elixir UI is a reusable component library for Next.js',
     icons: {
          icon: {
               url: '/logo/elixir-logo-dark.png',
               type: 'image/png',
               sizes: '48x48',
          },
     },
}

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode
}>) {
     return (
          <html lang="en" suppressHydrationWarning>
               <body
                    className={`${exo.variable} ${roboto.variable} ${barlowCondensed.variable} ${orbitron.variable} font-exo bg-background text-foreground min-h-screen tracking-wider antialiased`}
               >
                    <AppContent>{children}</AppContent>
                    <Analytics />
                    <SpeedInsights />
               </body>
          </html>
     )
}
