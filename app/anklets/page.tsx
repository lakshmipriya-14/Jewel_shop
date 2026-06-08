import CategoryPage from "@/components/CategoryPage";
import { allProducts } from "@/data/products";

export default function AnkletsPage() {
  const products = allProducts.filter((p) => p.subcategory === "Anklets");

  return (
    <CategoryPage
      title="Anklets"
      description="Explore anklets across gold, silver and diamond finishes"
      image="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1400&q=80"
      products={products}
    />
  );
}

