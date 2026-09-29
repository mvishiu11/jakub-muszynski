// Illustrative 24 h factory load profile, 96 quarter-hours, rendered at build time.
const N = 96;
const LIMIT = 400;
const YMAX = 600;
const L = 36, R = 392, T = 10, B = 200;
const MONO = "IBM Plex Mono, monospace";

function profile(): number[] {
  const out: number[] = [];
  const sig = (z: number) => 1 / (1 + Math.exp(-z));
  for (let i = 0; i < N; i++) {
    const h = i / 4;
    let v = 120 + 9 * Math.sin(i * 1.7);
    if (h >= 5.5 && h < 22) v += 260 * sig((h - 6) * 3) * sig(-(h - 21.5) * 3);
    v += 150 * Math.exp(-(((h - 9.5) / 1.1) ** 2));
    v += 110 * Math.exp(-(((h - 14) / 0.9) ** 2));
    v -= 70 * Math.exp(-(((h - 12.1) / 0.35) ** 2));
    v += 14 * Math.sin(i * 2.3) + 9 * Math.cos(i * 5.1);
    out.push(v);
  }
  return out;
}

const x = (i: number) => L + ((R - L) * i) / (N - 1);
const y = (v: number) => B - ((B - T) * v) / YMAX;
const f = (n: number) => n.toFixed(1);
const line = (a: number[]) => a.map((v, i) => `${i ? "L" : "M"}${f(x(i))} ${f(y(v))}`).join("");

export function LoadChart() {
  const load = profile();
  const grid = load.map((v) => Math.min(v, LIMIT));

  // Battery discharge: area between load and the limit wherever load exceeds it.
  let area = "";
  let seg: number[] = [];
  const flush = () => {
    if (seg.length > 1) {
      const top = seg.map((i) => `${f(x(i))} ${f(y(load[i]))}`).join("L");
      const bottom = [...seg].reverse().map((i) => `${f(x(i))} ${f(y(LIMIT))}`).join("L");
      area += `M${top}L${bottom}Z`;
    }
    seg = [];
  };
  load.forEach((v, i) => (v > LIMIT ? seg.push(i) : flush()));
  flush();

  const peak = load.indexOf(Math.max(...load));

  return (
    <svg
      viewBox="0 0 400 230"
      role="img"
      aria-label="Illustrative 24-hour factory load profile. Morning and afternoon peaks exceed a 400 kW contracted limit; a battery discharges to hold grid import at the limit."
    >
      {[0, 200, 400, 600].map((t) => (
        <g key={t}>
          <line x1={L} x2={R} y1={y(t)} y2={y(t)} stroke="var(--rule)" strokeWidth="1" />
          <text x={L - 6} y={y(t) + 3.5} textAnchor="end" fontFamily={MONO} fontSize="10" fill="var(--ink-2)">
            {t}
          </text>
        </g>
      ))}
      {[0, 6, 12, 18, 24].map((h) => (
        <text
          key={h}
          x={L + ((R - L) * h) / 24}
          y={B + 17}
          textAnchor={h === 0 ? "start" : h === 24 ? "end" : "middle"}
          fontFamily={MONO}
          fontSize="10"
          fill="var(--ink-2)"
        >
          {String(h).padStart(2, "0")}:00
        </text>
      ))}
      <path d={area} fill="var(--amber-soft)" />
      <line x1={L} x2={R} y1={y(LIMIT)} y2={y(LIMIT)} stroke="var(--amber)" strokeWidth="1" />
      <path d={line(load)} fill="none" stroke="var(--ink-2)" strokeWidth="1.2" strokeDasharray="3 3" />
      <path className="shaved" pathLength={1} d={line(grid)} fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
      <circle cx={x(peak)} cy={y(LIMIT)} r="3.5" fill="var(--amber)" />
      <text x={x(peak) + 7} y={y(load[peak]) + 4} fontFamily={MONO} fontSize="10" fill="var(--ink-2)">
        peak {Math.round(load[peak])} kW
      </text>
    </svg>
  );
}
