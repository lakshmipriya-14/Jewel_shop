import CategoryPage from "@/components/CategoryPage";
import { silverPendants } from "@/data/products";

export default function SilverPendantsPage() {
  return (
    <CategoryPage
      title="Silver Pendants"
      subtitle="92.5 Sterling Silver"
      description="Meaningful pendants for every story"
      image="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1400&q=80"
      products={silverPendants}
    />
  );
}
