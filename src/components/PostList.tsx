import Link from "next/link";
import type { Post } from "@/content";

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Link key={p.slug} className="post-link" href={`/writing/${p.slug}/`}>
          <span className="label">{p.meta.no}</span>
          <span>
            <span className="t">{p.meta.title}</span>
            <span className="d">{p.meta.dek}</span>
          </span>
          <span className="chip">
            {p.meta.tag} | {p.readingTime}
            {p.meta.draft ? " | draft" : ""}
          </span>
        </Link>
      ))}
    </div>
  );
}
