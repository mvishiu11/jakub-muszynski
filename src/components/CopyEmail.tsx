"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy address");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setLabel("Copied");
    } catch {
      const el = document.getElementById("addr");
      if (el) {
        const r = document.createRange();
        r.selectNodeContents(el);
        const s = getSelection();
        s?.removeAllRanges();
        s?.addRange(r);
      }
      setLabel("Selected, press Ctrl+C");
    }
    setTimeout(() => setLabel("Copy address"), 1600);
  };
  return (
    <div className="mail">
      <a href={`mailto:${email}`} className="addr-link">
        <code id="addr">{email}</code>
      </a>
      <button className="copy" type="button" onClick={copy}>
        {label}
      </button>
    </div>
  );
}
