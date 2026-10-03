import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { site } from "@/data/site";
import { themeScript } from "@/components/ThemeToggle";
import { Nav } from "@/components/Nav";
import { CopyEmail } from "@/components/CopyEmail";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, url: site.url, siteName: site.name, locale: "en_US", type: "website" },
  twitter: { card: "summary", title: site.name, description: site.description },
  alternates: { canonical: "/", types: { "application/rss+xml": `${base}/feed.xml` } },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F5F1" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1A29" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&family=IBM+Plex+Serif:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <a className="skip" href="#content">Skip to content</a>
        <div className="sheet">
          <div className="zones" aria-hidden="true">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <span key={n}>{n}</span>)}
          </div>
          <header className="top">
            <Link className="brand" href="/">
              <span className="mark" aria-hidden="true">JM</span>
              <span className="brand-name">{site.name}</span>
            </Link>
            <Nav />
          </header>
          <main id="content">{children}</main>
          <footer className="contact" id="contact">
            <div><small>CONTACT</small><CopyEmail email={site.email} /></div>
            <div>
              <small>ELSEWHERE</small>
              <a href={site.links.github} target="_blank" rel="noopener">GitHub</a> |{" "}
              <a href={site.links.linkedin} target="_blank" rel="noopener">LinkedIn</a> |{" "}
              <a href={site.links.orcid} target="_blank" rel="noopener">ORCID</a> |{" "}
              <a href={`${base}/feed.xml`}>RSS</a>
            </div>
            <div><small>COPYRIGHT</small>© {new Date().getFullYear()} J. Muszyński | Warsaw</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
