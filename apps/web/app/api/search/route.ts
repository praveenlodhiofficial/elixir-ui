import { createFromSource } from "fumadocs-core/search/server";

import { source } from "@/web/lib/source";

export const { GET } = createFromSource(source);
