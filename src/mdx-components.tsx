import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

// Building blocks available inside every post without importing them.

function Quote({ source, children }: { source: ReactNode; children: ReactNode }) {
  return (
    <blockquote>
      {children}
      <cite>{source}</cite>
    </blockquote>
  );
}

function Open({ children }: { children: ReactNode }) {
  return (
    <div className="open">
      <h2>Open questions</h2>
      {children}
    </div>
  );
}

function Notes({ children }: { children: ReactNode }) {
  return (
    <div className="notes">
      <span>NOTES</span>
      {children}
    </div>
  );
}

const components: MDXComponents = {
  Quote,
  Open,
  Notes,
  a: ({ href = "", children }) =>
    href.startsWith("http") ? (
      <a href={href} target="_blank" rel="noopener">{children}</a>
    ) : (
      <a href={href}>{children}</a>
    ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
