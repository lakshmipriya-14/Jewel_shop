import CategoryPage from "@/components/CategoryPage";
import { allProducts } from "@/data/products";

export default function ChainsPage() {
  const products = allProducts.filter((p) => p.subcategory === "Chains");

  return (
    <CategoryPage
      title="Chains"
      description="Explore chains across gold, silver and diamond finishes"
      image="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1400&q=80"
      products={products}
    />
  );
}

