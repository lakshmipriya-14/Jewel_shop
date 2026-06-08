"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/utils";


interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const router = useRouter();
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className={`product-card-premium${className ? " " + className : ""}`}>
      {/* Image */}
      <div className="product-media-wrap">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </Link>

        {/* Badges */}
        <div className="product-badge-strip">
          {product.isBestSeller && <span className="badge-gold">Bestseller</span>}
          {product.isNew && <span className="badge-dark">New</span>}
          {product.isPopular && !product.isBestSeller && <span className="badge-dark">Popular</span>}
        </div>

        {/* Hover actions - wishlist */}
        <div className="product-actions-wrap">
          <button
            onClick={() => toggleWishlist(product.id)}
            className={`icon-circle-btn${isWishlisted ? " wishlisted" : ""}`}
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart size={15} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>

      </div>

      {/* Info */}
      <div className="product-info-strip">
        <p className="product-cat-label">{product.subcategory}</p>
        <h3 className="product-name">
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.82rem" }}>
          <span className="product-stars">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
          <span style={{ color: "var(--muted)" }}>({product.reviewCount})</span>
        </div>
        <div className="product-price-row">
          <span className="price-now">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <>
              <span className="price-old">{formatPrice(product.originalPrice)}</span>
              <span className="price-off">{discount}% off</span>
            </>
          )}
        </div>
        <button className="add-cart-btn" onClick={handleAddToCart}>
          <ShoppingCart size={13} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
