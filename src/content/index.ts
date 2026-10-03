import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

import Words, { meta as wordsMeta } from "./posts/explaining-a-model-that-listens.mdx";
import Cern, { meta as cernMeta } from "./posts/software-for-an-experiment-you-cannot-rerun.mdx";
import Lox, { meta as loxMeta } from "./posts/writing-the-same-language-twice.mdx";
import Theseus, { meta as theseusMeta } from "./posts/the-ship-of-theseus-as-a-startup.mdx";

export type PostMeta = {
  no: string;
  title: string;
  dek: string;
  tag: string;
  claim: string;
  date: string;
  draft?: boolean;
};

export type Post = {
  slug: string;
  meta: PostMeta;
  Body: ComponentType;
  readingTime: string;
};

// To add a post: create src/content/posts/<slug>.mdx with `export const meta`, then add one line here.
// Order here is the order on the site.
const registry: [string, PostMeta, ComponentType][] = [
  ["explaining-a-model-that-listens", wordsMeta, Words],
  ["software-for-an-experiment-you-cannot-rerun", cernMeta, Cern],
  ["writing-the-same-language-twice", loxMeta, Lox],
  ["the-ship-of-theseus-as-a-startup", theseusMeta, Theseus],
];

function readingTime(slug: string): string {
  const raw = fs.readFileSync(path.join(process.cwd(), "src/content/posts", `${slug}.mdx`), "utf8");
  const text = raw
    .replace(/^export const meta = \{[\s\S]*?\n\};/m, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#*`[\]()]/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min`;
}

export const posts: Post[] = registry.map(([slug, meta, Body]) => ({
  slug,
  meta,
  Body,
  readingTime: readingTime(slug),
}));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
