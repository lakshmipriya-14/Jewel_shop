"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1400&q=80",
    eyebrow: "Pure 92.5 Sterling Silver",
    title: "Pure Silver,",
    titleItalic: "Timeless Beauty",
    description: "Handcrafted 92.5 sterling silver jewellery by master artisans — for every precious moment.",
    cta: "Shop Now",
    href: "/shop",
    ctaSecondary: "View Collections",
    hrefSecondary: "/collections/signature",
  },
  {
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=1400&q=80",
    eyebrow: "Bridal 2026",
    title: "For The",
    titleItalic: "Bride To Be",
    description: "Exquisite bridal sets, temple jewellery and antique masterpieces to make your wedding unforgettable.",
    cta: "Explore Bridal",
    href: "/collections/bridal",
    ctaSecondary: "Custom Orders",
    hrefSecondary: "/gold-customization",
  },
  {
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1400&q=80",
    eyebrow: "Signature Collection",
    title: "Where Art Meets",
    titleItalic: "Elegance",
    description: "Limited edition pieces crafted by master artisans in Madurai — jewellery that tells your story.",
    cta: "View Signature",
    href: "/collections/signature",
    ctaSecondary: "All Jewellery",
    hrefSecondary: "/shop",
  },
  {
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1400&q=80",
    eyebrow: "Diamond Collection",
    title: "Brilliance In",
    titleItalic: "Every Detail",
    description: "Certified diamonds in stunning settings — hand-selected for those who deserve the finest.",
    cta: "Shop Diamonds",
    href: "/diamonds",
    ctaSecondary: "New Arrivals",
    hrefSecondary: "/shop/new",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 400);
  }, [transitioning]);

  const goNext = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(goNext, 5500);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(480px, 82vh, 820px)",
        overflow: "hidden",
        background: "#0d0b08",
      }}
    >
      {/* Slide stack — all slides rendered, only active visible */}
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            visibility: i === current ? "visible" : "hidden",
            transition: "opacity 0.7s ease, visibility 0.7s ease",
            zIndex: i === current ? 2 : 1,
          }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            style={{
              objectFit: "cover",
              transform: i === current && !transitioning ? "scale(1.04)" : "scale(1)",
              transition: "transform 8s ease",
            }}
            priority={i === 0}
            sizes="100vw"
            unoptimized
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, rgba(10,8,6,.80) 0%, rgba(10,8,6,.42) 52%, rgba(10,8,6,.15) 100%)",
              zIndex: 1,
            }}
          />
        </div>
      ))}

      {/* Content — always on top */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", width: "100%" }}>
          <div
            style={{
              maxWidth: 620,
              opacity: transitioning ? 0 : 1,
              transform: transitioning ? "translateY(20px)" : "translateY(0)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            <p
              style={{
                color: "var(--gold-soft)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                fontSize: "0.78rem",
                fontWeight: 600,
                marginBottom: 14,
              }}
            >
              {slides[current].eyebrow}
            </p>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                color: "#fff",
                lineHeight: 1.1,
                margin: "0 0 18px",
              }}
            >
              {slides[current].title}
              <br />
              <em style={{ color: "var(--gold-soft)", fontStyle: "italic" }}>
                {slides[current].titleItalic}
              </em>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.88)",
                fontSize: "1.05rem",
                maxWidth: 500,
                marginBottom: 32,
                lineHeight: 1.65,
              }}
            >
              {slides[current].description}
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href={slides[current].href} className="btn-gold">
                {slides[current].cta}
              </Link>
              <Link
                href={slides[current].hrefSecondary}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 30px",
                  borderRadius: "50px",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  border: "1.5px solid rgba(255,255,255,0.6)",
                  color: "#fff",
                  background: "transparent",
                  transition: "all 0.35s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.color = "var(--gold-soft)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.6)";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
              >
                {slides[current].ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Prev Arrow */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          left: 22,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.16)",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,0.25)",
          color: "#fff",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
          transition: "background 0.25s",
        }}
        onMouseEnter={(e) => { (e.currentTarget).style.background = "var(--gold)"; (e.currentTarget).style.color = "#2a2208"; }}
        onMouseLeave={(e) => { (e.currentTarget).style.background = "rgba(255,255,255,0.16)"; (e.currentTarget).style.color = "#fff"; }}
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next Arrow */}
      <button
        onClick={goNext}
        aria-label="Next slide"
        style={{
          position: "absolute",
          right: 22,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.16)",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,0.25)",
          color: "#fff",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
          transition: "background 0.25s",
        }}
        onMouseEnter={(e) => { (e.currentTarget).style.background = "var(--gold)"; (e.currentTarget).style.color = "#2a2208"; }}
        onMouseLeave={(e) => { (e.currentTarget).style.background = "rgba(255,255,255,0.16)"; (e.currentTarget).style.color = "#fff"; }}
      >
        <ChevronRight size={22} />
      </button>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          gap: 10,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? 30 : 12,
              height: 12,
              borderRadius: i === current ? 8 : "50%",
              background: i === current ? "var(--gold)" : "rgba(255,255,255,0.45)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
