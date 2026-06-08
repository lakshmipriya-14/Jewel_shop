import CategoryPage from "@/components/CategoryPage";
import { allProducts } from "@/data/products";

export default function GoldPage() {
  const products = allProducts.filter((p) => p.category === "Gold");
  return (
    <CategoryPage
      title="Gold Jewellery"
      subtitle="22K Hallmark Gold"
      description="Handcrafted 22K gold jewellery — from bridal grandeur to everyday elegance"
      image="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1400&q=80"
      products={products}
    />
  );
}
