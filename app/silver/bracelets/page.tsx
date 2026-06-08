import CategoryPage from "@/components/CategoryPage";
import { silverBracelets } from "@/data/products";

export default function SilverBraceletsPage() {
  return (
    <CategoryPage
      title="Silver Bracelets"
      subtitle="92.5 Sterling Silver"
      description="Elegant bangles, cuffs and charm bracelets"
      image="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=1400&q=80"
      products={silverBracelets}
    />
  );
}
