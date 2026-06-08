import CategoryPage from "@/components/CategoryPage";
import { allProducts } from "@/data/products";

export default function GoldBridalPage() {
  const products = allProducts.filter(
    (p) => p.category === "Gold" && (p.tags?.includes("bridal") || p.tags?.includes("wedding"))
  );
  return (
    <CategoryPage
      title="Bridal Gold Sets"
      subtitle="22K Hallmark Gold"
      description="Exquisite bridal gold jewellery for your most precious day"
      image="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1400&q=80"
      products={products}
    />
  );
}
