import CategoryPage from "@/components/CategoryPage";
import { silverChains } from "@/data/products";

export default function SilverChainsPage() {
  return (
    <CategoryPage
      title="Silver Chains"
      subtitle="92.5 Sterling Silver"
      description="Classic and contemporary silver chains"
      image="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1400&q=80"
      products={silverChains}
    />
  );
}
