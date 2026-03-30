import Image from "next/image";

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps & { twitterUrl?: string } {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-1.5">
          <Image
            src="/logo.svg"
            alt="Elixir UI"
            height={20}
            width={20}
            className="size-5.5 shrink-0 dark:invert"
            aria-hidden="true"
          />
          <span className="text-base font-medium">Elixir UI</span>
        </span>
      ),
    },
    links: [
      /* ================================================ Main Navigation =================================================== */
      {
        text: "Documentation",
        url: "/docs/installation",
        on: "nav",
      },
      {
        text: "Components",
        url: "/docs/components",
        on: "nav",
      },
      {
        text: "Templates",
        url: "/docs/templates",
        on: "nav",
      },

      /* ================================================= Sidebar Menu =================================================== */
      /* ================================= Getting Started =================================== */
      {
        type: "custom",
        secondary: true,
        on: "menu",
        children: (
          <p className="[&amp;_svg]:size-4 [&amp;_svg]:shrink-0 mt-6 mb-1 inline-flex items-center gap-2 px-2 text-xs first:mt-0 empty:mb-0">
            Getting Started
          </p>
        ),
      },
      {
        text: "Installation",
        url: "/docs/installation",
        on: "menu",
      },
      {
        text: "Components",
        url: "/docs/components",
        on: "menu",
      },
      {
        text: "Templates",
        url: "/docs/templates",
        on: "menu",
      },

      /* ================================== Templates ==================================== */
      {
        type: "custom",
        secondary: true,
        on: "menu",
        children: (
          <p className="[&amp;_svg]:size-4 [&amp;_svg]:shrink-0 mt-6 mb-1 inline-flex items-center gap-2 px-2 pt-7 text-xs first:mt-0 empty:mb-0">
            Templates
          </p>
        ),
      },
      {
        text: "Portfolio",
        description: "A modern portfolio template",
        url: "/docs/templates/portfolio",
        on: "menu",
      },
      {
        text: "E-commerce",
        description: "A stylish e-commerce template",
        url: "/docs/templates/e-commerce",
        on: "menu",
      },
      {
        text: "Blog",
        description: "A clean blog template",
        url: "/docs/templates/blog",
        on: "menu",
      },

      /* ================================== Components ==================================== */
      {
        type: "custom",
        secondary: true,
        on: "menu",
        children: (
          <p className="[&amp;_svg]:size-4 [&amp;_svg]:shrink-0 mt-6 mb-1 inline-flex items-center gap-2 px-2 pt-7 text-xs first:mt-0 empty:mb-0">
            Components
          </p>
        ),
      },
      {
        type: "menu",
        text: "3D Components",
        on: "menu",
        external: true,
        items: [
          {
            text: "Funnel Gallery",
            description: "Explore the Funnel Gallery",
            url: "/docs/components/funnel-gallery",
          },
          {
            text: "Liquid Frame",
            description: "Discover the Liquid Frame component",
            url: "/docs/components/liquid-frame",
          },
          {
            text: "Vision Glass Card",
            description: "Discover the Vision Glass Card component",
            url: "/docs/components/vision-glass-card",
          },
          {
            text: "Orbital Flow",
            description: "Experience the Orbital Flow component",
            url: "/docs/components/orbital-flow",
          },
          {
            text: "Motion Gallery",
            description: "Browse the Motion Gallery component",
            url: "/docs/components/motion-gallery",
          },
          {
            text: "Vanilla Tilt Card",
            description: "Check out the Vanilla Tilt Card component",
            url: "/docs/components/vanilla-tilt-card",
          },
        ],
      },
      {
        type: "menu",
        text: "Card Components",
        on: "menu",
        items: [
          {
            text: "Event Card",
            description: "Showcase upcoming events and details",
            url: "/docs/components/event-card",
          },
          {
            text: "Testimonial Card",
            description: "Showcase customer testimonials and reviews",
            url: "/docs/components/testimonial-card",
          },
          {
            text: "Stat Card",
            description: "Display key metrics and statistics",
            url: "/docs/components/stat-card",
          },
          {
            text: "Navigational Card",
            description: "Interactive navigation card component",
            url: "/docs/components/navigational-card",
          },
        ],
      },
      {
        type: "menu",
        text: "Navigation",
        on: "menu",
        items: [
          {
            text: "Motion Sidebar",
            description:
              "An animated sidebar menu with smooth transitions and expandable navigation.",
            url: "/docs/components/motion-sidebar",
          },
        ],
      },
      {
        type: "menu",
        text: "Layout Components",
        on: "menu",
        items: [
          {
            text: "Gallery Showcase",
            description:
              "A responsive image gallery component with thumbnail previews.",
            url: "/docs/components/gallery-showcase",
          },
          {
            text: "Masonry Grid",
            description: "A responsive masonry grid layout component",
            url: "/docs/components/masonry-grid",
          },
        ],
      },
      {
        type: "menu",
        text: "Text Components",
        on: "menu",
        items: [
          {
            text: "Tidal Text Animation",
            description: "Animated text wave effect",
            url: "/docs/components/tidal-text-animation",
          },
        ],
      },
      {
        type: "menu",
        text: "UI Components",
        on: "menu",
        items: [
          {
            text: "Action Button",
            description: "Reusable action button component",
            url: "/docs/components/action-button",
          },
          {
            text: "Read More",
            description: "Expandable text component",
            url: "/docs/components/read-more",
          },
          {
            text: "Quantity Stepper",
            description: "Increment/decrement numeric input",
            url: "/docs/components/quantity-stepper",
          },
        ],
      },
    ],
    twitterUrl: "https://twitter.com/praveenlodhiofficial",
    githubUrl: "https://github.com/praveenlodhiofficial/elixir-ui",
  };
}
