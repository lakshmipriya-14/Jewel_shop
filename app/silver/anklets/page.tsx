import CategoryPage from "@/components/CategoryPage";
import { silverAnklets } from "@/data/products";

export default function SilverAnkletsPage() {
  return (
    <CategoryPage
      title="Silver Anklets"
      subtitle="92.5 Sterling Silver"
      description="Delicate anklets for graceful feet"
      image="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1400&q=80"
      products={silverAnklets}
    />
  );
}
