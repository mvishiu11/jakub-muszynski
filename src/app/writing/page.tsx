import type { Metadata } from "next";
import { posts } from "@/content";
import { PostList } from "@/components/PostList";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on research, engineering and building companies.",
  alternates: { canonical: "/writing/" },
};

export default function Writing() {
  return (
    <section className="block wrap" style={{ borderBottom: 0 }}>
      <div className="sec-head">
        <h1 className="page-title">Writing</h1>
      </div>
      <p className="lede" style={{ margin: "0 0 32px" }}>
        Notes on research, engineering and building companies. Each one starts with a claim and ends with the
        questions I couldn&apos;t close.
      </p>
      <PostList posts={posts} />
    </section>
  );
}
