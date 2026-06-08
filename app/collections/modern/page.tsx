import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { allProducts } from "@/data/products";

export default function ModernCollectionPage() {
  const products = allProducts.filter((p) => p.isNew || p.isPopular).slice(0, 12);
  return (
    <div>
      <div className="relative h-64 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=1400&q=80" alt="Modern Collection" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-3">Contemporary Style</p>
            <h1 className="font-serif text-5xl font-bold mb-3">Modern Collection</h1>
            <p className="text-white/70">Minimalist and contemporary silver jewellery</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}
