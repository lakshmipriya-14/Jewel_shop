"use client";

import { useMemo, useState } from "react";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function FooterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  const canSubmit = useMemo(() => isValidEmail(email), [email]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const trimmed = email.trim();
    if (!trimmed) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    if (!isValidEmail(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    const key = "venus_silver_subscribers";
    try {
      const existingRaw = localStorage.getItem(key);
      const existing: string[] = existingRaw ? JSON.parse(existingRaw) : [];
      if (existing.includes(trimmed)) {
        setStatus("success");
        setMessage("You're already subscribed. We'll keep you posted with the latest offers.");
        setEmail("");
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 4000);
        return;
      }

      const next = Array.from(new Set([...existing, trimmed]));
      localStorage.setItem(key, JSON.stringify(next));
    } catch {
      setStatus("error");
      setMessage("Something went wrong while saving your subscription. Please try again.");
      return;
    }

    setStatus("success");
    setMessage("Thanks for subscribing! Exclusive updates are on their way.");
    setEmail("");

    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 4000);
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch">
      <div className="flex-1">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") {
              setStatus("idle");
              setMessage("");
            }
          }}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold"
        />
        <p className="mt-2 text-xs text-white/60">Subscribe for new arrivals, offers, and styling tips from Venus Silver.</p>
      </div>
      <button
        type="submit"
        disabled={!canSubmit}
        className="px-6 py-3 bg-gold text-white text-sm font-semibold hover:bg-gold-dark transition-colors tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
      >
        SUBSCRIBE
      </button>

      {status !== "idle" && (
        <div className="w-full mt-2 text-sm">
          <p className={status === "success" ? "text-emerald-200" : "text-rose-200"}>{message}</p>
        </div>
      )}
    </form>
  );
}

