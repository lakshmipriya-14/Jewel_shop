import CategoryPage from "@/components/CategoryPage";
import { allProducts } from "@/data/products";

export default function EarringsPage() {
  const products = allProducts.filter((p) => p.subcategory === "Earrings");

  return (
    <CategoryPage
      title="Earrings"
      description="Explore earrings across gold, silver and diamond finishes"
      image="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=1400&q=80"
      products={products}
    />
  );
}

