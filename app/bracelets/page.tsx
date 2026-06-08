import CategoryPage from "@/components/CategoryPage";
import { allProducts } from "@/data/products";

export default function BraceletsPage() {
  const products = allProducts.filter((p) => p.subcategory === "Bracelets");

  return (
    <CategoryPage
      title="Bracelets"
      description="Explore bracelets across gold, silver and diamond finishes"
      image="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=1400&q=80"
      products={products}
    />
  );
}

