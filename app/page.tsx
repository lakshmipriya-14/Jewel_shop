import Image from "next/image";
import Link from "next/link";
import { Shield, Truck, Award, Gem, Star, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { bestSellers, newArrivals } from "@/data/products";
import HomeNewsletterSubscribe from "@/components/ui/HomeNewsletterSubscribe";


const trustItems = [
  { ico: "🛡", title: "BIS Hallmarked", desc: "100% certified purity" },
  { ico: "💎", title: "Premium Craftsmanship", desc: "30+ Years of artisan heritage" },
  { ico: "🚚", title: "Free Insured Shipping", desc: "Across India, always" },
  { ico: "↩", title: "15-Day Returns", desc: "Lifetime exchange policy" },
];

const collections = [
  {
    name: "Signature Collection",
    href: "/collections/signature",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    desc: "Limited edition masterpieces",
  },
  {
    name: "Bridal Collection",
    href: "/collections/bridal",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=80",
    desc: "Your perfect wedding jewellery",
  },
  {
    name: "Traditional Collection",
    href: "/collections/traditional",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    desc: "Heritage designs reimagined",
  },
  {
    name: "Modern Collection",
    href: "/collections/modern",
    image: "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=800&q=80",
    desc: "Contemporary luxury",
  },
];

const categories = [
  { name: "Rings", href: "/rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
  { name: "Earrings", href: "/earrings", image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&q=80" },
  { name: "Chains", href: "/chains", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
  { name: "Pendants", href: "/pendants", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80" },
  { name: "Bracelets", href: "/bracelets", image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=400&q=80" },
  { name: "Anklets", href: "/anklets", image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=400&q=80" },
  { name: "Gold", href: "/gold", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80" },
  { name: "Diamonds", href: "/diamonds", image: "https://images.unsplash.com/photo-1548394618-0a0c1a00a1b8?w=400&q=80" },
  { name: "Bridal", href: "/collections/bridal", image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80" },
];

const testimonials = [
  { name: "Priya Sharma", location: "Chennai", rating: 5, text: "Absolutely stunning silver jewellery! The craftsmanship is exquisite and the quality is top-notch. My Jhumka earrings get compliments everywhere I go." },
  { name: "Deepika Menon", location: "Bangalore", rating: 5, text: "Venus Silver is my go-to for all jewellery needs. Fast shipping, beautiful packaging and the pieces are even more gorgeous in person." },
  { name: "Ananya Krishnan", location: "Coimbatore", rating: 5, text: "Got a custom piece made for my wedding — the team was incredibly helpful and the final result was beyond my expectations. Highly recommended!" },
];

const instaGrid = [
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
  "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&q=80",
  "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
  "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80",
  "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=400&q=80",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust Strip */}
      <div className="trust-strip">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="trust-grid">
            {trustItems.map((t) => (
              <div key={t.title} className="trust-item">
                <div className="trust-ico">{t.ico}</div>
                <div>
                  <b>{t.title}</b>
                  <small>{t.desc}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Collections */}
      <section style={{ padding: "84px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-head text-center">
            <span className="eyebrow">Curated For You</span>
            <h2 className="section-title">Shop By Collection</h2>
            <p className="section-sub">From everyday elegance to once-in-a-lifetime heirlooms.</p>
            <div className="divider-gold" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="grid-cols-responsive-4">
            {collections.map((col) => (
              <Link key={col.name} href={col.href} className="collection-card">
                <Image src={col.image} alt={col.name} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 25vw" />
                <div className="collection-body">
                  <h3>{col.name}</h3>
                  <p>{col.desc}</p>
                  <span className="link-gold">Explore</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ paddingTop: 0, paddingBottom: "84px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-head text-center">
            <span className="eyebrow">Browse</span>
            <h2 className="section-title">Shop By Category</h2>
            <div className="divider-gold" />
          </div>
          {/* Single element — horizontal scroll on mobile, grid on desktop via CSS */}
          <div className="cat-row-wrap">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="cat-item"
                style={{ textAlign: "center", textDecoration: "none" }}
              >
                <div className="cat-thumb">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 88px, 110px"
                  />
                </div>
                <span
                  className="cat-label dark:!text-[#f4ecdd]"
                >
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Customization Band */}
      <section className="feature-band" style={{ padding: "84px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="split-responsive">
            <div style={{ borderRadius: "var(--radius)", overflow: "hidden", boxShadow: "var(--shadow)" }}>
              <Image
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                alt="Custom Gold Jewellery"
                width={600}
                height={500}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div>
              <span className="eyebrow">Made Just For You</span>
              <h2 className="section-title">Gold Customization</h2>
              <p style={{ color: "var(--muted)", marginBottom: 28, lineHeight: 1.7 }}>
                Turn your most precious memories into wearable art. Upload a photo, fingerprint or name — our artisans will craft it in pure gold.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
                {["Custom Name Rings", "Fingerprint Rings", "Photo Pendants", "Couple Rings", "Personalized Bracelets", "Custom Necklaces"].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "center", padding: "12px 14px", background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontWeight: 500, fontSize: "0.9rem" }} className="dark:!bg-[#1d1812] dark:!border-[#34291c]">
                    <span style={{ color: "var(--gold-deep)" }}>✦</span> {item}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href="/gold-customization" className="btn-gold">Start Customizing</Link>
                <a href="https://wa.me/919962819898" target="_blank" rel="noopener" className="btn-ghost">💬 WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section style={{ padding: "84px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
            <div>
              <span className="eyebrow">Most Loved</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Best Sellers</h2>
              <div style={{ width: 76, height: 3, background: "var(--gold-grad)", borderRadius: 3, marginTop: 14 }} />
            </div>
            <Link href="/shop/bestsellers" style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--gold-deep)", fontSize: "0.88rem", fontWeight: 600, textDecoration: "none" }}>
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 26 }} className="grid-cols-responsive-4">
            {bestSellers.slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section style={{ padding: "0 0 84px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="banner-cta">
            <Image
              src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=1400&q=80"
              alt="Bridal Jewellery"
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
            <div className="banner-body">
              <span className="hero-eyebrow" style={{ color: "var(--gold-soft)" }}>Limited Bridal Edit</span>
              <h2>Up to 25% Off Making Charges</h2>
              <p>On bridal necklace sets and temple jewellery this wedding season.</p>
              <Link href="/collections/bridal" className="btn-gold">Shop Bridal</Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section style={{ padding: "0 0 84px", background: "var(--ivory)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", paddingTop: 84 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
            <div>
              <span className="eyebrow">Fresh In</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>New Arrivals</h2>
              <div style={{ width: 76, height: 3, background: "var(--gold-grad)", borderRadius: 3, marginTop: 14 }} />
            </div>
            <Link href="/shop/new" style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--gold-deep)", fontSize: "0.88rem", fontWeight: 600, textDecoration: "none" }}>
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 26 }} className="grid-cols-responsive-4">
            {newArrivals.slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stat-section">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="stat-grid">
            {[
              { num: "30+", label: "Years of Trust" },
              { num: "25K+", label: "Happy Customers" },
              { num: "3,000+", label: "Unique Designs" },
              { num: "100%", label: "Certified Purity" },
            ].map((s) => (
              <div key={s.label} className="stat-item">
                <b>{s.num}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "84px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-head text-center">
            <span className="eyebrow">Loved By Many</span>
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="divider-gold" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="grid-cols-responsive-3">
            {testimonials.map((t) => (
              <div key={t.name} className="testi-card">
                <div className="testi-stars">{"★".repeat(t.rating)}</div>
                <p className="testi-text">"{t.text}"</p>
                <div>
                  <p className="testi-name">{t.name}</p>
                  <p className="testi-loc">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram / Gallery */}
      <section style={{ padding: "0 0 84px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-head text-center">
            <span className="eyebrow">@venussilver</span>
            <h2 className="section-title">Follow Our Journey</h2>
            <div className="divider-gold" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }} className="insta-grid-responsive">
            {instaGrid.map((img, i) => (
              <div key={i} style={{ position: "relative", aspectRatio: "1", overflow: "hidden", borderRadius: 8, cursor: "pointer" }} className="group">
                <Image
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.5s" }}
                  sizes="16vw"
                  className="group-hover:scale-110"
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", transition: "background 0.3s" }} className="group-hover:!bg-[rgba(0,0,0,0.2)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* hide horizontal scrollbar but keep touch scrolling */
        .cat-scroll-mobile::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Newsletter */}
      <section style={{ paddingBottom: 84 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="newsletter-band">
            <h2 className="section-title" style={{ color: "#fff", marginBottom: 12 }}>Join The Inner Circle</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 32, maxWidth: 520, margin: "0 auto 32px" }}>
              Be first to know about new collections, private sales and exclusive bridal previews.
            </p>
              <div
                style={{
                  display: "flex",
                  maxWidth: 500,
                  margin: "0 auto",
                  gap: 0,
                  borderRadius: 999,
                  overflow: "hidden",
                  boxShadow: "var(--shadow-gold)",
                }}
              >
                <div className="w-full">
                  <HomeNewsletterSubscribe />
                </div>
              </div>

          </div>
        </div>
      </section>

    </>
  );
}