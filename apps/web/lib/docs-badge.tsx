import { Badge } from "@workspace/ui/components/badge";

const NEW_COMPONENT_URLS = new Set([
  "/docs/components/gallery-showcase",
  "/docs/components/masonry-grid",
  "/docs/components/tidal-text-animation",
  "/docs/components/read-more",
  "/docs/components/quantity-stepper",
]);

export function docsBadge(text: string, url: string) {
  if (!NEW_COMPONENT_URLS.has(url)) return text;

  return (
    <span className="inline-flex w-full items-center justify-between gap-2">
      <span className="min-w-0 truncate">{text}</span>
      <Badge
        variant="outline"
        className="h-5 shrink-0 rounded-full border-emerald-500/40 bg-emerald-500/10 px-1.5 text-[10px] leading-none font-semibold uppercase tracking-wide text-emerald-300 whitespace-nowrap"
      >
        New
      </Badge>
    </span>
  );
}
