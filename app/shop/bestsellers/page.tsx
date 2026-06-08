import ProductCard from "@/components/ProductCard";
import { bestSellers } from "@/data/products";

export default function BestSellersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">Most Loved</p>
        <h1 className="font-serif text-3xl text-charcoal">Best Sellers</h1>
        <p className="text-muted text-sm mt-1">{bestSellers.length} top picks</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {bestSellers.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
