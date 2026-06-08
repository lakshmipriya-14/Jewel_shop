import CategoryPage from "@/components/CategoryPage";
import { allProducts } from "@/data/products";

export default function RingsPage() {
  const products = allProducts.filter((p) => p.subcategory === "Rings");

  return (
    <CategoryPage
      title="Rings"
      subtitle="Handcrafted Silver"
      description="Explore rings across silver, gold and diamond finishes"
      image="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1400&q=80"
      products={products}
    />
  );
}
