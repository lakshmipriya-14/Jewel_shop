"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { useTheme } from "@/components/ThemeProvider";
import { getDisplayName, loadStoredUser } from "@/lib/auth";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Gold Customization", href: "/gold-customization" },
  {
    label: "Gold",
    href: "/gold",
    dropdown: [
      { label: "All Gold", href: "/gold" },
      { label: "Gold Rings", href: "/gold/rings" },
      { label: "Gold Necklaces", href: "/gold/necklaces" },
      { label: "Gold Chains", href: "/gold/chains" },
      { label: "Gold Earrings", href: "/gold/earrings" },
      { label: "Gold Bangles", href: "/gold/bangles" },
      { label: "Gold Anklets", href: "/gold/anklets" },
      { label: "Bridal Gold Sets", href: "/gold/bridal" },
    ],
  },
  {
    label: "Silver",
    href: "/silver",
    dropdown: [
      { label: "All Silver", href: "/silver" },
      { label: "Rings", href: "/silver/rings" },
      { label: "Earrings", href: "/silver/earrings" },
      { label: "Chains", href: "/silver/chains" },
      { label: "Pendants", href: "/silver/pendants" },
      { label: "Bracelets", href: "/silver/bracelets" },
      { label: "Anklets", href: "/silver/anklets" },
    ],
  },
  {
    label: "Diamonds",
    href: "/diamonds",
    dropdown: [
      { label: "All Diamonds", href: "/diamonds" },
      { label: "Diamond Rings", href: "/diamonds/rings" },
      { label: "Diamond Earrings", href: "/diamonds/earrings" },
      { label: "Diamond Necklaces", href: "/diamonds/necklaces" },
      { label: "Diamond Bracelets", href: "/diamonds/bracelets" },
      { label: "Diamond Pendants", href: "/diamonds/pendants" },
    ],
  },
  {
    label: "Collections",
    href: "/collections/signature",
    dropdown: [
      { label: "Signature", href: "/collections/signature" },
      { label: "Wedding", href: "/collections/wedding" },
      { label: "Traditional", href: "/collections/traditional" },
      { label: "Modern", href: "/collections/modern" },
      { label: "Bridal", href: "/collections/bridal" },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
    dropdown: [
      { label: "All Jewellery", href: "/shop" },
      { label: "New Arrivals", href: "/shop/new" },
      { label: "Best Sellers", href: "/shop/bestsellers" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { itemCount, wishlist } = useCart();
  const { theme, toggle } = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [userName, setUserName] = useState("Account");

  useEffect(() => {
    const checkAuth = () => {
      const user = loadStoredUser();
      setUserName(getDisplayName(user));
    };
    checkAuth();
    globalThis.addEventListener("storage", checkAuth);
    globalThis.addEventListener("venus-auth-change", checkAuth);
    return () => {
      globalThis.removeEventListener("storage", checkAuth);
      globalThis.removeEventListener("venus-auth-change", checkAuth);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) {
      router.push(`/shop?search=${encodeURIComponent(q)}`);
    } else {
      router.push("/shop");
    }
    setSearchQuery("");
    setMobileOpen(false);
  };

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        {/* Top row */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              padding: "14px 0",
              minWidth: 0,
            }}
          >
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0, textDecoration: "none" }}>
              <div style={{ width: 42, height: 42, flexShrink: 0 }}>
                <Image
                  src="/logo-new.jpeg"
                  alt="Venus Silver"
                  width={42}
                  height={42}
                  style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid var(--gold)" }}
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "1.35rem", lineHeight: 1.1, letterSpacing: "0.06em", color: "var(--ink)" }} className="dark:!text-[#f4ecdd]">
                  VENUS <span style={{ color: "var(--gold-deep)" }}>SILVER</span>
                </div>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--muted)" }}>Timeless Beauty · Pure Silver</div>
              </div>
            </Link>

            {/* Search (desktop only) */}
            <form onSubmit={handleSearch} style={{ flex: 1, maxWidth: 360, position: "relative", minWidth: 0 }} className="hidden md:block">
              <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--border)", borderRadius: "50px", background: "var(--ivory)", overflow: "hidden", transition: "border 0.2s" }}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search gold rings, bridal sets, diamonds…"
                  aria-label="Search products"
                  style={{ flex: 1, padding: "10px 14px", background: "transparent", border: "none", outline: "none", fontSize: "0.9rem", color: "var(--ink)" }}
                  className="dark:!text-[#f4ecdd]"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  style={{ width: 38, height: 38, margin: "4px", borderRadius: "50%", background: "var(--gold-grad)", border: "none", cursor: "pointer", display: "grid", placeItems: "center", color: "#2a2208", flexShrink: 0 }}
                >
                  <Search size={15} />
                </button>
              </div>
            </form>

            {/* Search (mobile icon - always visible, toggles inline search bar) */}
            <button
              type="button"
              className="md:hidden"
              onClick={() => setMobileSearchOpen((v) => !v)}
              aria-label={mobileSearchOpen ? "Close search" : "Open search"}
              style={{
                width: 42, height: 42, borderRadius: "50%", border: "none",
                background: mobileSearchOpen ? "var(--gold)" : "transparent",
                cursor: "pointer", display: "grid", placeItems: "center",
                color: mobileSearchOpen ? "#2a2208" : "var(--ink)", flexShrink: 0,
                transition: "background 0.2s, color 0.2s"
              }}
              title="Search"
            >
              <Search size={18} />
            </button>


            {/* Icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <button
                onClick={toggle}
                title="Toggle theme"
                style={{ width: 42, height: 42, borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer", display: "grid", placeItems: "center", color: "var(--ink)", transition: "background 0.2s, color 0.2s" }}
                className="dark:!text-[#f4ecdd] hover:!bg-[var(--ivory)] hover:!text-[var(--gold-deep)]"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Link href="/account" title={userName} style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--ink)", transition: "background 0.2s, color 0.2s" }} className="dark:!text-[#f4ecdd] hover:!text-[var(--gold-deep)]">
                <span style={{ width: 42, height: 42, borderRadius: "50%", display: "grid", placeItems: "center", background: "transparent" }}>
                  <User size={18} />
                </span>
                <span className="hidden md:inline" style={{ fontSize: "0.82rem", fontWeight: 600 }}>
                  {userName}
                </span>
              </Link>
              <Link href="/account?tab=wishlist" title="Wishlist" style={{ width: 42, height: 42, borderRadius: "50%", display: "grid", placeItems: "center", color: "var(--ink)", position: "relative", transition: "color 0.2s" }} className="dark:!text-[#f4ecdd] hover:!text-[var(--gold-deep)]">
                <Heart size={18} />
                {wishlist.length > 0 && (
                  <span style={{ position: "absolute", top: 4, right: 4, minWidth: 18, height: 18, padding: "0 4px", borderRadius: "50px", background: "var(--danger)", color: "#fff", fontSize: "0.64rem", fontWeight: 700, display: "grid", placeItems: "center" }}>
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <Link href="/cart" title="Cart" style={{ width: 42, height: 42, borderRadius: "50%", display: "grid", placeItems: "center", color: "var(--ink)", position: "relative", transition: "color 0.2s" }} className="dark:!text-[#f4ecdd] hover:!text-[var(--gold-deep)]">
                <ShoppingBag size={18} />
                {itemCount > 0 && (
                  <span style={{ position: "absolute", top: 4, right: 4, minWidth: 18, height: 18, padding: "0 4px", borderRadius: "50px", background: "var(--gold)", color: "#2a2208", fontSize: "0.64rem", fontWeight: 700, display: "grid", placeItems: "center" }}>
                    {itemCount}
                  </span>
                )}
              </Link>
              <button
                className="md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{ width: 42, height: 42, borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer", display: "grid", placeItems: "center", color: "var(--ink)" }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile inline search bar — shown when search icon tapped */}
        <div
          className="md:hidden"
          style={{
            maxHeight: mobileSearchOpen ? 70 : 0,
            overflow: "hidden",
            transition: "max-height 0.3s ease",
            borderTop: mobileSearchOpen ? "1px solid var(--border)" : "none",
            background: "var(--white)",
          }}
          aria-hidden={!mobileSearchOpen}
        >
          <form
            onSubmit={(e) => {
              handleSearch(e);
              setMobileSearchOpen(false);
            }}
            style={{ padding: "10px 16px", display: "flex", gap: 8 }}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search gold, silver, rings…"
              autoFocus={mobileSearchOpen}
              style={{
                flex: 1,
                padding: "10px 16px",
                fontSize: "0.9rem",
                border: "1px solid var(--border)",
                borderRadius: "50px 0 0 50px",
                background: "var(--ivory)",
                color: "var(--ink)",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "0 20px",
                background: "var(--gold-grad)",
                border: "none",
                borderRadius: "0 50px 50px 0",
                cursor: "pointer",
                color: "#2a2208",
                fontWeight: 700,
                fontSize: "0.85rem",
                flexShrink: 0,
              }}
            >
              <Search size={15} />
            </button>
          </form>
        </div>

        {/* Nav row */}
        <div className="nav-row hidden md:block" ref={dropdownRef}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
            <nav className="main-nav">
              {navItems.map((item) => {
                const hasDropdown = Boolean((item as any).dropdown);
                return (
                  <div key={item.label} style={{ position: "relative" }}>
                    <Link
                      href={(item as any).href}
                      className={isActive((item as any).href) ? "active" : ""}
                      style={{ display: "inline-flex", alignItems: "center", gap: 4 }}
                      onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
                      onFocus={() => hasDropdown && setActiveDropdown(item.label)}
                    >
                      {item.label}
                      {hasDropdown && <ChevronDown size={11} />}
                    </Link>
                    {hasDropdown && activeDropdown === item.label && (
                      <div
                        style={{
                          position: "absolute", top: "100%", left: 0, width: 210,
                          background: "var(--white)", border: "1px solid var(--border)",
                          borderRadius: "var(--radius-sm)", boxShadow: "var(--shadow)",
                          overflow: "hidden", zIndex: 50
                        }} className="dark:!bg-[#1d1812] dark:!border-[#34291c]">
                        {(item as any).dropdown.map((sub: any) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            style={{
                              display: "block", padding: "11px 16px", fontSize: "0.86rem",
                              color: "var(--ink)", borderBottom: "1px solid var(--border)",
                              transition: "background 0.15s, color 0.15s",
                              textDecoration: "none"
                            }}
                            className="dark:!text-[#f4ecdd] dark:!border-[#34291c] hover:!bg-[var(--ivory)] hover:!text-[var(--gold-deep)]"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      {/* Prevent horizontal scroll on small screens caused by header widths */}
      <style jsx>{`
        @media (max-width: 640px) {
          .site-header {
            overflow-x: hidden;
          }
        }
      `}</style>

      {/* Overlay */}
      <button
        type="button"
        onClick={() => setMobileOpen(false)}
        aria-label="Close mobile menu"
        style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1100,
          opacity: mobileOpen ? 1 : 0, visibility: mobileOpen ? "visible" : "hidden",
          transition: "opacity 0.3s", border: "none", margin: 0, padding: 0, cursor: "pointer", backgroundColor: "rgba(0,0,0,0.5)"
        }}
      />
      {/* Drawer */}
      <aside style={{
        position: "fixed", inset: "0 0 0 auto", width: "min(82vw, 340px)",
        background: "var(--white)", zIndex: 1200,
        transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
        padding: "24px", boxShadow: "var(--shadow)", overflowY: "auto"
      }} className="dark:!bg-[#1d1812]">
        <button onClick={() => setMobileOpen(false)} style={{ fontSize: "1.6rem", background: "none", border: "none", cursor: "pointer", marginBottom: 18, color: "var(--ink)" }} className="dark:!text-[#f4ecdd]">✕</button>
        
        {/* Mobile Search */}
        <form onSubmit={handleSearch} style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", border: "1px solid var(--border)", borderRadius: "50px", overflow: "hidden", background: "var(--ivory)" }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jewellery…"
              style={{ flex: 1, padding: "10px 16px", background: "transparent", border: "none", outline: "none", fontSize: "0.9rem" }}
            />
            <button type="submit" style={{ padding: "0 16px", background: "var(--gold-grad)", border: "none", cursor: "pointer", color: "#2a2208" }}>
              <Search size={14} />
            </button>
          </div>
        </form>

        {navItems.map((item) => (
          <div key={item.label} style={{ borderBottom: "1px solid var(--border)" }} className="dark:!border-[#34291c]">
            <Link
              href={(item as any).href}
              style={{ display: "block", padding: "12px 8px", fontSize: "0.88rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink)", textDecoration: "none" }}
              className="dark:!text-[#f4ecdd]"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
            {(item as any).dropdown && (
              <div style={{ paddingLeft: 16, paddingBottom: 8 }}>
                {(item as any).dropdown.map((sub: any) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    style={{ display: "block", padding: "8px 8px", fontSize: "0.82rem", color: "var(--muted)", textDecoration: "none" }}
                    className="hover:!text-[var(--gold-deep)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </aside>
    </>
  );
}