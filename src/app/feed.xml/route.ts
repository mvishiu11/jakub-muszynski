import { posts } from "@/content";
import { site } from "@/data/site";

export const dynamic = "force-static";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const published = posts.filter((p) => !p.meta.draft);
  const items = published
    .map((p) => {
      const url = `${site.url}/writing/${p.slug}/`;
      return `<item><title>${esc(p.meta.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${new Date(p.meta.date).toUTCString()}</pubDate><description>${esc(p.meta.dek)}</description></item>`;
    })
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(site.name)}</title><link>${site.url}/writing/</link><description>${esc("Notes on research, engineering and building companies.")}</description><language>en</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
