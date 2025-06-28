import { Metadata } from 'next'

export interface ComponentMetadata {
     title: string
     description: string
     keywords: string[]
     imagePath?: string
     componentName: string
}

export interface PageMetadata {
     title: string
     description: string
     keywords?: string[]
     imagePath?: string
}

// Base metadata configuration
const baseMetadata: Partial<Metadata> = {
     metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
     authors: [{ name: 'Elixir UI' }],
     robots: {
          index: true,
          follow: true,
          googleBot: {
               index: true,
               follow: true,
               'max-video-preview': -1,
               'max-image-preview': 'large',
               'max-snippet': -1,
          },
     },
}

// Component metadata configurations
export const componentMetadata: Record<string, ComponentMetadata> = {
     showcase: {
          title: 'Showcase Component - Elixir UI',
          description:
               'A 3D showcase component with SSR image optimization for faster loading. Features 3D cylindrical showcase with rotation, custom text overlay, bloom effects, and interactive camera controls.',
          keywords: [
               'showcase',
               '3D',
               'three.js',
               'react-three-fiber',
               'SSR',
               'image optimization',
               'performance',
          ],
          imagePath: '/components/showcase/showcase-image.png',
          componentName: 'Showcase',
     },
     'vanilla-tilt-card': {
          title: '3D Vanilla Tilt Card Component - Elixir UI',
          description:
               'A React component library for creating stunning 3D tilt effects using VanillaTilt. Wrap anything inside the Tilt tag to add dynamic and interactive visuals to your UI.',
          keywords: [
               'vanilla-tilt',
               '3D',
               'tilt effect',
               'interactive',
               'card component',
               'animation',
          ],
          imagePath: '/components/carousel/3d-vanilla-tilt.png',
          componentName: 'Vanilla Tilt Card',
     },
     'liquid-frame': {
          title: 'Liquid Frame Component - Elixir UI',
          description:
               'A beautiful liquid frame component with smooth animations and customizable effects. Perfect for showcasing images with elegant liquid-like borders.',
          keywords: [
               'liquid frame',
               'animation',
               'border effects',
               'image showcase',
               'smooth transitions',
          ],
          imagePath: '/components/liquid-frame/zenitsu.jpg',
          componentName: 'Liquid Frame',
     },
     'vertical-flow-carousel': {
          title: 'Vertical Flow Carousel Component - Elixir UI',
          description:
               'A smooth vertical scrolling carousel component with infinite scroll and customizable animations. Perfect for showcasing content in a flowing vertical layout.',
          keywords: [
               'carousel',
               'vertical scroll',
               'infinite scroll',
               'smooth animation',
               'content showcase',
          ],
          imagePath: '/components/carousel/showcase.png',
          componentName: 'Vertical Flow Carousel',
     },
     'split-view-panel': {
          title: 'Split View Panel Component - Elixir UI',
          description:
               'A responsive split view panel component that divides content into two sections with customizable layouts and smooth transitions.',
          keywords: ['split view', 'panel', 'responsive', 'layout', 'content division'],
          imagePath: '/components/card/service-card.png',
          componentName: 'Split View Panel',
     },
     'teammates-v1': {
          title: 'Teammates V1 Component - Elixir UI',
          description:
               'A team showcase component with hover effects and smooth animations. Perfect for displaying team members with interactive elements.',
          keywords: ['team', 'teammates', 'hover effects', 'team showcase', 'interactive'],
          imagePath: '/components/carousel/teammates-v1.png',
          componentName: 'Teammates V1',
     },
     'teammates-v2': {
          title: 'Teammates V2 Component - Elixir UI',
          description:
               'An advanced team showcase component with enhanced animations and modern design patterns. Features improved hover effects and responsive layouts.',
          keywords: ['team', 'teammates', 'advanced animations', 'modern design', 'responsive'],
          imagePath: '/components/carousel/teammates-v1.png',
          componentName: 'Teammates V2',
     },
     sidemenu: {
          title: 'Side Menu Component - Elixir UI',
          description:
               'A customizable side menu component with smooth animations and responsive design. Perfect for navigation with elegant transitions.',
          keywords: [
               'side menu',
               'navigation',
               'responsive',
               'smooth animations',
               'menu component',
          ],
          imagePath: '/components/sidemenu/bg.jpg',
          componentName: 'Side Menu',
     },
}

// Page metadata configurations
export const pageMetadata: Record<string, PageMetadata> = {
     home: {
          title: 'Elixir UI - Modern React Component Library',
          description:
               'Elixir UI is a reusable component library for Next.js with modern design patterns and smooth animations.',
          keywords: ['react', 'next.js', 'component library', 'UI components', 'modern design'],
     },
     about: {
          title: 'About - Elixir UI',
          description:
               'Learn more about Elixir UI, our mission, and the team behind this modern React component library.',
          keywords: ['about', 'team', 'mission', 'elixir ui', 'component library'],
     },
     contact: {
          title: 'Contact - Elixir UI',
          description:
               "Get in touch with the Elixir UI team. We'd love to hear from you and help with your project.",
          keywords: ['contact', 'support', 'help', 'elixir ui', 'get in touch'],
     },
     docs: {
          title: 'Documentation - Elixir UI',
          description:
               'Comprehensive documentation for Elixir UI components. Learn how to use our components effectively.',
          keywords: ['documentation', 'docs', 'components', 'usage', 'examples'],
     },
     templates: {
          title: 'Templates - Elixir UI',
          description:
               'Ready-to-use templates built with Elixir UI components. Jumpstart your next project with our pre-built layouts.',
          keywords: ['templates', 'layouts', 'pre-built', 'starter templates', 'project templates'],
     },
}

/**
 * Generate metadata for a component page
 */
export function generateComponentMetadata(componentKey: string): Metadata {
     const component = componentMetadata[componentKey]

     if (!component) {
          console.warn(`No metadata found for component: ${componentKey}`)
          return {
               title: 'Component - Elixir UI',
               description: 'Elixir UI component documentation',
          }
     }

     const metadata: Metadata = {
          title: component.title,
          description: component.description,
          keywords: component.keywords,
          ...baseMetadata,
     }

     // Add OpenGraph metadata if image is available
     if (component.imagePath) {
          metadata.openGraph = {
               title: component.title,
               description: component.description,
               type: 'website',
               images: [
                    {
                         url: component.imagePath,
                         width: 1200,
                         height: 630,
                         alt: `${component.componentName} Component Preview`,
                    },
               ],
          }

          metadata.twitter = {
               card: 'summary_large_image',
               title: component.title,
               description: component.description,
               images: [component.imagePath],
          }
     }

     return metadata
}

/**
 * Generate metadata for a page
 */
export function generatePageMetadata(pageKey: string): Metadata {
     const page = pageMetadata[pageKey]

     if (!page) {
          console.warn(`No metadata found for page: ${pageKey}`)
          return {
               title: 'Elixir UI',
               description: 'Elixir UI is a reusable component library for Next.js',
          }
     }

     const metadata: Metadata = {
          title: page.title,
          description: page.description,
          keywords: page.keywords,
          ...baseMetadata,
     }

     // Add OpenGraph metadata if image is available
     if (page.imagePath) {
          metadata.openGraph = {
               title: page.title,
               description: page.description,
               type: 'website',
               images: [
                    {
                         url: page.imagePath,
                         width: 1200,
                         height: 630,
                         alt: `${page.title} Preview`,
                    },
               ],
          }

          metadata.twitter = {
               card: 'summary_large_image',
               title: page.title,
               description: page.description,
               images: [page.imagePath],
          }
     }

     return metadata
}

/**
 * Generate custom metadata with overrides
 */
export function generateCustomMetadata(
     title: string,
     description: string,
     options?: {
          keywords?: string[]
          imagePath?: string
          customOpenGraph?: any
          customTwitter?: any
     }
): Metadata {
     const metadata: Metadata = {
          title,
          description,
          keywords: options?.keywords,
          ...baseMetadata,
     }

     if (options?.imagePath) {
          metadata.openGraph = {
               title,
               description,
               type: 'website',
               images: [
                    {
                         url: options.imagePath,
                         width: 1200,
                         height: 630,
                         alt: `${title} Preview`,
                    },
               ],
               ...options.customOpenGraph,
          }

          metadata.twitter = {
               card: 'summary_large_image',
               title,
               description,
               images: [options.imagePath],
               ...options.customTwitter,
          }
     }

     return metadata
}
