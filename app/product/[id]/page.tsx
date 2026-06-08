"use client";
import { useState, use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star, Heart, ShoppingCart, Truck, Shield, RotateCcw,
  Plus, Minus, ChevronDown, ChevronUp, Package, Info,
  CheckCircle, MapPin, Clock, Gem
} from "lucide-react";
import { getProductById, allProducts } from "@/data/products";
import { useCart } from "@/components/CartProvider";

import ProductCard from "@/components/ProductCard";
import { formatPrice } from "@/lib/utils";

function AccordionSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between",
          alignItems: "center", padding: "18px 0", background: "none",
          border: "none", cursor: "pointer", textAlign: "left"
        }}
      >
        <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.05rem", fontWeight: 600, color: "var(--ink)" }}>{title}</span>
        {open ? <ChevronUp size={18} style={{ color: "var(--gold)" }} /> : <ChevronDown size={18} style={{ color: "var(--gold)" }} />}
      </button>
      {open && (
        <div style={{ paddingBottom: 20, color: "var(--ink)" }}>
          {children}
        </div>
      )}
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", padding: "10px 0", borderBottom: "1px solid var(--border)" }}>
      <span style={{ width: 160, flexShrink: 0, fontSize: "0.83rem", fontWeight: 600, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</span>
      <span style={{ fontSize: "0.92rem", color: "var(--ink)", fontWeight: 500 }}>{value}</span>
    </div>
  );
}

function PriceRow({ label, value, isBold, isGold }: { label: string; value: string; isBold?: boolean; isGold?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid var(--border)" }}>
      <span style={{ fontSize: "0.9rem", color: isGold ? "var(--gold-deep)" : isBold ? "var(--ink)" : "var(--muted)", fontWeight: isBold ? 700 : 500 }}>{label}</span>
      <span style={{ fontSize: "0.9rem", color: isGold ? "var(--gold-deep)" : isBold ? "var(--ink)" : "var(--muted)", fontWeight: isBold ? 700 : 500 }}>{value}</span>
    </div>
  );
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProductById(id);
  if (!product) notFound();

  const { addToCart, wishlist, toggleWishlist } = useCart();
  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product, qty, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    // Buy Now requires checkout authentication.
    addToCart(product, qty, selectedSize);
    router.push("/checkout");
  };

  const related = allProducts
    .filter((p) => (p.subcategory === product.subcategory || p.category === product.category) && p.id !== product.id)
    .slice(0, 4);

  // Duplicate images to show gallery variety
  const images = product.images.length >= 4 ? product.images : [...product.images, ...product.images, ...product.images, ...product.images].slice(0, 4);

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  // Calculate price breakup
  const gstRate = 0.03; // 3% GST on jewellery
  const makingPct = product.category === "Diamond" ? 0.15 : product.category === "Gold" ? 0.12 : 0.18;
  const gstAmount = Math.round(product.price * gstRate / (1 + gstRate));
  const makingCharges = Math.round((product.price - gstAmount) * makingPct / (1 + makingPct));
  const materialCost = product.price - gstAmount - makingCharges;

  const metalLabel = product.category === "Gold" ? "Gold" : product.category === "Diamond" ? "Diamond & Gold" : "Silver";

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px" }}>

      {/* Breadcrumb */}
      <nav style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.78rem", color: "var(--muted)", marginBottom: 32 }}>
        <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }} className="hover:text-gold">Home</Link>
        <span>/</span>
        <Link href="/shop" style={{ color: "var(--muted)", textDecoration: "none" }} className="hover:text-gold">Shop</Link>
        <span>/</span>
        <Link href={`/${product.category.toLowerCase()}`} style={{ color: "var(--muted)", textDecoration: "none" }} className="hover:text-gold">{product.category}</Link>
        <span>/</span>
        <span style={{ color: "var(--ink)", fontWeight: 500 }}>{product.name}</span>
      </nav>

      {/* Main Product Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, marginBottom: 72, alignItems: "start" }} className="product-detail-grid">

        {/* ── Image Gallery ── */}
        <div>
          {/* Main image */}
          <div style={{ position: "relative", aspectRatio: "1", overflow: "hidden", background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 4, marginBottom: 12 }}>
            <Image
              src={images[activeImg]}
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {product.isNew && (
              <span style={{ position: "absolute", top: 16, left: 16, background: "var(--ink)", color: "#fff", fontSize: "0.65rem", fontWeight: 700, padding: "4px 10px", letterSpacing: "0.12em" }}>NEW</span>
            )}
            {product.isBestSeller && (
              <span style={{ position: "absolute", top: product.isNew ? 44 : 16, left: 16, background: "var(--gold)", color: "#1a1200", fontSize: "0.65rem", fontWeight: 700, padding: "4px 10px", letterSpacing: "0.12em" }}>BESTSELLER</span>
            )}
            {discount > 0 && (
              <span style={{ position: "absolute", top: 16, right: 16, background: "#dc2626", color: "#fff", fontSize: "0.7rem", fontWeight: 700, padding: "6px 10px", borderRadius: 4 }}>{discount}% OFF</span>
            )}
          </div>

          {/* Thumbnails */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {images.slice(0, 4).map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  position: "relative", aspectRatio: "1",
                  border: `2px solid ${activeImg === i ? "var(--gold)" : "var(--border)"}`,
                  overflow: "hidden", borderRadius: 3, cursor: "pointer",
                  background: "var(--ivory)", padding: 0
                }}
              >
                <Image src={img} alt={`View ${i + 1}`} fill style={{ objectFit: "cover" }} sizes="80px" />
              </button>
            ))}
          </div>

          {/* Hallmark badge */}
          <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["BIS Hallmarked", "Certified Purity", "30-Day Returns", "Insured Shipping"].map((badge) => (
              <span key={badge} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.72rem", fontWeight: 600, color: "var(--muted)", border: "1px solid var(--border)", padding: "5px 10px", borderRadius: 50, letterSpacing: "0.05em" }}>
                <CheckCircle size={11} style={{ color: "var(--gold)" }} /> {badge}
              </span>
            ))}
          </div>
        </div>

        {/* ── Product Details Panel ── */}
        <div>
          {/* Category tag */}
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-deep)", marginBottom: 8 }}>
            {product.category} · {product.subcategory}
          </p>

          {/* Name */}
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--ink)", lineHeight: 1.2, marginBottom: 12 }}>
            {product.name}
          </h1>

          {/* Star rating */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <div style={{ display: "flex", gap: 2 }}>
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={15} fill={s <= Math.floor(product.rating) ? "var(--gold)" : "none"} stroke="var(--gold)" strokeWidth={1.5} />
              ))}
            </div>
            <span style={{ fontSize: "0.83rem", color: "var(--ink)", fontWeight: 600 }}>{product.rating}</span>
            <span style={{ fontSize: "0.83rem", color: "var(--muted)" }}>({product.reviewCount} reviews)</span>
          </div>

          {/* Price block */}
          <div style={{ padding: "18px 20px", background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 6, marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "2rem", fontWeight: 700, color: "var(--ink)" }}>
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span style={{ fontSize: "1.1rem", color: "var(--muted)", textDecoration: "line-through" }}>
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, background: "#fef2f2", color: "#dc2626", padding: "3px 8px", borderRadius: 4 }}>
                    Save {formatPrice(product.originalPrice - product.price)}
                  </span>
                </>
              )}
            </div>
            <p style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: 6 }}>Inclusive of all taxes · Free shipping above ₹999</p>
          </div>

          {/* Quick spec grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 24 }}>
            {[
              { label: "Material", value: metalLabel },
              { label: "Purity", value: product.purity?.split(" ").slice(0,2).join(" ") || "—" },
              { label: "Weight", value: product.weight || "—" },
            ].map((spec) => (
              <div key={spec.label} style={{ textAlign: "center", padding: "12px 8px", background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 4 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{spec.label}</p>
                <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--ink)" }}>{spec.value}</p>
              </div>
            ))}
          </div>

          {/* Availability */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, fontSize: "0.88rem" }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: product.inStock ? "#16a34a" : "#dc2626", display: "inline-block" }} />
            <span style={{ fontWeight: 600, color: product.inStock ? "#16a34a" : "#dc2626" }}>
              {product.inStock ? "In Stock — Ready to Ship" : "Out of Stock"}
            </span>
          </div>

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div style={{ marginBottom: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Size <span style={{ color: "var(--gold)" }}>— {selectedSize || "Select"}</span>
                </p>
                <button style={{ fontSize: "0.78rem", color: "var(--gold)", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>Size Guide</button>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      width: 44, height: 40, fontSize: "0.82rem", fontWeight: 600,
                      border: `1.5px solid ${selectedSize === size ? "var(--gold)" : "var(--border)"}`,
                      background: selectedSize === size ? "var(--gold)" : "transparent",
                      color: selectedSize === size ? "#fff" : "var(--ink)",
                      borderRadius: 3, cursor: "pointer", transition: "all 0.2s"
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Qty</p>
            <div style={{ display: "flex", alignItems: "center", border: "1.5px solid var(--border)", borderRadius: 4 }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: "pointer", color: "var(--ink)" }}>
                <Minus size={14} />
              </button>
              <span style={{ width: 44, textAlign: "center", fontSize: "0.95rem", fontWeight: 700, color: "var(--ink)" }}>{qty}</span>
              <button onClick={() => setQty(qty + 1)} style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: "pointer", color: "var(--ink)" }}>
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                padding: "15px 20px", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", border: "none", cursor: "pointer",
                background: added ? "#16a34a" : "var(--ink)", color: "#fff",
                borderRadius: 4, transition: "all 0.25s", opacity: product.inStock ? 1 : 0.5
              }}
            >
              <ShoppingCart size={16} />
              {added ? "ADDED ✓" : "ADD TO CART"}
            </button>
            <button
              onClick={handleBuyNow}
              className="btn-gold"
              style={{ flex: 1, fontSize: "0.85rem", letterSpacing: "0.1em", borderRadius: 4 }}
            >
              BUY NOW
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              style={{
                width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center",
                border: `1.5px solid ${isWishlisted ? "var(--gold)" : "var(--border)"}`,
                background: isWishlisted ? "var(--gold)" : "transparent",
                color: isWishlisted ? "#fff" : "var(--ink)",
                borderRadius: 4, cursor: "pointer", flexShrink: 0, transition: "all 0.25s"
              }}
            >
              <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
            </button>
          </div>

          {/* Trust badges */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 8 }}>
            {[
              { icon: Truck, text: "Free Insured Shipping", sub: "Across India" },
              { icon: Shield, text: "Secure Payment", sub: "100% Safe" },
              { icon: RotateCcw, text: "15-Day Returns", sub: "Easy Exchange" },
            ].map((item) => (
              <div key={item.text} style={{ textAlign: "center", padding: "12px 8px", background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 4 }}>
                <item.icon size={18} style={{ color: "var(--gold)", margin: "0 auto 4px" }} />
                <p style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--ink)" }}>{item.text}</p>
                <p style={{ fontSize: "0.65rem", color: "var(--muted)" }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Detailed Info Accordion Sections ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 72 }} className="product-info-grid">
        <div>
          {/* Product Description */}
          <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid var(--border)" }}>
            <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.8 }}>{product.description}</p>
          </div>

          <AccordionSection title="Product Details" defaultOpen={true}>
            <DetailRow label="Material" value={metalLabel} />
            <DetailRow label="Purity" value={product.purity || "—"} />
            <DetailRow label="Category" value={product.subcategory} />
            <DetailRow label="Collection" value={(product as any).collection || "Signature"} />
            <DetailRow label="Total Weight" value={product.weight || "—"} />
            <DetailRow label="Metal Weight" value={product.weight ? product.weight : "—"} />
            <DetailRow label="Finish" value={product.category === "Gold" ? "High Polish" : "Rhodium Plated"} />
            <DetailRow label="Packaging" value="Premium Velvet Box" />
          </AccordionSection>

          <AccordionSection title="Price Breakup" defaultOpen={false}>
            <div style={{ paddingTop: 4 }}>
              <PriceRow label={`${metalLabel} Cost`} value={formatPrice(materialCost)} />
              <PriceRow label="Making Charges" value={formatPrice(makingCharges)} />
              <PriceRow label="GST (3%)" value={formatPrice(gstAmount)} />
              {product.originalPrice && discount > 0 && (
                <PriceRow label={`Discount (${discount}%)`} value={`−${formatPrice(product.originalPrice - product.price)}`} />
              )}
              <div style={{ marginTop: 4 }}>
                <PriceRow label="Total Price" value={formatPrice(product.price)} isBold isGold />
              </div>
              <p style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: 10 }}>
                * Metal rates vary daily. Final price may differ slightly at checkout based on live rates.
              </p>
            </div>
          </AccordionSection>

          <AccordionSection title="Jewellery Care" defaultOpen={false}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "🧴", title: "Cleaning", desc: "Clean gently with a soft, lint-free cloth. Avoid harsh chemicals, bleach, and ultrasonic cleaners." },
                { icon: "📦", title: "Storage", desc: "Store separately in the provided velvet pouch or box to prevent scratches and tarnishing." },
                { icon: "💧", title: "Water Exposure", desc: "Remove before swimming, bathing or exercising. Chlorine and sweat can affect metal finish." },
                { icon: "🌞", title: "Sunlight", desc: "Avoid prolonged exposure to direct sunlight which can cause fading in gemstone pieces." },
                { icon: "💎", title: "Gemstones", desc: "For pieces with stones, wipe the stones separately and avoid submerging in water." },
              ].map((tip) => (
                <div key={tip.title} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.1rem", flexShrink: 0, marginTop: 1 }}>{tip.icon}</span>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--ink)", marginBottom: 2 }}>{tip.title}</p>
                    <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>
        </div>

        <div>
          <AccordionSection title="Shipping Information" defaultOpen={true}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <MapPin size={16} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--ink)" }}>Pan India Delivery</p>
                  <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>We deliver to all major cities and pin codes across India. Free shipping on all orders above ₹999.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Clock size={16} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--ink)" }}>Delivery Time</p>
                  <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>Metro cities: 2–3 business days. Other cities: 4–6 business days. Custom pieces: 7–14 business days.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Package size={16} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--ink)" }}>Secure Packaging</p>
                  <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>Every piece is dispatched in a premium gift box, wrapped securely to prevent damage in transit.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Truck size={16} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--ink)" }}>Order Tracking</p>
                  <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>You will receive a tracking link via SMS and email once your order is dispatched. Track live on our courier partner's portal.</p>
                </div>
              </div>
            </div>
          </AccordionSection>

          <AccordionSection title="Frequently Asked Questions" defaultOpen={false}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  q: "Is this jewellery BIS Hallmarked?",
                  a: "Yes. All our gold and silver jewellery carries the BIS hallmark certifying metal purity as per Indian standards (916 for 22K gold, 925 for sterling silver)."
                },
                {
                  q: "Can I get this piece customized?",
                  a: "Absolutely. Visit our Gold Customization page or WhatsApp us at +91 99628 19898 to discuss custom orders."
                },
                {
                  q: "What is your return and exchange policy?",
                  a: "We offer a 15-day return policy and lifetime exchange on all jewellery. The piece must be unused and in original packaging. Custom items are non-returnable."
                },
                {
                  q: "How long does delivery take?",
                  a: "Standard delivery takes 3–7 business days. We offer express delivery in select cities. Custom pieces require 10–14 business days."
                },
                {
                  q: "Is the weight mentioned the net gold weight?",
                  a: "The weight mentioned is the gross weight of the piece. Net metal weight may vary slightly depending on setting and stones. Contact us for exact metal weight."
                },
              ].map((faq) => (
                <div key={faq.q}>
                  <p style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--ink)", marginBottom: 5 }}>{faq.q}</p>
                  <p style={{ fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.65 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </AccordionSection>

          {/* Hallmark Certificate Block */}
          <div style={{ marginTop: 24, padding: 20, background: "linear-gradient(135deg, #faf6ed 0%, #f5ecda 100%)", border: "1px solid var(--gold-soft)", borderRadius: 8 }}>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <Gem size={32} style={{ color: "var(--gold-deep)", flexShrink: 0 }} />
              <div>
                <p style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--ink)", marginBottom: 4 }}>Certified Genuine Jewellery</p>
                <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6 }}>Every piece is accompanied by a purity certificate and quality assurance card from Venus Silver. Your satisfaction is our legacy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 48 }}>
          <div style={{ marginBottom: 32 }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-deep)" }}>You May Also Love</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.7rem", color: "var(--ink)", marginTop: 6 }}>Related Products</h2>
            <div style={{ width: 56, height: 3, background: "var(--gold-grad)", borderRadius: 3, marginTop: 10 }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="grid-cols-responsive-4">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1024px) {
          .product-detail-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .product-info-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
          .grid-cols-responsive-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .grid-cols-responsive-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
