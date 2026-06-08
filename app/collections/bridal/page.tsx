import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { allProducts } from "@/data/products";

import { redirect } from "next/navigation";

export default function BridalCollectionPage() {
  redirect("/collections/wedding");

  const products = allProducts.filter((p) => p.rating >= 4.8).slice(0, 12);
  return (
    <div>
      <div className="relative h-64 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=1400&q=80" alt="Bridal Collection" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-3">For the Bride</p>
            <h1 className="font-serif text-5xl font-bold mb-3">Bridal Collection</h1>
            <p className="text-white/70">Complete bridal sets to make your day unforgettable</p>
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
