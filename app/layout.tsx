import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingRateBadge from "@/components/ui/FloatingRateBadge";
import FloatingButtons from "@/components/FloatingButtons";
import CartProvider from "@/components/CartProvider";
import RateTicker from "@/components/ui/RateTicker";

export const metadata: Metadata = {
  title: "Venus Silver — Timeless Beauty. Pure Silver.",
  description:
    "Premium 92.5 sterling silver jewellery — rings, earrings, chains, pendants, bracelets and anklets. Handcrafted by artisans in Madurai.",
  keywords: "silver jewellery, sterling silver, rings, earrings, chains, pendants, Madurai, gold jewellery, diamond jewellery",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,500;1,600&family=Jost:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <CartProvider>
            <Header />
            <RateTicker />
            <main style={{ minHeight: "100vh" }}>{children}</main>
            <Footer />
            <FloatingRateBadge />
            <FloatingButtons />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}