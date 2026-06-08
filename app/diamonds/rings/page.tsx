import CategoryPage from "@/components/CategoryPage";
import { diamondRings } from "@/data/products";

export default function DiamondRingsPage() {
  return (
    <CategoryPage
      title="Diamond Rings"
      subtitle="Certified Diamonds"
      description="Brilliance in every detail — certified diamond rings in gold settings"
      image="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1400&q=80"
      products={diamondRings}
    />
  );
}
