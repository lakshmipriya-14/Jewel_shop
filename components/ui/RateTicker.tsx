"use client";
import { useGoldRate } from "@/hooks/useGoldRate";
import { useSilverRate } from "@/hooks/useSilverRate";
import { formatPrice } from "@/lib/utils";

export default function RateTicker() {
  const { rate: goldRate, change: goldChange } = useGoldRate();
  const { rate: silverRate, change: silverChange } = useSilverRate();

  const items = [
    { label: "Gold 22K (10g)", rate: goldRate, change: goldChange },
    { label: "Gold 18K (10g)", rate: goldRate ? Math.round(goldRate * 0.82) : null, change: 0 },
    { label: "Silver 925 (10g)", rate: silverRate, change: silverChange },
    { label: "Gold 22K (1g)", rate: goldRate ? Math.round(goldRate / 10) : null, change: 0 },
    { label: "Silver 925 (1g)", rate: silverRate ? Math.round(silverRate / 10) : null, change: 0 },
    { label: "Diamond (0.1ct)", rate: 15000, change: 0 },
  ];

  const content = items.map((item, i) => (
    <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8, margin: "0 40px" }}>
      <span style={{ color: "var(--gold-soft)", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.08em" }}>{item.label}:</span>
      <span style={{ color: "#fff", fontSize: "0.78rem", fontWeight: 500 }}>
        {item.rate ? formatPrice(item.rate) : "—"}
      </span>
      {item.change !== 0 && (
        <span style={{ fontSize: "0.72rem", color: item.change > 0 ? "#6fd39a" : "#ef8b7f" }}>
          {item.change > 0 ? "▲" : "▼"} {Math.abs(item.change).toFixed(0)}
        </span>
      )}
      <span style={{ color: "rgba(255,255,255,0.2)", marginLeft: 12 }}>◆</span>
    </span>
  ));

  return (
    <div style={{ background: "var(--ink)", borderBottom: "1px solid rgba(212,175,55,0.2)", overflow: "hidden", padding: "9px 0" }}>
      <div className="ticker-wrap">
        <div className="ticker-content">
          {content}
          {content}
        </div>
      </div>
    </div>
  );
}