// @ts-nocheck
import { server } from "fumadocs-mdx/runtime/server";

import * as __fd_glob_4 from "../content/docs/components/action-button.mdx?collection=docs";
import * as __fd_glob_5 from "../content/docs/components/event-card.mdx?collection=docs";
import * as __fd_glob_6 from "../content/docs/components/funnel-gallery.mdx?collection=docs";
import * as __fd_glob_7 from "../content/docs/components/gallery-showcase.mdx?collection=docs";
import * as __fd_glob_8 from "../content/docs/components/index.mdx?collection=docs";
import * as __fd_glob_9 from "../content/docs/components/liquid-frame.mdx?collection=docs";
import * as __fd_glob_10 from "../content/docs/components/masonry-grid.mdx?collection=docs";
import * as __fd_glob_11 from "../content/docs/components/motion-gallery.mdx?collection=docs";
import * as __fd_glob_12 from "../content/docs/components/motion-sidebar.mdx?collection=docs";
import * as __fd_glob_13 from "../content/docs/components/navigational-card.mdx?collection=docs";
import * as __fd_glob_14 from "../content/docs/components/orbital-flow.mdx?collection=docs";
import * as __fd_glob_15 from "../content/docs/components/quantity-stepper.mdx?collection=docs";
import * as __fd_glob_16 from "../content/docs/components/read-more.mdx?collection=docs";
import * as __fd_glob_17 from "../content/docs/components/stat-card.mdx?collection=docs";
import * as __fd_glob_18 from "../content/docs/components/testimonial-card.mdx?collection=docs";
import * as __fd_glob_19 from "../content/docs/components/tidal-text-animation.mdx?collection=docs";
import * as __fd_glob_20 from "../content/docs/components/vanilla-tilt-card.mdx?collection=docs";
import * as __fd_glob_21 from "../content/docs/components/vision-glass-card.mdx?collection=docs";
import * as __fd_glob_3 from "../content/docs/installation.mdx?collection=docs";
import * as __fd_glob_22 from "../content/docs/templates/blog.mdx?collection=docs";
import * as __fd_glob_23 from "../content/docs/templates/e-commerce.mdx?collection=docs";
import * as __fd_glob_24 from "../content/docs/templates/index.mdx?collection=docs";
import * as __fd_glob_25 from "../content/docs/templates/portfolio.mdx?collection=docs";
import type * as Config from "../source.config";
import { default as __fd_glob_1 } from "../content/docs/components/meta.json?collection=docs";
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs";
import { default as __fd_glob_2 } from "../content/docs/templates/meta.json?collection=docs";

const create = server<
  typeof Config,
  import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
    DocData: {};
  }
>({ doc: { passthroughs: ["extractedReferences"] } });

export const docs = await create.docs(
  "docs",
  "content/docs",
  {
    "meta.json": __fd_glob_0,
    "components/meta.json": __fd_glob_1,
    "templates/meta.json": __fd_glob_2,
  },
  {
    "installation.mdx": __fd_glob_3,
    "components/action-button.mdx": __fd_glob_4,
    "components/event-card.mdx": __fd_glob_5,
    "components/funnel-gallery.mdx": __fd_glob_6,
    "components/gallery-showcase.mdx": __fd_glob_7,
    "components/index.mdx": __fd_glob_8,
    "components/liquid-frame.mdx": __fd_glob_9,
    "components/masonry-grid.mdx": __fd_glob_10,
    "components/motion-gallery.mdx": __fd_glob_11,
    "components/motion-sidebar.mdx": __fd_glob_12,
    "components/navigational-card.mdx": __fd_glob_13,
    "components/orbital-flow.mdx": __fd_glob_14,
    "components/quantity-stepper.mdx": __fd_glob_15,
    "components/read-more.mdx": __fd_glob_16,
    "components/stat-card.mdx": __fd_glob_17,
    "components/testimonial-card.mdx": __fd_glob_18,
    "components/tidal-text-animation.mdx": __fd_glob_19,
    "components/vanilla-tilt-card.mdx": __fd_glob_20,
    "components/vision-glass-card.mdx": __fd_glob_21,
    "templates/blog.mdx": __fd_glob_22,
    "templates/e-commerce.mdx": __fd_glob_23,
    "templates/index.mdx": __fd_glob_24,
    "templates/portfolio.mdx": __fd_glob_25,
  }
);
