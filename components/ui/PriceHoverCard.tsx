"use client";
import { useState } from "react";
import { useGoldRate } from "@/hooks/useGoldRate";
import { useSilverRate } from "@/hooks/useSilverRate";
import { formatPrice } from "@/lib/utils";

interface PriceHoverCardProps {
  productPrice: number;
  metalType?: "gold" | "silver";
  weight?: string;
  children: React.ReactNode;
}

export default function PriceHoverCard({
  productPrice,
  metalType = "silver",
  weight,
  children,
}: PriceHoverCardProps) {
  const [show, setShow] = useState(false);
  const { rate: goldRate } = useGoldRate();
  const { rate: silverRate } = useSilverRate();
  const rate = metalType === "gold" ? goldRate : silverRate;

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-charcoal text-white p-3 rounded-sm shadow-luxury z-50 text-xs">
          <p className="font-semibold text-gold mb-2">Price Breakdown</p>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-white/60">Metal cost</span>
              <span>{formatPrice(Math.round(productPrice * 0.6))}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Making charges</span>
              <span>{formatPrice(Math.round(productPrice * 0.25))}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">GST (3%)</span>
              <span>{formatPrice(Math.round(productPrice * 0.15))}</span>
            </div>
            <div className="border-t border-white/20 pt-1 flex justify-between font-semibold">
              <span>Total</span>
              <span className="text-gold">{formatPrice(productPrice)}</span>
            </div>
          </div>
          {rate && (
            <p className="text-white/40 mt-2 text-[10px]">
              Live {metalType} rate: {formatPrice(rate)}/10g
            </p>
          )}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-charcoal" />
        </div>
      )}
    </div>
  );
}
