import { baseOptions } from "@/web/lib/layout.shared";

interface FooterPage {
  url: string;
  data: {
    title?: string;
    description?: string;
  };
}

interface FooterItem {
  name: string;
  description?: string;
  url: string;
}

function normalizeUrl(url: string) {
  if (url.length > 1 && url.endsWith("/")) return url.slice(0, -1);
  return url;
}

function toLabel(page: FooterPage) {
  const fallback = page.url.split("/").filter(Boolean).pop() ?? "Untitled";
  return page.data.title?.trim() || fallback;
}

function getOrderedDocUrlsFromLayout() {
  const links = baseOptions().links ?? [];
  const urls: string[] = [];
  const seen = new Set<string>();

  const pushUrl = (value: unknown) => {
    if (typeof value !== "string") return;
    if (!value.startsWith("/docs")) return;

    const normalized = normalizeUrl(value);
    if (seen.has(normalized)) return;

    seen.add(normalized);
    urls.push(normalized);
  };

  for (const link of links) {
    if ("url" in link) {
      pushUrl(link.url);
    }

    if ("items" in link && Array.isArray(link.items)) {
      for (const item of link.items) {
        if ("url" in item) {
          pushUrl(item.url);
        }
      }
    }
  }

  return urls;
}

export function getDocsFooterItems(
  pages: FooterPage[],
  currentUrl: string
): {
  previous?: FooterItem;
  next?: FooterItem;
} {
  const orderedUrls = getOrderedDocUrlsFromLayout();
  const orderedUrlSet = new Set(orderedUrls);
  const pageByUrl = new Map(
    pages.map((item) => [normalizeUrl(item.url), item])
  );

  const orderedPages = orderedUrls
    .map((url) => pageByUrl.get(url))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  for (const item of pages) {
    const normalized = normalizeUrl(item.url);
    if (!orderedUrlSet.has(normalized)) {
      orderedPages.push(item);
    }
  }

  const currentIndex = orderedPages.findIndex(
    (item) => normalizeUrl(item.url) === normalizeUrl(currentUrl)
  );

  const previousPage =
    currentIndex > 0 ? orderedPages[currentIndex - 1] : undefined;
  const nextPage =
    currentIndex >= 0 && currentIndex < orderedPages.length - 1
      ? orderedPages[currentIndex + 1]
      : undefined;

  return {
    previous: previousPage
      ? {
          name: toLabel(previousPage),
          description: previousPage.data.description,
          url: previousPage.url,
        }
      : undefined,
    next: nextPage
      ? {
          name: toLabel(nextPage),
          description: nextPage.data.description,
          url: nextPage.url,
        }
      : undefined,
  };
}
