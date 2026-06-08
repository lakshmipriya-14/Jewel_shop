import Image from "next/image";
import Link from "next/link";
import { allProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categories = [
  { name: "Rings", href: "/rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80", count: 20 },
  { name: "Earrings", href: "/earrings", image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&q=80", count: 20 },
  { name: "Chains", href: "/chains", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80", count: 20 },
  { name: "Pendants", href: "/pendants", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80", count: 20 },
  { name: "Bracelets", href: "/bracelets", image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=400&q=80", count: 20 },
  { name: "Anklets", href: "/anklets", image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=400&q=80", count: 20 },
];

export default function SilverPage() {
  const featured = allProducts.filter((p) => p.category === "Silver" && (p.isBestSeller || p.isPopular)).slice(0, 8);
  return (
    <div>
      <div className="relative h-72 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=1400&q=80" alt="Silver Jewellery" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-3">92.5 Sterling Silver</p>
            <h1 className="font-serif text-5xl font-bold mb-3">Silver Jewellery</h1>
            <p className="text-white/70">Handcrafted pure silver jewellery for every occasion</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="section-title">Shop by Category</h2>
          <div className="gold-line" />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: 16,
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            whiteSpace: "nowrap",
            scrollSnapType: "x mandatory",
            paddingBottom: 6,
          }}
          className="silver-cat-scroll lg:hidden mb-16"
        >
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group text-center"
              style={{
                flex: "0 0 auto",
                minWidth: 128,
                width: 128,
                scrollSnapAlign: "start",
                textDecoration: "none",
              }}
            >
              <div className="relative rounded-full overflow-hidden border-2 border-border group-hover:border-gold transition-colors mx-auto" style={{ width: 110, height: 110 }}>
                <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="110px" />
              </div>
              <p className="text-sm font-medium text-charcoal group-hover:text-gold transition-colors mt-3">{cat.name}</p>
              <p className="text-xs text-muted">{cat.count} pieces</p>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 hidden lg:grid">
          {categories.map((cat) => (
            <Link key={cat.name} href={cat.href} className="group text-center">
              <div className="relative aspect-square rounded-full overflow-hidden border-2 border-border group-hover:border-gold transition-colors mb-3 mx-auto w-28 h-28">
                <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="112px" />
              </div>
              <p className="text-sm font-medium text-charcoal group-hover:text-gold transition-colors">{cat.name}</p>
              <p className="text-xs text-muted">{cat.count} pieces</p>
            </Link>
          ))}
        </div>
        <style>{`
          .silver-cat-scroll::-webkit-scrollbar { display: none; }
        `}</style>
        <div className="text-center mb-8">
          <h2 className="section-title">Featured Silver</h2>
          <div className="gold-line" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}
