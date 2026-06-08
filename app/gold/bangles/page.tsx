import CategoryPage from "@/components/CategoryPage";
import { goldBangles } from "@/data/products";

export default function GoldBanglesPage() {
  return (
    <CategoryPage
      title="Gold Bangles"
      subtitle="22K Hallmark Gold"
      description="Traditional and modern gold bangles, plain to bridal"
      image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1400&q=80"
      products={goldBangles}
    />
  );
}
