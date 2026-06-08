import CategoryPage from "@/components/CategoryPage";
import { goldRings } from "@/data/products";

export default function GoldRingsPage() {
  return (
    <CategoryPage
      title="Gold Rings"
      subtitle="22K Hallmark Gold"
      description="Handcrafted gold rings for every occasion — from everyday elegance to bridal grandeur"
      image="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1400&q=80"
      products={goldRings}
    />
  );
}
