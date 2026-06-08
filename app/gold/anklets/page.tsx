import CategoryPage from "@/components/CategoryPage";
import { allProducts } from "@/data/products";

export default function GoldAnkletsPage() {
  const products = allProducts.filter(
    (p) => p.category === "Gold" && p.subcategory === "Anklets"
  );
  return (
    <CategoryPage
      title="Gold Anklets"
      subtitle="22K Hallmark Gold"
      description="Delicate and bold gold anklets crafted for graceful elegance"
      image="https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=1400&q=80"
      products={products}
    />
  );
}
