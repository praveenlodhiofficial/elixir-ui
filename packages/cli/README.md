# @praveenlodhi/elixir-ui

CLI for adding Elixir UI components to your project.

## What is Elixir UI?

Elixir UI is a component collection for modern React/Next.js apps. The CLI helps
you copy selected components into your project with the required internal files
and external package dependencies.

## Install and run the CLI

Use one of the following commands without installing globally:

```bash
npx @praveenlodhi/elixir-ui add motion-sidebar
```

```bash
pnpm dlx @praveenlodhi/elixir-ui add motion-sidebar
```

```bash
yarn dlx @praveenlodhi/elixir-ui add motion-sidebar
```

```bash
bun x @praveenlodhi/elixir-ui add motion-sidebar
```

Or install globally:

```bash
npm i -g @praveenlodhi/elixir-ui
elixir-ui add motion-sidebar
```

Add multiple components at once:

```bash
elixir-ui add motion-sidebar motion-gallery orbital-flow
```

## What the add command does

- Copies component files from the packaged registry into your current project
- Resolves and copies internal dependencies used by each component
- Installs required npm packages automatically using your project package manager
  (bun, pnpm, yarn, or npm)

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

#### Text Components

- tidal-text-animation

#### UI Components

- action-button
- action-input

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
