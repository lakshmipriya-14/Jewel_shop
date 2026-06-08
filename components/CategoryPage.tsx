import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

interface CategoryPageProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  products: Product[];
}

export default function CategoryPage({ title, subtitle, description, image, products }: CategoryPageProps) {
  return (
    <div>
      {/* Hero Banner */}
      <div style={{ position: "relative", height: 300, overflow: "hidden" }}>
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(20,18,16,0.65)" }} />
        <div style={{
          position: "relative", zIndex: 10, height: "100%",
          display: "flex", alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "0 24px"
        }}>
          <div>
            {subtitle && (
              <p style={{ color: "var(--gold-soft)", fontSize: "0.76rem", letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>
                {subtitle}
              </p>
            )}
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "#fff", fontWeight: 700, marginBottom: 12, lineHeight: 1.1 }}>
              {title}
            </h1>
            {description && (
              <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 480, margin: "0 auto" }}>{description}</p>
            )}
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 18, fontSize: "0.82rem", color: "rgba(255,255,255,0.55)" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <span style={{ color: "var(--gold-soft)" }}>{title}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
          <p style={{ color: "var(--muted)", fontSize: "0.88rem" }}>{products.length} products</p>
          <Link href="/shop" style={{ color: "var(--gold-deep)", fontSize: "0.88rem", fontWeight: 600, textDecoration: "none" }}>
            Shop All →
          </Link>
        </div>
        {products.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "var(--muted)" }}>
            <p style={{ fontSize: "1.1rem", marginBottom: 8 }}>No products in this category yet.</p>
            <Link href="/shop" className="btn-gold" style={{ marginTop: 20, display: "inline-block" }}>Browse All Jewellery</Link>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 26 }} className="cat-product-grid">
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}