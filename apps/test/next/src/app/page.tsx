import { ActionButton } from "@/components/action-button";
import { EventCard } from "@/components/event-card";
import { FunnelGallery } from "@/components/funnel-gallery";
import { GalleryShowcase } from "@/components/gallery-showcase";
import { LiquidFrame } from "@/components/liquid-frame";
import { MasonryGrid } from "@/components/masonry-grid";
import { MotionGallery } from "@/components/motion-gallery";
import { NavigationalCard } from "@/components/navigational-card";
import { OrbitalFlow } from "@/components/orbital-flow";
import { QuantityStepper } from "@/components/quantity-stepper";
import { ReadMore } from "@/components/read-more";
import { TidalTextAnimation } from "@/components/tidal-text-animation";
import { VanillaTiltCard } from "@/components/vanilla-tilt-card";
import { VisionGlassCard } from "@/components/vision-glass-card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between space-y-20 p-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Elixir UI!</h1>
        <p className="mt-4 text-zinc-400">
          This is a test Next.js application for the Elixir UI component
          library.
        </p>
      </div>

      <section className="flex flex-col items-center justify-center space-y-20">
        <TidalTextAnimation />
        <ActionButton>Click me</ActionButton>
        <QuantityStepper />
        <ReadMore className="max-w-3xl" lines={7}>
          {`
          Next.js Docs
Welcome to the Next.js documentation!

What is Next.js?
Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

It also automatically configures lower-level tools like bundlers and compilers. You can instead focus on building your product and shipping quickly.

Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.

How to use the docs
The docs are organized into 3 sections:

Getting Started: Step-by-step tutorials to help you create a new application and learn the core Next.js features.
Guides: Tutorials on specific use cases, choose what's relevant to you.
API Reference: Detailed technical reference for every feature.
Use the sidebar to navigate through the sections, or search (Ctrl+K or Cmd+K) to quickly find a page.

App Router and Pages Router
Next.js has two different routers:

App Router: The newer router that supports new React features like Server Components.
Pages Router: The original router, still supported and being improved.
At the top of the sidebar, you'll notice a dropdown menu that allows you to switch between the App Router and the Pages Router docs.

React version handling
The App Router and Pages Router handle React versions differently:

App Router: Uses React canary releases built-in, which include all the stable React 19 changes, as well as newer features being validated in frameworks, prior to a new React release.

Pages Router: Uses the React version installed in your project's package.json.

This approach ensures new React features work reliably in the App Router while maintaining backwards compatibility for existing Pages Router applications.
`}
        </ReadMore>
        <FunnelGallery />
        <LiquidFrame />
        <VisionGlassCard />
        <MotionGallery />
        <OrbitalFlow />
        <VanillaTiltCard />
        <NavigationalCard />
        <GalleryShowcase />
        <EventCard />
        <MasonryGrid />
      </section>
    </div>
  );
}
