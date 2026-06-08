import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";


export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Footer Grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <Image src="/logo-new.jpeg" alt="Venus Silver" width={50} height={50} style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid var(--gold)" }} />
              <div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "1.3rem", color: "#fff", letterSpacing: "0.06em" }}>
                  VENUS <span style={{ color: "var(--gold-soft)" }}>SILVER</span>
                </div>
                <div style={{ fontSize: "0.62rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                  Timeless Beauty · Pure Silver
                </div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: 24 }}>
              Premium 92.5 sterling silver jewellery handcrafted by artisans since 1994. Each piece tells a story of timeless elegance and pure craftsmanship.
            </p>

            <div style={{ display: "flex", gap: 10 }}>
              <a
                href="https://www.instagram.com/venussilver"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Venus Silver Instagram"
                className="social-icon"
              >
                <span style={{ fontSize: 16, fontWeight: 700 }}>IG</span>
              </a>
              <a
                href="https://www.facebook.com/venussilver"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Venus Silver Facebook"
                className="social-icon"
              >
                <span style={{ fontSize: 16, fontWeight: 700 }}>FB</span>
              </a>
              <a
                href="https://twitter.com/venussilver"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Venus Silver Twitter"
                className="social-icon"
              >
                <span style={{ fontSize: 16, fontWeight: 700 }}>TW</span>
              </a>
              <a
                href="https://www.youtube.com/@venussilver"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Venus Silver YouTube"
                className="social-icon"
              >
                <span style={{ fontSize: 16, fontWeight: 700 }}>YT</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            {[
              { label: "Home", href: "/" },
              { label: "Shop All", href: "/shop" },
              { label: "New Arrivals", href: "/shop/new" },
              { label: "Best Sellers", href: "/shop/bestsellers" },
              { label: "Gold Customization", href: "/gold-customization" },
              { label: "About Us", href: "/about" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>

          {/* Collections */}
          <div className="footer-col">
            <h4>Collections</h4>
            {[
              { label: "Gold Collection", href: "/gold" },
              { label: "Silver Collection", href: "/silver" },
              { label: "Diamond Collection", href: "/diamonds" },
              { label: "Signature Collection", href: "/collections/signature" },
              { label: "Bridal Collection", href: "/collections/bridal" },
              { label: "Wedding Collection", href: "/collections/wedding" },
              { label: "Traditional Collection", href: "/collections/traditional" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <MapPin size={16} style={{ color: "var(--gold-soft)", marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem" }}>59E Ramalinga Nagar, Anaiyar Madurai 625017</span>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <Phone size={16} style={{ color: "var(--gold-soft)", flexShrink: 0 }} />
                <a href="tel:+919962819898" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", textDecoration: "none" }}>+91 99628 19898</a>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <Mail size={16} style={{ color: "var(--gold-soft)", flexShrink: 0 }} />
                <a href="mailto:care@venussilver.in" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", textDecoration: "none" }}>care@venussilver.in</a>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginBottom: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>Quick Help Links</p>
              {[
                { label: "FAQ", href: "/faq" },
                { label: "Shipping Policy", href: "/shipping-policy" },
                { label: "Return Policy", href: "/return-and-refund-policy" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem" }}>
            © 2026 Venus Silver. All rights reserved. · Crafted with love in Madurai.
          </p>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem" }}>
            Crafted with ♥ for Pure Jewellery Lovers
          </p>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919962819898"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fab fab-whatsapp"
        style={{ fontSize: "1.4rem" }}
      >
        💬
      </a>
    </footer>
  );
}