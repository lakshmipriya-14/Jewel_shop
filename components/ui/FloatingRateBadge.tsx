"use client";
import { useState } from "react";
import { useGoldRate } from "@/hooks/useGoldRate";
import { useSilverRate } from "@/hooks/useSilverRate";
import { TrendingUp, TrendingDown, X } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function FloatingRateBadge() {
  const { rate: goldRate, change: goldChange } = useGoldRate();
  const { rate: silverRate, change: silverChange } = useSilverRate();
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {expanded ? (
        <div className="bg-charcoal rounded-sm shadow-luxury-lg border border-gold/30 p-4 w-56">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gold text-xs font-bold tracking-widest">LIVE RATES</span>
            <div className="flex gap-2">
              <button onClick={() => setExpanded(false)} className="text-white/40 hover:text-white text-xs">
                —
              </button>
              <button onClick={() => setDismissed(true)} className="text-white/40 hover:text-white">
                <X size={12} />
              </button>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-xs">Gold (10g)</span>
                <span className="text-white text-sm font-semibold">{goldRate ? formatPrice(goldRate) : "—"}</span>
              </div>
              <div className="flex justify-end">
                {goldChange !== 0 && (
                  <span className={`text-xs flex items-center gap-0.5 ${goldChange > 0 ? "text-green-400" : "text-red-400"}`}>
                    {goldChange > 0 ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                    {goldChange > 0 ? "+" : ""}{formatPrice(goldChange)}
                  </span>
                )}
              </div>
            </div>
            <div className="border-t border-white/10 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-xs">Silver (10g)</span>
                <span className="text-white text-sm font-semibold">{silverRate ? formatPrice(silverRate) : "—"}</span>
              </div>
              <div className="flex justify-end">
                {silverChange !== 0 && (
                  <span className={`text-xs flex items-center gap-0.5 ${silverChange > 0 ? "text-green-400" : "text-red-400"}`}>
                    {silverChange > 0 ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                    {silverChange > 0 ? "+" : ""}{formatPrice(silverChange)}
                  </span>
                )}
              </div>
            </div>
          </div>
          <p className="text-white/30 text-[10px] mt-3">Updated every 60 seconds</p>
        </div>
      ) : (
        <button
          onClick={() => setExpanded(true)}
          className="bg-gold text-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-luxury-lg hover:bg-gold-dark transition-colors"
          title="Live Metal Rates"
        >
          <span className="text-[9px] font-bold tracking-wider">GOLD</span>
          <span className="text-[10px] font-semibold">
            {goldRate ? `₹${Math.round(goldRate / 1000)}K` : "..."}
          </span>
        </button>
      )}
    </div>
  );
}
