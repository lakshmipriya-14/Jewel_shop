import CategoryPage from "@/components/CategoryPage";
import { diamondNecklaces } from "@/data/products";

export default function DiamondNecklacesPage() {
  return (
    <CategoryPage
      title="Diamond Necklaces"
      subtitle="Certified Diamonds"
      description="Exquisite diamond necklaces for the woman who deserves the finest"
      image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1400&q=80"
      products={diamondNecklaces}
    />
  );
}
