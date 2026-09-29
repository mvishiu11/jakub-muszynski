// JM monogram. The M's valley is a node: one signal, one decision point.
export function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="var(--tile)" />
      <path
        d="M11.5 8.5V19.5a4 4 0 0 1-4 4H6.5"
        fill="none"
        stroke="var(--tile-fg)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 23.5V8.5L20.75 16.5L26 8.5V23.5"
        fill="none"
        stroke="var(--tile-fg)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20.75" cy="16.5" r="2.1" fill="var(--amber)" />
    </svg>
  );
}
