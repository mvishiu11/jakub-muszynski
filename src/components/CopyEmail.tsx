"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setLabel("Copied");
    } catch {
      const el = document.getElementById("mail");
      if (el) {
        const r = document.createRange();
        r.selectNodeContents(el);
        const s = getSelection();
        s?.removeAllRanges();
        s?.addRange(r);
      }
      setLabel("Selected");
    }
    setTimeout(() => setLabel("Copy"), 1800);
  };
  return (
    <>
      <a id="mail" href={`mailto:${email}`} style={{ textDecoration: "none" }}>{email}</a>
      <button className="copy" type="button" onClick={copy}>{label}</button>
    </>
  );
}
