"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { requireAuth } from "@/components/AuthGuard";

interface JewelleryProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  category: "Women" | "Men" | "Kids" | "Religious";
  isNew?: boolean;
}

interface Props {
  products: JewelleryProduct[];
  title: string;
}

const FILTERS = ["All", "Women", "Men", "Kids", "Religious"] as const;

export default function JewelleryProductGrid({ products, title }: Props) {
  const router = useRouter();
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = activeFilter === "All" ? products : products.filter((p) => p.category === activeFilter);

  const handleBuy = (product: JewelleryProduct) => {
    const ok = requireAuth("purchase", `/shop`, router);
    if (ok) {
      addToCart(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          images: [product.image],
          category: "Gold",
          subcategory: "General",
          description: product.name,
          purity: "22K Gold",
          weight: "4g",
          inStock: true,
          rating: product.rating,
          reviewCount: product.reviewCount,
        },
        1
      );
      router.push("/cart");
    }
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 text-sm font-medium border transition-all duration-200 ${
              activeFilter === f
                ? "bg-gold text-white border-gold"
                : "bg-white text-charcoal border-border hover:border-gold hover:text-gold"
            }`}
          >
            {f === "Religious" ? "God / Religious" : f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filtered.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="luxury-card overflow-hidden group"
          >
            <div className="relative aspect-square overflow-hidden bg-ivory">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {product.badge && (
                <span className="absolute top-2 left-2 bg-gold text-white text-[10px] font-bold px-2 py-0.5 tracking-wide">
                  {product.badge}
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-2 right-2 bg-charcoal text-white text-[10px] font-bold px-2 py-0.5">
                  NEW
                </span>
              )}

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleWishlist(product.id);
                }}
                className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:text-gold"
              >
                <Heart
                  size={14}
                  className={wishlist.includes(product.id) ? "text-red-500 fill-red-500" : "text-charcoal"}
                />
              </button>
            </div>

            <div className="p-3">
              <p className="text-[10px] text-muted uppercase tracking-wider mb-1">{product.category}</p>
              <h3 className="font-medium text-sm text-charcoal line-clamp-2 mb-1">{product.name}</h3>

              <div className="flex items-center gap-1 mb-2">
                <Star size={11} className="text-gold fill-gold" />
                <span className="text-xs text-muted">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-charcoal text-sm">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-muted text-xs line-through ml-1">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleBuy(product);
                }}
                className="w-full mt-2 py-2 text-xs font-semibold bg-charcoal text-white hover:bg-gold transition-colors flex items-center justify-center gap-1"
              >
                <ShoppingBag size={12} /> Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted">
          <p>No products found for this filter.</p>
        </div>
      )}
    </div>
  );
}

