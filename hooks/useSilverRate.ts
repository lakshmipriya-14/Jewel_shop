"use client";
import { useState, useEffect } from "react";
import { fetchMetalRates } from "@/services/metalRatesService";

export function useSilverRate() {
  const [rate, setRate] = useState<number | null>(null);
  const [change, setChange] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchMetalRates();
      setRate(data.silver.rate10g);
      setChange(data.silver.change);
      setLoading(false);
    };
    load();
    const interval = setInterval(load, 60000);
    return () => clearInterval(interval);
  }, []);

  return { rate, change, loading };
}
