import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { posts } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, priority: 1 },
    { url: `${site.url}/writing/`, priority: 0.8 },
    ...posts.filter((p) => !p.meta.draft).map((p) => ({ url: `${site.url}/writing/${p.slug}/`, priority: 0.6 })),
  ];
}
