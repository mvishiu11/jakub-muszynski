/**
 * Fully static site: `next build` writes plain HTML/CSS/JS to ./out.
 * The same output deploys to Vercel, GitHub Pages, Cloudflare or any static host.
 *
 * BASE_PATH is only needed when the site is served from a sub-path, e.g. the
 * default GitHub Pages URL https://mvishiu11.github.io/jakub-muszynski.
 * The Pages workflow sets it automatically; leave it empty everywhere else.
 */
const basePath = process.env.BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
