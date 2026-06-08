import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { allProducts } from "@/data/products";

export default function TraditionalCollectionPage() {
  const products = allProducts.filter((p) => ["Earrings", "Anklets", "Chains"].includes(p.subcategory)).slice(0, 12);
  return (
    <div>
      <div className="relative h-64 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1400&q=80" alt="Traditional Collection" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-3">Heritage Designs</p>
            <h1 className="font-serif text-5xl font-bold mb-3">Traditional Collection</h1>
            <p className="text-white/70">Age-old designs reimagined for the modern woman</p>
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
