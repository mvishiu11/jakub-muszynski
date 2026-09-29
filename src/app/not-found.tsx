import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap" style={{ paddingBlock: "6rem" }}>
      <p className="eyebrow">404 | No signal</p>
      <h1>Nothing on this line.</h1>
      <Link className="btn primary" href="/">Back to the home page</Link>
    </main>
  );
}
