import dynamic from "next/dynamic";

export const showcaseComponents = {
  EventCard: dynamic(() =>
    import("@workspace/ui/components/event-card").then((mod) => mod.EventCard)
  ),
  FunnelGallery: dynamic(() =>
    import("@workspace/ui/components/funnel-gallery").then(
      (mod) => mod.FunnelGallery
    )
  ),
  GalleryShowcase: dynamic(() =>
    import("@workspace/ui/components/gallery-showcase").then(
      (mod) => mod.GalleryShowcase
    )
  ),
  LiquidFrame: dynamic(() =>
    import("@workspace/ui/components/liquid-frame").then(
      (mod) => mod.LiquidFrame
    )
  ),
  MasonryGrid: dynamic(() =>
    import("@workspace/ui/components/masonry-grid").then(
      (mod) => mod.MasonryGrid
    )
  ),
  MotionGallery: dynamic(() =>
    import("@workspace/ui/components/motion-gallery").then(
      (mod) => mod.MotionGallery
    )
  ),
  MotionSidebar: dynamic(() =>
    import("@workspace/ui/components/motion-sidebar").then(
      (mod) => mod.MotionSidebar
    )
  ),
  NavigationalCard: dynamic(() =>
    import("@workspace/ui/components/navigational-card").then(
      (mod) => mod.NavigationalCard
    )
  ),
  OrbitalFlow: dynamic(() =>
    import("@workspace/ui/components/orbital-flow").then(
      (mod) => mod.OrbitalFlow
    )
  ),
  QuantityStepper: dynamic(() =>
    import("@workspace/ui/components/quantity-stepper").then(
      (mod) => mod.QuantityStepper
    )
  ),
  ReadMore: dynamic(() =>
    import("@workspace/ui/components/read-more").then((mod) => mod.ReadMore)
  ),
  StatCard: dynamic(() =>
    import("@workspace/ui/components/stat-card").then((mod) => mod.StatCard)
  ),
  TidalTextAnimation: dynamic(() =>
    import("@workspace/ui/components/tidal-text-animation").then(
      (mod) => mod.TidalTextAnimation
    )
  ),
  VanillaTiltCard: dynamic(() =>
    import("@workspace/ui/components/vanilla-tilt-card").then(
      (mod) => mod.VanillaTiltCard
    )
  ),
  VisionGlassCard: dynamic(() =>
    import("@workspace/ui/components/vision-glass-card").then(
      (mod) => mod.VisionGlassCard
    )
  ),
};
