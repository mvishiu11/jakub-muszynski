import Link from "next/link";

export default function NotFound() {
  return (
    <section className="block wrap" style={{ paddingBlock: "6rem", borderBottom: 0 }}>
      <p className="label">404 | Not on this sheet</p>
      <h1 className="page-title" style={{ margin: "12px 0 24px" }}>Nothing drawn here.</h1>
      <Link href="/">Back to the home page →</Link>
    </section>
  );
}
