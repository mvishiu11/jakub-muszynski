import Link from "next/link";
import { now, work, research, built, recognition, site, type Entry, type Cell } from "@/data/site";
import { posts } from "@/content";
import { PostList } from "@/components/PostList";

const ext = { target: "_blank", rel: "noopener" } as const;

function Rows({ items }: { items: Entry[] }) {
  return (
    <div className="rows">
      {items.map((e) => (
        <div className="row" key={e.title + e.when}>
          <span className="when">{e.when}</span>
          <div>
            <h3>{e.title} <span className="sub">| {e.sub}</span></h3>
            <p>{e.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Cells({ items }: { items: Cell[] }) {
  return (
    <div className="grid2">
      {items.map((c) => (
        <div className="cell" key={c.title}>
          <span className="label">{c.label}</span>
          <h3>{c.href ? <a href={c.href} {...ext}>{c.title}</a> : c.title}</h3>
          <p>{c.body}</p>
          {c.links && (
            <div className="links">
              {c.links.map((l) =>
                l.href.startsWith("/") ? (
                  <Link key={l.href} href={l.href}>{l.label}</Link>
                ) : (
                  <a key={l.href} href={l.href} {...ext}>{l.label}</a>
                ),
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Structured data: tells search engines this page is about one person and which profiles are theirs.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: "Jakub Muszynski",
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Engineer and founder",
  description: site.description,
  address: { "@type": "PostalAddress", addressLocality: "Warsaw", addressCountry: "PL" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Warsaw University of Technology" },
  sameAs: [site.links.linkedin, site.links.github, site.links.orcid, "https://aclanthology.org/people/jakub-muszynski/"],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <div className="hero">
        <div className="hero-main">
          <p className="label" style={{ margin: "0 0 20px" }}>Engineer | Founder | Researcher</p>
          <h1>Hard things,<br />done <span className="circled">right.</span></h1>
          <div className="dim" aria-hidden="true"><b /><i /><span>tolerance ±0</span><i /><b /></div>
          <p className="lede">
            I&apos;m Jakub, an engineer and founder from Warsaw. I like problems where almost right is the same as
            wrong: detector software at CERN, model inference at TSMC, risk systems at Point72, and two companies of my
            own. On the research side, I work on explaining what neural networks actually listen to.
          </p>
        </div>
        <aside className="tb" aria-label="Title block">
          <div><small>DRAWN BY</small>J. MUSZYŃSKI</div>
          <div><small>DISCIPLINE</small>ENGINEER | FOUNDER | RESEARCHER</div>
          <div><small>LOCATION</small>WARSAW | 52.23 N 21.01 E</div>
          <div><small>SCALE</small>1:1</div>
          <div className="pair"><div><small>REV</small>2026-10</div><div><small>SHEET</small>1 OF 1</div></div>
          <div className="name">{site.name}</div>
        </aside>
      </div>

      <section className="block wrap" id="now">
        <div className="sec-head"><h2>Now</h2><span className="label">Autumn 2026</span></div>
        <Rows items={now} />
      </section>

      <section className="block wrap" id="writing">
        <div className="sec-head"><h2>Writing</h2><Link className="label" href="/writing/">All posts →</Link></div>
        <PostList posts={posts} />
      </section>

      <section className="block wrap" id="work">
        <div className="sec-head"><h2>Work</h2><span className="label">Before now</span></div>
        <Rows items={work} />
      </section>

      <section className="block wrap" id="research">
        <div className="sec-head"><h2>Research</h2><a className="label" href={site.links.orcid} {...ext}>ORCID →</a></div>
        <Cells items={research} />
      </section>

      <section className="block wrap" id="built">
        <div className="sec-head"><h2>Built in the open</h2><a className="label" href={site.links.github} {...ext}>GitHub →</a></div>
        <Cells items={built} />
      </section>

      <section className="block wrap" id="recognition">
        <div className="sec-head"><h2>Recognition</h2></div>
        <ul className="honors">
          {recognition.map((r) => <li key={r.what}><span>{r.year}</span>{r.what}</li>)}
        </ul>
      </section>
    </>
  );
}
