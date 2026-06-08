"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919962819898"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        style={{
          position: "fixed", bottom: 90, right: 24, zIndex: 999,
          width: 52, height: 52, borderRadius: "50%",
          background: "#25d366", color: "#fff",
          display: "grid", placeItems: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
          fontSize: "1.4rem",
          transition: "transform 0.3s, box-shadow 0.3s",
          textDecoration: "none"
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"; }}
      >
        💬
      </a>

      {/* Back to Top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          style={{
            position: "fixed", bottom: 24, right: 24, zIndex: 999,
            width: 52, height: 52, borderRadius: "50%",
            background: "var(--ink)", color: "var(--gold-soft)",
            border: "1px solid rgba(212,175,55,0.3)",
            display: "grid", placeItems: "center",
            boxShadow: "var(--shadow-sm)",
            fontSize: "1.1rem", cursor: "pointer",
            transition: "transform 0.3s, background 0.3s"
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "var(--gold-deep)"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "var(--ink)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--gold-soft)"; }}
        >
          ↑
        </button>
      )}
    </>
  );
}