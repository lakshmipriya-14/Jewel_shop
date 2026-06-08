import { MetalRate } from "@/types";

const MOCK_RATES: MetalRate = {
  gold: {
    rate10g: 74520,
    rate1g: 7452,
    change: 120,
    changePercent: 0.16,
    lastUpdated: new Date().toISOString(),
  },
  silver: {
    rate10g: 930,
    rate1g: 93,
    change: -5,
    changePercent: -0.53,
    lastUpdated: new Date().toISOString(),
  },
};

export async function fetchMetalRates(): Promise<MetalRate> {
  await new Promise((r) => setTimeout(r, 300));
  const goldVariation = (Math.random() - 0.5) * 200;
  const silverVariation = (Math.random() - 0.5) * 20;
  return {
    gold: {
      ...MOCK_RATES.gold,
      rate10g: Math.round(MOCK_RATES.gold.rate10g + goldVariation),
      rate1g: Math.round((MOCK_RATES.gold.rate10g + goldVariation) / 10),
      change: Math.round(goldVariation),
      changePercent: parseFloat((goldVariation / MOCK_RATES.gold.rate10g * 100).toFixed(2)),
      lastUpdated: new Date().toISOString(),
    },
    silver: {
      ...MOCK_RATES.silver,
      rate10g: Math.round(MOCK_RATES.silver.rate10g + silverVariation),
      rate1g: Math.round((MOCK_RATES.silver.rate10g + silverVariation) / 10),
      change: Math.round(silverVariation),
      changePercent: parseFloat((silverVariation / MOCK_RATES.silver.rate10g * 100).toFixed(2)),
      lastUpdated: new Date().toISOString(),
    },
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
