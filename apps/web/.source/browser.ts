// @ts-nocheck
import { browser } from "fumadocs-mdx/runtime/browser";

import type * as Config from "../source.config";

const create = browser<
  typeof Config,
  import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
    DocData: {};
  }
>();
const browserCollections = {
  docs: create.doc("docs", {
    "index.mdx": () => import("../content/docs/index.mdx?collection=docs"),
    "installation.mdx": () =>
      import("../content/docs/installation.mdx?collection=docs"),
    "components/action-button.mdx": () =>
      import("../content/docs/components/action-button.mdx?collection=docs"),
    "components/action-input.mdx": () =>
      import("../content/docs/components/action-input.mdx?collection=docs"),
    "components/event-card.mdx": () =>
      import("../content/docs/components/event-card.mdx?collection=docs"),
    "components/funnel-gallery.mdx": () =>
      import("../content/docs/components/funnel-gallery.mdx?collection=docs"),
    "components/gallery-showcase.mdx": () =>
      import("../content/docs/components/gallery-showcase.mdx?collection=docs"),
    "components/index.mdx": () =>
      import("../content/docs/components/index.mdx?collection=docs"),
    "components/liquid-frame.mdx": () =>
      import("../content/docs/components/liquid-frame.mdx?collection=docs"),
    "components/masonry-grid.mdx": () =>
      import("../content/docs/components/masonry-grid.mdx?collection=docs"),
    "components/motion-gallery.mdx": () =>
      import("../content/docs/components/motion-gallery.mdx?collection=docs"),
    "components/motion-sidebar.mdx": () =>
      import("../content/docs/components/motion-sidebar.mdx?collection=docs"),
    "components/navigational-card.mdx": () =>
      import("../content/docs/components/navigational-card.mdx?collection=docs"),
    "components/orbital-flow.mdx": () =>
      import("../content/docs/components/orbital-flow.mdx?collection=docs"),
    "components/quantity-stepper.mdx": () =>
      import("../content/docs/components/quantity-stepper.mdx?collection=docs"),
    "components/read-more.mdx": () =>
      import("../content/docs/components/read-more.mdx?collection=docs"),
    "components/stat-card.mdx": () =>
      import("../content/docs/components/stat-card.mdx?collection=docs"),
    "components/testimonial-card.mdx": () =>
      import("../content/docs/components/testimonial-card.mdx?collection=docs"),
    "components/tidal-text-animation.mdx": () =>
      import("../content/docs/components/tidal-text-animation.mdx?collection=docs"),
    "components/vanilla-tilt-card.mdx": () =>
      import("../content/docs/components/vanilla-tilt-card.mdx?collection=docs"),
    "components/vision-glass-card.mdx": () =>
      import("../content/docs/components/vision-glass-card.mdx?collection=docs"),
    "templates/blog.mdx": () =>
      import("../content/docs/templates/blog.mdx?collection=docs"),
    "templates/e-commerce.mdx": () =>
      import("../content/docs/templates/e-commerce.mdx?collection=docs"),
    "templates/index.mdx": () =>
      import("../content/docs/templates/index.mdx?collection=docs"),
    "templates/portfolio.mdx": () =>
      import("../content/docs/templates/portfolio.mdx?collection=docs"),
  }),
};
export default browserCollections;
