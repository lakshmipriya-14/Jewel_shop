import CategoryPage from "@/components/CategoryPage";
import { allProducts } from "@/data/products";

export default function PendantsPage() {
  const products = allProducts.filter((p) => p.subcategory === "Pendants");

  return (
    <CategoryPage
      title="Pendants"
      description="Explore pendants across gold, silver and diamond finishes"
      image="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1400&q=80"
      products={products}
    />
  );
}

