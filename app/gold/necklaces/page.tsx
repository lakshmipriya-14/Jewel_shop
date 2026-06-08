import CategoryPage from "@/components/CategoryPage";
import { allProducts } from "@/data/products";

export default function GoldNecklacesPage() {
  const products = allProducts.filter(
    (p) => p.category === "Gold" && (p.subcategory === "Necklaces" || p.subcategory === "Chains" || p.subcategory === "Pendants")
  );
  return (
    <CategoryPage
      title="Gold Necklaces"
      subtitle="22K Hallmark Gold"
      description="Timeless gold necklaces, chains and pendant sets"
      image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1400&q=80"
      products={products}
    />
  );
}
