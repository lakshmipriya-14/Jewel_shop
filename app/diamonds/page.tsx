import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CategoryPage from "@/components/CategoryPage";
import { allProducts } from "@/data/products";

export default function DiamondsPage() {
  const products = allProducts.filter((p) => p.category === "Diamond");
  return (
    <CategoryPage
      title="Diamond Jewellery"
      subtitle="GIA Certified Diamonds"
      description="Certified diamonds set in 18K gold — brilliance in every detail"
      image="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1400&q=80"
      products={products}
    />
  );
}
