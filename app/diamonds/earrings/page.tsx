import CategoryPage from "@/components/CategoryPage";
import { diamondEarrings } from "@/data/products";

export default function DiamondEarringsPage() {
  return (
    <CategoryPage
      title="Diamond Earrings"
      subtitle="Certified Diamonds"
      description="From classic studs to elegant drops — diamonds that dazzle"
      image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1400&q=80"
      products={diamondEarrings}
    />
  );
}
