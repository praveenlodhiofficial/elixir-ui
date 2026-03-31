import Link from "next/link";

import { ActionButton } from "@workspace/ui/components/action-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { EventCard } from "@workspace/ui/components/event-card";
import { FunnelGallery } from "@workspace/ui/components/funnel-gallery";
import { GalleryShowcase } from "@workspace/ui/components/gallery-showcase";
import { LiquidFrame } from "@workspace/ui/components/liquid-frame";
import { NavigationalCard } from "@workspace/ui/components/navigational-card";
import { OrbitalFlow } from "@workspace/ui/components/orbital-flow";
import { Separator } from "@workspace/ui/components/separator";
import { VanillaTiltCard } from "@workspace/ui/components/vanilla-tilt-card";
import { VisionGlassCard } from "@workspace/ui/components/vision-glass-card";
import {
  ArrowRightIcon,
  BookOpenIcon,
  BrushIcon,
  LayoutGridIcon,
  RocketIcon,
  SparklesIcon,
  WandSparklesIcon,
} from "lucide-react";

import { HomeLayout } from "@/web/layouts/home";
import { baseOptions } from "@/web/lib/layout.shared";

const howToUseComponents = [
  {
    step: "01",
    title: "Choose a component",
    description:
      "Pick a block from docs based on your section goal, then review the props and preview before integrating.",
  },
  {
    step: "02",
    title: "Install and import",
    description:
      "Copy the install command, add the component to your project, and import it where your section needs it.",
  },
  {
    step: "03",
    title: "Customize and ship",
    description:
      "Adjust content, spacing, and theme tokens to match your brand, then ship a polished, responsive section.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Pick a foundation",
    text: "Start with a visual direction and drop in base sections from your registry in minutes.",
  },
  {
    number: "02",
    title: "Compose sections",
    text: "Mix hero blocks, cards, and conversion modules into one coherent page narrative.",
  },
  {
    number: "03",
    title: "Ship with confidence",
    text: "Use consistent components and polished states so your release feels intentional on every screen.",
  },
];

const faqs = [
  {
    question: "Can I use these components in both docs and product pages?",
    answer:
      "Yes. The component API is designed for composability, so you can reuse the same blocks across multiple page types.",
  },
  {
    question: "Is the system responsive out of the box?",
    answer:
      "Every section is built mobile-first and scales cleanly to desktop with predictable spacing and typography.",
  },
  {
    question: "How quickly can a team adopt this setup?",
    answer:
      "Most teams can ship their first production-ready page in a single afternoon using existing blocks and tokens.",
  },
];

const showcaseLinks = [
  {
    title: "3D Components",
    description: "Orbital visuals, liquid frames, and animated interfaces.",
    href: "/docs/components/orbital-flow",
    icon: <SparklesIcon className="size-4" />,
  },
  {
    title: "Card Components",
    description: "Event, feature, and stat cards for rich storytelling.",
    href: "/docs/components/event-card",
    icon: <LayoutGridIcon className="size-4" />,
  },
  {
    title: "Text Components",
    description:
      "Interactive typography and attention-grabbing content blocks.",
    href: "/docs/components/tidal-text-animation",
    icon: <BrushIcon className="size-4" />,
  },
  {
    title: "Getting Started",
    description: "Install quickly and compose your first production page.",
    href: "/docs/installation",
    icon: <BookOpenIcon className="size-4" />,
  },
];

const footerComponentLinks = [
  { title: "Funnel Gallery", href: "/docs/components/funnel-gallery" },
  { title: "Liquid Frame", href: "/docs/components/liquid-frame" },
  { title: "Vision Glass Card", href: "/docs/components/vision-glass-card" },
  { title: "Orbital Flow", href: "/docs/components/orbital-flow" },
  { title: "Motion Gallery", href: "/docs/components/motion-gallery" },
  { title: "Vanilla Tilt Card", href: "/docs/components/vanilla-tilt-card" },
  { title: "Event Card", href: "/docs/components/event-card" },
  { title: "Stat Card", href: "/docs/components/stat-card" },
  { title: "Testimonial Card", href: "/docs/components/testimonial-card" },
  { title: "Navigational Card", href: "/docs/components/navigational-card" },
  { title: "Motion Sidebar", href: "/docs/components/motion-sidebar" },
  { title: "Gallery Showcase", href: "/docs/components/gallery-showcase" },
  { title: "Masonry Grid", href: "/docs/components/masonry-grid" },
  {
    title: "Tidal Text Animation",
    href: "/docs/components/tidal-text-animation",
  },
  { title: "Action Button", href: "/docs/components/action-button" },
  { title: "Read More", href: "/docs/components/read-more" },
  { title: "Quantity Stepper", href: "/docs/components/quantity-stepper" },
];

export default function Page() {
  const { twitterUrl: _twitterUrl, ...homeLayoutProps } = baseOptions();

  return (
    <HomeLayout {...homeLayoutProps}>
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_8%,hsl(var(--primary)/0.2),transparent_35%),radial-gradient(circle_at_84%_16%,hsl(var(--accent)/0.14),transparent_32%),radial-gradient(circle_at_60%_82%,hsl(var(--chart-2)/0.14),transparent_36%)]" />

        {/* Hero Section */}
        <section className="mx-auto max-w-7xl p-6">
          <div className="from-primary/10 via-background to-accent/10 border-border/70 relative overflow-hidden rounded-t-[2rem] border bg-gradient-to-br p-6 sm:p-8 lg:p-10">
            <div className="bg-primary/20 pointer-events-none absolute -top-16 -left-12 h-52 w-52 rounded-full blur-3xl" />
            <div className="bg-accent/20 pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full blur-3xl" />

            <div className="relative space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="border-border bg-background/85 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase">
                  Elixir UI
                </span>
                <span className="border-border/80 bg-secondary/60 text-secondary-foreground rounded-full border px-3 py-1 text-xs">
                  Build pages people remember
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
                  A design system for teams shipping bold, modern web pages.
                </h1>
                <p className="text-muted-foreground max-w-3xl text-base leading-relaxed sm:text-lg">
                  Use production-ready components, expressive motion, and
                  conversion-focused structures to go from idea to launch
                  without reinventing your UI each sprint.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <ActionButton
                  href="/docs/components"
                  icon={null}
                  className="px-6"
                >
                  Explore components
                </ActionButton>
                <ActionButton
                  href="/docs"
                  variant="outline"
                  icon={null}
                  className="px-6"
                >
                  Read docs
                </ActionButton>
              </div>
            </div>
          </div>
          <div className="border-border/70 bg-background/70 mt-2 rounded-b-[2rem] border p-6 backdrop-blur-sm">
            <CardContent className="grid gap-4 py-5 sm:grid-cols-3 sm:gap-6">
              <div>
                <p className="text-muted-foreground text-xs uppercase">
                  Foundation
                </p>
                <p className="text-2xl font-semibold">
                  Component-first architecture
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase">
                  Experience
                </p>
                <p className="text-2xl font-semibold">
                  Motion-enhanced sections
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase">
                  Output
                </p>
                <p className="text-2xl font-semibold">
                  Production-ready layouts
                </p>
              </div>
            </CardContent>
          </div>
        </section>

        <Separator className="mx-auto my-10 max-w-7xl" />

        {/* How To Use Components Section */}
        <section className="mx-auto max-w-7xl px-6 py-4">
          <div className="mb-6 space-y-2">
            <p className="text-muted-foreground text-xs tracking-[0.18em] uppercase">
              How to use components
            </p>
            <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
              A simple path from docs to production UI.
            </h2>
            <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed sm:text-base">
              Follow this three-step flow to integrate components quickly and
              keep your pages consistent, responsive, and ready to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {howToUseComponents.map((item) => (
              <Card
                key={item.title}
                className="border-border/70 bg-background/70 h-full"
              >
                <CardHeader className="space-y-2">
                  <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
                    Step {item.step}
                  </p>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mx-auto my-10 max-w-7xl" />

        {/* Orbital Component Map Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-6 space-y-2">
            <p className="text-muted-foreground text-xs tracking-[0.18em] uppercase">
              Live component map
            </p>
            <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
              Navigate your UI library through a cinematic orbital interface.
            </h2>
            <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed sm:text-base">
              Spin through 3D-ready building blocks, pause on hover to inspect,
              and jump straight to implementation docs in one click.
            </p>
          </div>

          <OrbitalFlow
            aspect="half"
            className="border-0"
            centerImageSrc="/logo-light.svg"
            outerTags={[
              {
                name: "Funnel Gallery",
                href: "/docs/components/funnel-gallery",
              },
              {
                name: "Liquid Frame",
                href: "/docs/components/liquid-frame",
              },
              {
                name: "Vision Glass Card",
                href: "/docs/components/vision-glass-card",
              },
              {
                name: "Motion Gallery",
                href: "/docs/components/motion-gallery",
              },
              {
                name: "Vanilla Tilt Card",
                href: "/docs/components/vanilla-tilt-card",
              },
            ]}
            innerTags={[
              { name: "Orbital Flow", href: "/docs/components/orbital-flow" },
              { name: "Event Card", href: "/docs/components/event-card" },
              {
                name: "Tidal Text Animation",
                href: "/docs/components/tidal-text-animation",
              },
              {
                name: "Gallery Showcase",
                href: "/docs/components/gallery-showcase",
              },
            ]}
          />
        </section>

        {/* 3D Components Section */}
        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div className="space-y-2">
              <p className="text-muted-foreground text-xs tracking-[0.18em] uppercase">
                3D components
              </p>
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Deeper interaction with immersive UI blocks.
              </h3>
            </div>
            <ActionButton
              href="/docs/components/liquid-frame"
              variant="outline"
              icon={null}
            >
              Browse 3D docs
            </ActionButton>
          </div>

          <div className="mt-8 grid grid-cols-1 grid-cols-[0.5fr_1.5fr_0.5fr] gap-6">
            <Card className="bg-background/80 h-full">
              <CardContent className="space-y-2 py-5">
                <p className="text-muted-foreground text-xs uppercase">
                  3D system
                </p>
                <CardTitle className="text-lg">
                  Immersive interactions
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Use Orbital Flow, Liquid Frame, and Funnel Gallery to add
                  depth without changing your design language.
                </p>
              </CardContent>
            </Card>
            <LiquidFrame src="/funnel-gallery-image-1.png" fit="cover" />
            <Card className="bg-background/80 h-full">
              <CardContent className="space-y-2 py-5">
                <p className="text-muted-foreground text-xs uppercase">
                  Implementation
                </p>
                <CardTitle className="text-lg">
                  Drop-in component workflow
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Keep 3D blocks isolated in showcase sections and pair them
                  with simple content cards for better visual rhythm.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card className="border-border/70 bg-muted/25">
              <CardContent className="space-y-6 p-6 sm:p-8">
                <div className="space-y-2">
                  <p className="text-muted-foreground text-xs tracking-[0.16em] uppercase">
                    3D component navigator
                  </p>
                  <h3 className="text-2xl font-semibold sm:text-3xl">
                    Explore immersive components for modern interfaces.
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Jump directly into Funnel Gallery, Liquid Frame, Vision Glass
                  Card, Orbital Flow, Motion Gallery, and Vanilla Tilt Card to
                  build rich, motion-first product experiences faster.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <NavigationalCard
                    title="Funnel Gallery"
                    href="/docs/components/funnel-gallery"
                    description="Layered 3D gallery layouts for bold product storytelling sections."
                    trailingIcon={<ArrowRightIcon className="size-4" />}
                    icon={<SparklesIcon className="size-fit" />}
                    className="max-w-full"
                  />
                  <NavigationalCard
                    title="Liquid Frame"
                    href="/docs/components/liquid-frame"
                    description="Fluid 3D media container for immersive hero and showcase blocks."
                    trailingIcon={<ArrowRightIcon className="size-4" />}
                    icon={<SparklesIcon className="size-fit" />}
                    className="max-w-full"
                  />
                  <NavigationalCard
                    title="Vision Glass Card"
                    href="/docs/components/vision-glass-card"
                    description="Glassmorphism-inspired 3D card with depth-focused visual styling."
                    trailingIcon={<ArrowRightIcon className="size-4" />}
                    icon={<SparklesIcon className="size-fit" />}
                    className="max-w-full"
                  />
                  <NavigationalCard
                    title="Orbital Flow"
                    href="/docs/components/orbital-flow"
                    description="Interactive orbital motion system to create cinematic 3D flow sections."
                    icon={<SparklesIcon className="size-fit" />}
                    trailingIcon={<ArrowRightIcon className="size-4" />}
                    className="max-w-full"
                  />
                  <NavigationalCard
                    title="Motion Gallery"
                    href="/docs/components/motion-gallery"
                    description="Animated gallery composition with smooth transitions and visual rhythm."
                    icon={<WandSparklesIcon className="size-fit" />}
                    trailingIcon={<ArrowRightIcon className="size-4" />}
                    className="max-w-full"
                  />
                  <NavigationalCard
                    title="Vanilla Tilt Card"
                    href="/docs/components/vanilla-tilt-card"
                    description="Responsive tilt interaction card that adds subtle motion depth on hover."
                    icon={<WandSparklesIcon className="size-fit" />}
                    trailingIcon={<ArrowRightIcon className="size-4" />}
                    className="max-w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid h-110 w-full grid-cols-[25%_49%_23%] justify-between">
            <div className="flex h-full w-full flex-col items-center justify-center gap-10 p-5">
              <VisionGlassCard className="h-full w-full" />
            </div>
            <FunnelGallery className="relative right-1 h-full max-w-full origin-top-left overflow-hidden" />
            <div className="flex h-full w-full flex-col items-center justify-center gap-10">
              <VanillaTiltCard className="h-full w-full" />
            </div>
          </div>
        </section>

        {/* Gallery Showcase Section */}
        <section className="mx-auto flex max-w-7xl flex-col px-6 py-6">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-muted-foreground text-xs tracking-[0.18em] uppercase">
                Gallery showcase
              </p>
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Visual layouts ready for modern product pages.
              </h3>
            </div>
            <ActionButton
              href="/docs/components/gallery-showcase"
              variant="outline"
              icon={null}
            >
              View component
            </ActionButton>
          </div>

          <GalleryShowcase />
        </section>

        {/* <Separator className="mx-auto my-4 max-w-7xl" /> */}

        {/* <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-6 space-y-2">
            <p className="text-muted-foreground text-xs tracking-[0.18em] uppercase">
              Workflow
            </p>
            <h3 className="text-3xl font-semibold sm:text-4xl">
              A clear path from idea to launch.
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {workflowSteps.map((step) => (
              <Card
                key={step.number}
                className="border-border/70 bg-background/80"
              >
                <CardContent className="space-y-3 py-6">
                  <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
                    {step.number}
                  </p>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}

        {/* Card Components Section */}
        <section className="mx-auto max-w-7xl px-6 py-6">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-muted-foreground text-xs tracking-[0.18em] uppercase">
                Card components
              </p>
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Event cards you can drop into launch campaigns.
              </h3>
            </div>
            <ActionButton
              href="/docs/components/event-card"
              variant="outline"
              icon={null}
            >
              See all cards
            </ActionButton>
          </div>

          <div className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <EventCard
              className="w-full max-w-sm"
              name="Elixir UI Component Sprint"
              coverImage="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80"
              date="Weekly build stream"
              venue="Elixir UI Community Live"
              price="Free for all"
            />
            <EventCard
              className="w-full max-w-sm"
              name="Motion Patterns Review"
              coverImage="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80"
              date="Bi-weekly design sync"
              venue="Design + Frontend workspace"
              price="Included in docs"
            />
            <EventCard
              className="w-full max-w-sm"
              name="Template Lab Session"
              coverImage="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80"
              date="Monthly release cycle"
              venue="Template registry channel"
              price="Open source"
            />
            <EventCard
              className="w-full max-w-sm"
              name="Docs to Production Workshop"
              coverImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
              date="Hands-on onboarding"
              venue="Elixir UI docs walkthrough"
              price="Community edition"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-6 space-y-2">
            <p className="text-muted-foreground text-xs tracking-[0.18em] uppercase">
              FAQ
            </p>
            <h3 className="text-3xl font-semibold sm:text-4xl">
              Common questions, quick answers.
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {faqs.map((item) => (
              <Card
                key={item.question}
                className="border-border/70 bg-background/75"
              >
                <CardContent className="space-y-2 py-6">
                  <CardTitle className="text-lg leading-snug">
                    {item.question}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final Call-To-Action Section */}
        <section className="mx-auto max-w-7xl px-6 pt-6 pb-14">
          <Card className="border-border/70 from-primary/10 via-background to-accent/10 bg-gradient-to-br">
            <CardContent className="flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center sm:py-10">
              <div className="space-y-2">
                <p className="text-muted-foreground text-xs tracking-[0.16em] uppercase">
                  Ready to ship
                </p>
                <h3 className="text-2xl font-semibold sm:text-3xl">
                  Design your next standout homepage today.
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <ActionButton href="/docs/components" icon={null}>
                  Start with components
                </ActionButton>
                <ActionButton href="/docs" variant="outline" icon={null}>
                  Open documentation
                </ActionButton>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer Section */}
        <footer className="mt-12 w-full border-t border-white/10 bg-black text-zinc-200">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-[0.16em] text-zinc-300 uppercase">
                  Elixir UI
                </p>
                <p className="text-sm leading-relaxed text-zinc-400">
                  A modern component system for shipping expressive pages
                  faster.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-[0.16em] text-zinc-300 uppercase">
                  Explore
                </p>
                <div className="text-sm">
                  <Link className="text-zinc-400 hover:text-white" href="/docs">
                    Documentation
                  </Link>
                </div>
                <div className="text-sm">
                  <Link
                    className="text-zinc-400 hover:text-white"
                    href="/docs/components"
                  >
                    Components
                  </Link>
                </div>
                <div className="text-sm">
                  <Link
                    className="text-zinc-400 hover:text-white"
                    href="/docs/installation"
                  >
                    Installation
                  </Link>
                </div>
              </div>

              <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                <p className="text-xs font-semibold tracking-[0.16em] text-zinc-300 uppercase">
                  Components
                </p>
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-1">
                  {footerComponentLinks.map((item) => (
                    <div key={item.href} className="text-sm">
                      <Link
                        className="text-zinc-400 hover:text-white"
                        href={item.href}
                      >
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                <p className="text-xs font-semibold tracking-[0.16em] text-zinc-300 uppercase">
                  Status
                </p>
                <p className="text-sm text-zinc-400">
                  Built with shared tokens, reusable blocks, and motion-first UI
                  patterns.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-xs text-zinc-500">
              © {new Date().getFullYear()} Elixir UI. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </HomeLayout>
  );
}
