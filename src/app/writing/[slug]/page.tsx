import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.dek,
    alternates: { canonical: `/writing/${slug}/` },
    openGraph: { title: post.meta.title, description: post.meta.dek, type: "article" },
    // Drafts are reachable by link but kept out of search engines until published.
    robots: post.meta.draft ? { index: false, follow: true } : undefined,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const i = posts.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const post = posts[i];
  const prev = posts[i - 1];
  const next = posts[i + 1];
  const { Body, meta } = post;

  return (
    <>
      <div className="meta">
        <div><small>NOTE</small>{meta.no}</div>
        <div><small>SUBJECT</small>{meta.tag}</div>
        <div><small>READING</small>{post.readingTime}</div>
        <div><small>STATUS</small>{meta.draft ? <span className="draft">Draft</span> : meta.date}</div>
      </div>
      <article className="post">
        <div className="post-inner">
          <h1>{meta.title}</h1>
          <p className="dek">{meta.dek}</p>
          <div className="claim"><b>CLAIM</b>{meta.claim}</div>
          <div className="prose">
            <Body />
          </div>
          <div className="post-foot">
            {prev ? <Link href={`/writing/${prev.slug}/`}>← {prev.meta.title}</Link> : <Link href="/writing/">← All writing</Link>}
            {next ? <Link href={`/writing/${next.slug}/`}>Next: {next.meta.title} →</Link> : <Link href="/writing/">All writing →</Link>}
          </div>
        </div>
      </article>
    </>
  );
}
