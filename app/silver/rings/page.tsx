import CategoryPage from "@/components/CategoryPage";
import { silverRings } from "@/data/products";

export default function SilverRingsPage() {
  return (
    <CategoryPage
      title="Silver Rings"
      subtitle="92.5 Sterling Silver"
      description="Handcrafted rings for every occasion"
      image="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1400&q=80"
      products={silverRings}
    />
  );
}
