import CategoryPage from "@/components/CategoryPage";
import { diamondPendants } from "@/data/products";

export default function DiamondPendantsPage() {
  return (
    <CategoryPage
      title="Diamond Pendants"
      subtitle="Certified Diamonds"
      description="Sacred and elegant diamond pendants for every occasion"
      image="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1400&q=80"
      products={diamondPendants}
    />
  );
}
