import { site, now, publications, attribution, built, record } from "@/data/site";
import { Logo } from "@/components/Logo";
import { LoadChart } from "@/components/LoadChart";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CopyEmail } from "@/components/CopyEmail";

const ext = { target: "_blank", rel: "noopener" } as const;

export default function Home() {
  const maxAttr = Math.max(...attribution.map(([, v]) => Math.abs(v)));

  return (
    <>
      <a className="skip" href="#now">Skip to content</a>
      <header className="top">
        <div className="wrap">
          <a className="brand" href="#top" aria-label={`${site.name}, home`}>
            <Logo />
            <span>{site.name}</span>
          </a>
          <nav aria-label="Sections">
            <a href="#now">Now</a>
            <a href="#research">Research</a>
            <a className="opt" href="#built">Built</a>
            <a className="opt" href="#record">Record</a>
            <a href="#contact">Contact</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top" className="wrap">
        <div className="hero">
          <div className="hero-text">
            <p className="eyebrow">{site.eyebrow.join(" | ")}</p>
            <h1>
              I make energy systems decide<span className="s">,</span> and AI models explain
              <span className="s">.</span>
            </h1>
            <p className="lede">
              I co-founded <em>EnergyScope</em>, where we operate batteries, solar and market contracts for
              Polish factories as one optimised system. I also build risk systems at Point72 and research
              explainability for audio-language models at Warsaw University of Technology.
            </p>
            <div className="cta">
              <a className="btn primary" href="#contact">Get in touch</a>
              <a className="btn" href="#research">Read the research</a>
            </div>
          </div>
          <figure className="hero-fig">
            <div className="inst">
              <div className="inst-head">
                <span><b>Site load</b> | 96 quarter-hours</span>
                <span>kW</span>
              </div>
              <LoadChart />
              <div className="legend">
                <span><i className="raw" />Load</span>
                <span><i />Grid import</span>
                <span><i className="bat" />Battery discharge</span>
                <span><i className="lim" />Contracted power</span>
              </div>
            </div>
            <figcaption>
              Illustrative day at a mid-size plant. The battery covers the peaks so the site never pays for a
              bigger connection. EnergyScope decides when, every fifteen minutes.
            </figcaption>
          </figure>
        </div>

        <section id="now">
          <div className="sec">
            <div className="sec-h">
              <h2>Now</h2>
              <p className="h2note">{site.nowLabel}</p>
            </div>
            <div className="sec-b rows">
              {now.map((r) => (
                <div className="row" key={r.title}>
                  <div className="k">{r.live && <span className="dot" />}{r.role}</div>
                  <div>
                    <h3>{r.href ? <a href={r.href} {...ext}>{r.title}</a> : r.title}</h3>
                    <p>{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="research">
          <div className="sec">
            <div className="sec-h">
              <h2>Research</h2>
              <p className="h2note">Explainable AI for speech and audio models, and multi-agent energy systems.</p>
            </div>
            <div className="sec-b">
              <ol className="pubs" reversed>
                {publications.map((p) => (
                  <li className="pub" key={p.title}>
                    <div className="venue"><b>{p.venue}</b>{p.kind}</div>
                    <div>
                      <h3>{p.title}</h3>
                      <p className="muted">{p.body}</p>
                      {p.links && (
                        <div className="links">
                          {p.links.map((l) => <a key={l.href} href={l.href} {...ext}>{l.label}</a>)}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ol>

              <div className="attr" aria-label="Illustrative word-level Shapley attribution">
                <div className="mono">
                  <span>Why did the model say &quot;refund request&quot;?</span>
                  <span>Shapley value per word | illustrative</span>
                </div>
                <div className="tokens">
                  {attribution.map(([w, v], i) => (
                    <span
                      key={i}
                      className={`tok${v < 0 ? " neg" : ""}`}
                      style={{ ["--w" as string]: (Math.abs(v) / maxAttr).toFixed(2) }}
                    >
                      {w}
                      <sub>{v >= 0 ? "+" : ""}{v.toFixed(2)}</sub>
                    </span>
                  ))}
                </div>
                <p>Each word gets its fair share of the answer. Amber pushed the model toward it, grey pushed away.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="built">
          <div className="sec">
            <div className="sec-h">
              <h2>Built</h2>
              <p className="h2note">Things I designed and shipped.</p>
            </div>
            <div className="sec-b grid">
              {built.map((b) => (
                <article className="card" key={b.title}>
                  <div className="tag"><span>{b.tag}</span><span>{b.meta}</span></div>
                  <h3>{b.href ? <a href={b.href} {...ext}>{b.title}</a> : b.title}</h3>
                  <p className="muted">
                    {b.body}
                    {b.extra && <> <a href={b.extra.href} {...ext}>{b.extra.label}</a>.</>}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="record">
          <div className="sec">
            <div className="sec-h">
              <h2>Record</h2>
              <p className="h2note">Where I&apos;ve worked and what it earned.</p>
            </div>
            <div className="sec-b">
              <ol className="tl" reversed>
                {record.map((r) => (
                  <li key={r.title}>
                    <span className="yr">{r.year}</span>
                    <div><h3>{r.title}</h3><p>{r.body}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="sec">
            <div className="sec-h"><h2>Contact</h2></div>
            <div className="sec-b contact">
              <p className="big">
                Running an industrial site, working on explainable AI, or backing hard energy software? Write.
              </p>
              <CopyEmail email={site.email} />
              <div className="socials mono">
                <a href={site.links.linkedin} {...ext}>LinkedIn</a>
                <a href={site.links.github} {...ext}>GitHub</a>
                <a href={site.links.acl} {...ext}>ACL Anthology</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Warsaw | 52.23° N, 21.01° E</span>
        </div>
      </footer>
    </>
  );
}
