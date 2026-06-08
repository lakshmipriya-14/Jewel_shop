import CategoryPage from "@/components/CategoryPage";
import { goldEarrings } from "@/data/products";

export default function GoldEarringsPage() {
  return (
    <CategoryPage
      title="Gold Earrings"
      subtitle="22K Hallmark Gold"
      description="From delicate studs to grand chandelier earrings in pure gold"
      image="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=1400&q=80"
      products={goldEarrings}
    />
  );
}
