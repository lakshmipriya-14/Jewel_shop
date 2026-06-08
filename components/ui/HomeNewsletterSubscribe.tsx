"use client";

import { useMemo, useState } from "react";

const STORAGE_KEY = "venus_silver_home_subscribers";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function HomeNewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const canSubmit = useMemo(() => email.trim().length > 0 && isValidEmail(email), [email]);

  function show(tempStatus: "success" | "error", msg: string) {
    setStatus(tempStatus);
    setMessage(msg);
    window.setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 4000);
  }

  function readExisting(): string[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed: unknown = raw ? JSON.parse(raw) : [];
      if (Array.isArray(parsed)) return parsed.filter((x) => typeof x === "string");
      return [];
    } catch {
      return [];
    }
  }

  function writeNext(next: string[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  async function onSubscribe(e: React.FormEvent) {
    e.preventDefault();

    const trimmed = email.trim();
    if (!trimmed) {
      show("error", "Please enter your email address.");
      return;
    }

    if (!isValidEmail(trimmed)) {
      show("error", "Please enter a valid email address.");
      return;
    }

    const existing = readExisting();
    if (existing.includes(trimmed)) {
      show("error", "This email is already subscribed.");
      setEmail("");
      return;
    }

    writeNext(Array.from(new Set([...existing, trimmed])));

    setEmail("");
    show(
      "success",
      "Thank you for subscribing to Venus Silver! You'll receive updates on our latest collections, exclusive offers, and new arrivals."
    );
  }

  return (
    <form
      onSubmit={onSubscribe}
      style={{ display: "flex", maxWidth: 500, margin: "0 auto", gap: 0, borderRadius: 999, overflow: "hidden" }}
    >
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status !== "idle") {
            setStatus("idle");
            setMessage("");
          }
        }}
        inputMode="email"
        autoComplete="email"
        style={{
          flex: 1,
          padding: "14px 24px",
          border: "none",
          outline: "none",
          fontSize: "0.95rem",
          background: "rgba(255,255,255,0.12)",
          color: "#fff",
          backdropFilter: "blur(6px)",
        }}
      />
      <button
        className="btn-gold"
        type="submit"
        disabled={false}
        style={{ borderRadius: 0, paddingLeft: 28, paddingRight: 28, opacity: canSubmit ? 1 : 1 }}
        aria-label="Subscribe"
      >
        Subscribe
      </button>

      {status !== "idle" && (
        <div
          role="status"
          aria-live="polite"
          style={{ width: "100%", padding: "10px 14px", color: status === "success" ? "#bbf7d0" : "#fecaca", fontSize: "0.9rem", textAlign: "center" }}
        >
          {message}
        </div>
      )}

    </form>
  );
}

