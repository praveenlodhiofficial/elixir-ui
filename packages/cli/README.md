# @praveenlodhi/elixir-ui

CLI for adding Elixir UI components to your project.

## What is Elixir UI?

Elixir UI is a component collection for modern React/Next.js apps. The CLI helps
you copy selected components into your project with the required internal files
and external package dependencies.

## Install and run the CLI

Use one of the following commands without installing globally:

```bash
npx @praveenlodhi/elixir-ui add <COMPONENT_NAME>
```

```bash
pnpm dlx @praveenlodhi/elixir-ui add <COMPONENT_NAME>
```

```bash
yarn dlx @praveenlodhi/elixir-ui add <COMPONENT_NAME>
```

```bash
bun x @praveenlodhi/elixir-ui add <COMPONENT_NAME>
```

Add multiple components at once:

```bash
npx @praveenlodhi/elixir-ui add motion-sidebar motion-gallery orbital-flow
```

## What the add command does

- Copies component files from the packaged registry into your current project
- Resolves and copies internal dependencies used by each component
- Installs required npm packages automatically using your project package manager
  (bun, pnpm, yarn, or npm)

## Output paths

- Component files are written to `src/components/ui`
- Internal support files are written to their matching folders (for example
  `src/lib`, `src/hooks`, and `src/styles`) when required by a component

## Available in docs navigation

The following items are currently exposed from the shared layout navigation.

### Templates

- portfolio
- e-commerce
- blog

### Components

#### 3D Components

- funnel-gallery
- liquid-frame
- vision-glass-card
- orbital-flow
- motion-gallery
- vanilla-tilt-card

#### Card Components

- testimonial-card
- event-card
- stat-card
- navigational-card

#### Navigation

- motion-sidebar

#### Layout Components

- gallery-showcase
- masonry-grid

#### Text Components

- tidal-text-animation

#### UI Components

- action-button
- read-more
- quantity-stepper

## Local development

Install dependencies:

```bash
bun install
```

Generate registry metadata and files:

```bash
bun run generate:registry
```

Build CLI bundle:

```bash
bun run build
```

Watch mode for development:

```bash
bun run dev
```

## Publish

```bash
npm publish --access public
```

prepublishOnly runs the build automatically.
