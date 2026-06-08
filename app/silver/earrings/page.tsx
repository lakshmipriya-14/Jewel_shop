import CategoryPage from "@/components/CategoryPage";
import { silverEarrings } from "@/data/products";

export default function SilverEarringsPage() {
  return (
    <CategoryPage
      title="Silver Earrings"
      subtitle="92.5 Sterling Silver"
      description="From delicate studs to bold statement earrings"
      image="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=1400&q=80"
      products={silverEarrings}
    />
  );
}
