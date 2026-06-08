import CategoryPage from "@/components/CategoryPage";
import { goldChains } from "@/data/products";

export default function GoldChainsPage() {
  return (
    <CategoryPage
      title="Gold Chains"
      subtitle="22K Hallmark Gold"
      description="Timeless gold chains in every style — rope, box, curb and more"
      image="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=1400&q=80"
      products={goldChains}
    />
  );
}
