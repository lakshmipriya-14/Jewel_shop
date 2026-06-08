import CategoryPage from "@/components/CategoryPage";
import { diamondBracelets } from "@/data/products";

export default function DiamondBraceletsPage() {
  return (
    <CategoryPage
      title="Diamond Bracelets"
      subtitle="Certified Diamonds"
      description="Timeless tennis bracelets and diamond-set bangles"
      image="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=1400&q=80"
      products={diamondBracelets}
    />
  );
}
