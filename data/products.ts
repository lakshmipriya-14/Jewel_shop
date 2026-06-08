import { Product } from "@/types";

const silverImages = {
  rings: [
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
  ],
  earrings: [
    "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80",
    "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80",
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80",
  ],
  chains: [
    "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
    "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
  ],
  pendants: [
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80",
    "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=600&q=80",
    "https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=600&q=80",
  ],
  bracelets: [
    "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80",
    "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
  ],
  anklets: [
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80",
    "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
  ],
};

function getImg(cat: keyof typeof silverImages, idx: number) {
  const arr = silverImages[cat];
  return [arr[idx % arr.length]];
}

export const silverRings: Product[] = [
  { id: "sr-01", name: "Floral Filigree Ring", category: "Silver", subcategory: "Rings", price: 1850, originalPrice: 2200, images: getImg("rings", 0), rating: 4.8, reviewCount: 124, description: "Delicately crafted filigree ring with floral motif in 92.5 sterling silver.", purity: "92.5% Sterling Silver", weight: "3.2g", sizes: ["5", "6", "7", "8", "9"], isBestSeller: true, inStock: true, tags: ["women","silver","floral","ring"] },
  { id: "sr-02", name: "Twisted Band Ring", category: "Silver", subcategory: "Rings", price: 1250, images: getImg("rings", 1), rating: 4.6, reviewCount: 87, description: "Elegant twisted rope band in pure sterling silver.", purity: "92.5% Sterling Silver", weight: "2.8g", sizes: ["5", "6", "7", "8", "9"], isNew: true, inStock: true },
  { id: "sr-03", name: "Moonstone Halo Ring", category: "Silver", subcategory: "Rings", price: 3200, originalPrice: 3800, images: getImg("rings", 2), rating: 4.9, reviewCount: 213, description: "Beautiful moonstone set in a halo of CZ crystals, sterling silver band.", purity: "92.5% Sterling Silver", weight: "4.1g", sizes: ["5", "6", "7", "8"], isPopular: true, inStock: true, tags: ["women","silver","moonstone","halo"] },
  { id: "sr-04", name: "Stacking Set Ring", category: "Silver", subcategory: "Rings", price: 2100, images: getImg("rings", 0), rating: 4.7, reviewCount: 156, description: "Set of three slim stackable rings in sterling silver.", purity: "92.5% Sterling Silver", weight: "5.4g", sizes: ["5", "6", "7", "8", "9"], inStock: true },
  { id: "sr-05", name: "Lotus Bloom Ring", category: "Silver", subcategory: "Rings", price: 1750, originalPrice: 2100, images: getImg("rings", 1), rating: 4.5, reviewCount: 92, description: "Inspired by the lotus flower, this ring represents purity and grace.", purity: "92.5% Sterling Silver", weight: "3.6g", sizes: ["5", "6", "7", "8", "9"], inStock: true },
  { id: "sr-06", name: "Oxidised Tribal Ring", category: "Silver", subcategory: "Rings", price: 1450, images: getImg("rings", 2), rating: 4.4, reviewCount: 67, description: "Bold tribal-inspired oxidised silver ring with geometric patterns.", purity: "92.5% Sterling Silver", weight: "4.8g", sizes: ["6", "7", "8", "9"], inStock: true, tags: ["men","silver","tribal","oxidised","ring"] },
  { id: "sr-07", name: "Diamond Dust Ring", category: "Silver", subcategory: "Rings", price: 2800, originalPrice: 3200, images: getImg("rings", 0), rating: 4.8, reviewCount: 178, description: "Pavé-set CZ diamonds on a sleek sterling silver band.", purity: "92.5% Sterling Silver", weight: "3.0g", sizes: ["5", "6", "7", "8"], isBestSeller: true, inStock: true },
  { id: "sr-08", name: "Infinity Love Ring", category: "Silver", subcategory: "Rings", price: 1650, images: getImg("rings", 1), rating: 4.6, reviewCount: 99, description: "Infinity symbol intertwined hearts ring in polished silver.", purity: "92.5% Sterling Silver", weight: "2.9g", sizes: ["5", "6", "7", "8", "9"], inStock: true },
  { id: "sr-09", name: "Pearl Bezel Ring", category: "Silver", subcategory: "Rings", price: 2450, originalPrice: 2900, images: getImg("rings", 2), rating: 4.7, reviewCount: 143, description: "Freshwater pearl set in a bezel of sterling silver.", purity: "92.5% Sterling Silver", weight: "3.5g", sizes: ["5", "6", "7", "8"], inStock: true },
  { id: "sr-10", name: "Chevron Midi Ring", category: "Silver", subcategory: "Rings", price: 950, images: getImg("rings", 0), rating: 4.3, reviewCount: 55, description: "Minimalist chevron-shaped midi ring for everyday wear.", purity: "92.5% Sterling Silver", weight: "1.8g", sizes: ["3", "4", "5"], inStock: true, tags: ["kids","children","silver","mini","small","cute"] },
  { id: "sr-11", name: "Vintage Signet Ring", category: "Silver", subcategory: "Rings", price: 3500, originalPrice: 4200, images: getImg("rings", 1), rating: 4.9, reviewCount: 201, description: "Classic vintage signet ring with engraved floral border.", purity: "92.5% Sterling Silver", weight: "6.2g", sizes: ["7", "8", "9", "10"], isPopular: true, inStock: true, tags: ["men","gents","silver","signet","ring"] },
  { id: "sr-12", name: "Adjustable Cuff Ring", category: "Silver", subcategory: "Rings", price: 1300, images: getImg("rings", 2), rating: 4.5, reviewCount: 88, description: "Open-ended adjustable cuff ring, fits most sizes.", purity: "92.5% Sterling Silver", weight: "3.1g", sizes: ["Adjustable"], inStock: true },
  { id: "sr-13", name: "Turquoise Statement Ring", category: "Silver", subcategory: "Rings", price: 2650, originalPrice: 3100, images: getImg("rings", 0), rating: 4.6, reviewCount: 112, description: "Bold turquoise stone set in ornate sterling silver bezel.", purity: "92.5% Sterling Silver", weight: "5.0g", sizes: ["6", "7", "8", "9"], inStock: true },
  { id: "sr-14", name: "Celtic Knot Ring", category: "Silver", subcategory: "Rings", price: 1900, images: getImg("rings", 1), rating: 4.7, reviewCount: 134, description: "Intricate Celtic knot pattern ring, beautifully detailed.", purity: "92.5% Sterling Silver", weight: "4.0g", sizes: ["5", "6", "7", "8", "9"], isNew: true, inStock: true },
  { id: "sr-15", name: "Amethyst Solitaire Ring", category: "Silver", subcategory: "Rings", price: 2950, originalPrice: 3500, images: getImg("rings", 2), rating: 4.8, reviewCount: 189, description: "Deep purple amethyst in a classic solitaire silver setting.", purity: "92.5% Sterling Silver", weight: "3.8g", sizes: ["5", "6", "7", "8"], isBestSeller: true, inStock: true },
  { id: "sr-16", name: "Wave Pattern Ring", category: "Silver", subcategory: "Rings", price: 1550, images: getImg("rings", 0), rating: 4.4, reviewCount: 76, description: "Fluid wave-inspired band in brushed sterling silver.", purity: "92.5% Sterling Silver", weight: "3.3g", sizes: ["5", "6", "7", "8", "9"], inStock: true },
  { id: "sr-17", name: "Rose Quartz Ring", category: "Silver", subcategory: "Rings", price: 2200, originalPrice: 2600, images: getImg("rings", 1), rating: 4.6, reviewCount: 108, description: "Rose quartz crystal set in delicate sterling silver prongs.", purity: "92.5% Sterling Silver", weight: "3.7g", sizes: ["5", "6", "7", "8"], inStock: true },
  { id: "sr-18", name: "Geometric Dome Ring", category: "Silver", subcategory: "Rings", price: 1700, images: getImg("rings", 2), rating: 4.5, reviewCount: 91, description: "Modern geometric dome ring with faceted surface.", purity: "92.5% Sterling Silver", weight: "4.5g", sizes: ["6", "7", "8", "9"], inStock: true },
  { id: "sr-19", name: "Butterfly Wrap Ring", category: "Silver", subcategory: "Rings", price: 2100, originalPrice: 2500, images: getImg("rings", 0), rating: 4.7, reviewCount: 147, description: "Butterfly motif wrap-style ring in sterling silver.", purity: "92.5% Sterling Silver", weight: "3.4g", sizes: ["5", "6", "7", "8", "9"], isNew: true, inStock: true },
  { id: "sr-20", name: "Hammered Band Ring", category: "Silver", subcategory: "Rings", price: 1400, images: getImg("rings", 1), rating: 4.5, reviewCount: 82, description: "Artisan-hammered wide band in oxidised sterling silver.", purity: "92.5% Sterling Silver", weight: "5.8g", sizes: ["6", "7", "8", "9", "10"], inStock: true },
];

export const silverEarrings: Product[] = [
  { id: "se-01", name: "Jhumka Drop Earrings", category: "Silver", subcategory: "Earrings", price: 2200, originalPrice: 2600, images: getImg("earrings", 0), rating: 4.9, reviewCount: 234, description: "Traditional bell-shaped jhumka earrings with intricate detailing.", purity: "92.5% Sterling Silver", weight: "12g", isBestSeller: true, inStock: true, tags: ["women","silver","jhumka","traditional","earrings"] },
  { id: "se-02", name: "Lotus Stud Earrings", category: "Silver", subcategory: "Earrings", price: 950, images: getImg("earrings", 1), rating: 4.7, reviewCount: 167, description: "Elegant lotus flower stud earrings in polished silver.", purity: "92.5% Sterling Silver", weight: "3g", isNew: true, inStock: true, tags: ["women","silver","lotus","divine","god","devotional"] },
  { id: "se-03", name: "CZ Hoop Earrings", category: "Silver", subcategory: "Earrings", price: 1850, originalPrice: 2200, images: getImg("earrings", 2), rating: 4.8, reviewCount: 198, description: "Classic hoops encrusted with cubic zirconia stones.", purity: "92.5% Sterling Silver", weight: "7g", isPopular: true, inStock: true },
  { id: "se-04", name: "Tassel Chandelier Earrings", category: "Silver", subcategory: "Earrings", price: 2800, images: getImg("earrings", 0), rating: 4.6, reviewCount: 88, description: "Long chandelier earrings with delicate silver tassels.", purity: "92.5% Sterling Silver", weight: "15g", inStock: true },
  { id: "se-05", name: "Pearl Drop Earrings", category: "Silver", subcategory: "Earrings", price: 2100, originalPrice: 2500, images: getImg("earrings", 1), rating: 4.8, reviewCount: 145, description: "Freshwater pearl drops suspended from sterling silver posts.", purity: "92.5% Sterling Silver", weight: "5g", inStock: true },
  { id: "se-06", name: "Filigree Fan Earrings", category: "Silver", subcategory: "Earrings", price: 1750, images: getImg("earrings", 2), rating: 4.5, reviewCount: 76, description: "Fan-shaped filigree earrings with intricate wirework.", purity: "92.5% Sterling Silver", weight: "8g", inStock: true },
  { id: "se-07", name: "Moon & Star Studs", category: "Silver", subcategory: "Earrings", price: 1100, originalPrice: 1400, images: getImg("earrings", 0), rating: 4.7, reviewCount: 203, description: "Crescent moon and star stud earring set in sterling silver.", purity: "92.5% Sterling Silver", weight: "2.5g", isBestSeller: true, inStock: true },
  { id: "se-08", name: "Oxidised Peacock Earrings", category: "Silver", subcategory: "Earrings", price: 1950, images: getImg("earrings", 1), rating: 4.6, reviewCount: 119, description: "Peacock-motif oxidised silver earrings with enamel accents.", purity: "92.5% Sterling Silver", weight: "11g", inStock: true },
  { id: "se-09", name: "Minimalist Bar Studs", category: "Silver", subcategory: "Earrings", price: 850, originalPrice: 1050, images: getImg("earrings", 2), rating: 4.4, reviewCount: 64, description: "Clean geometric bar studs for a modern minimalist look.", purity: "92.5% Sterling Silver", weight: "1.8g", isNew: true, inStock: true },
  { id: "se-10", name: "Garnet Teardrop Earrings", category: "Silver", subcategory: "Earrings", price: 2450, images: getImg("earrings", 0), rating: 4.8, reviewCount: 156, description: "Deep red garnet teardrops in sterling silver prong settings.", purity: "92.5% Sterling Silver", weight: "6g", inStock: true },
  { id: "se-11", name: "Floral Cluster Earrings", category: "Silver", subcategory: "Earrings", price: 2300, originalPrice: 2750, images: getImg("earrings", 1), rating: 4.7, reviewCount: 132, description: "Cluster of silver flowers forming a statement earring.", purity: "92.5% Sterling Silver", weight: "9g", isPopular: true, inStock: true },
  { id: "se-12", name: "Turquoise Dangle Earrings", category: "Silver", subcategory: "Earrings", price: 1650, images: getImg("earrings", 2), rating: 4.5, reviewCount: 87, description: "Natural turquoise stones in oxidised silver dangles.", purity: "92.5% Sterling Silver", weight: "7g", inStock: true },
  { id: "se-13", name: "Heart Hoop Earrings", category: "Silver", subcategory: "Earrings", price: 1300, originalPrice: 1600, images: getImg("earrings", 0), rating: 4.6, reviewCount: 103, description: "Cute heart-shaped hoops in polished sterling silver.", purity: "92.5% Sterling Silver", weight: "4g", inStock: true },
  { id: "se-14", name: "Mandala Drop Earrings", category: "Silver", subcategory: "Earrings", price: 2600, images: getImg("earrings", 1), rating: 4.9, reviewCount: 211, description: "Intricate mandala pattern drop earrings in sterling silver.", purity: "92.5% Sterling Silver", weight: "13g", isBestSeller: true, inStock: true },
  { id: "se-15", name: "Amethyst Studs", category: "Silver", subcategory: "Earrings", price: 1500, originalPrice: 1800, images: getImg("earrings", 2), rating: 4.7, reviewCount: 128, description: "Purple amethyst gemstone studs in sterling silver bezel.", purity: "92.5% Sterling Silver", weight: "3g", inStock: true },
  { id: "se-16", name: "Leaf Motif Earrings", category: "Silver", subcategory: "Earrings", price: 1400, images: getImg("earrings", 0), rating: 4.4, reviewCount: 71, description: "Nature-inspired silver leaf earrings with hammered texture.", purity: "92.5% Sterling Silver", weight: "5g", isNew: true, inStock: true },
  { id: "se-17", name: "Bohemian Fringe Earrings", category: "Silver", subcategory: "Earrings", price: 2000, originalPrice: 2400, images: getImg("earrings", 1), rating: 4.6, reviewCount: 95, description: "Long fringe-style boho earrings with beaded silver chains.", purity: "92.5% Sterling Silver", weight: "16g", inStock: true },
  { id: "se-18", name: "Concentric Hoop Set", category: "Silver", subcategory: "Earrings", price: 1750, images: getImg("earrings", 2), rating: 4.5, reviewCount: 84, description: "Set of three concentric hoop earrings in graduated sizes.", purity: "92.5% Sterling Silver", weight: "6g", inStock: true },
  { id: "se-19", name: "Butterfly Stud Earrings", category: "Silver", subcategory: "Earrings", price: 1050, originalPrice: 1300, images: getImg("earrings", 0), rating: 4.7, reviewCount: 148, description: "Delicate butterfly wing studs in sterling silver.", purity: "92.5% Sterling Silver", weight: "2g", inStock: true },
  { id: "se-20", name: "Enamel Floral Drops", category: "Silver", subcategory: "Earrings", price: 2200, images: getImg("earrings", 1), rating: 4.8, reviewCount: 173, description: "Hand-painted enamel flowers on sterling silver drop earrings.", purity: "92.5% Sterling Silver", weight: "8g", isPopular: true, inStock: true },
];

export const silverChains: Product[] = [
  { id: "sc-01", name: "Box Link Chain", category: "Silver", subcategory: "Chains", price: 3200, originalPrice: 3800, images: getImg("chains", 0), rating: 4.8, reviewCount: 142, description: "Classic box-link chain in 92.5 sterling silver, 18 inches.", purity: "92.5% Sterling Silver", weight: "8g", isBestSeller: true, inStock: true },
  { id: "sc-02", name: "Curb Chain Necklace", category: "Silver", subcategory: "Chains", price: 2800, images: getImg("chains", 1), rating: 4.7, reviewCount: 98, description: "Bold curb-link chain in polished sterling silver.", purity: "92.5% Sterling Silver", weight: "12g", isNew: true, inStock: true },
  { id: "sc-03", name: "Snake Chain", category: "Silver", subcategory: "Chains", price: 2500, originalPrice: 3000, images: getImg("chains", 2), rating: 4.9, reviewCount: 187, description: "Smooth snake-style flexible chain in sterling silver.", purity: "92.5% Sterling Silver", weight: "9g", isPopular: true, inStock: true },
  { id: "sc-04", name: "Figaro Chain", category: "Silver", subcategory: "Chains", price: 3500, images: getImg("chains", 0), rating: 4.6, reviewCount: 76, description: "Italian-style Figaro chain pattern in sterling silver.", purity: "92.5% Sterling Silver", weight: "11g", inStock: true },
  { id: "sc-05", name: "Rope Twist Chain", category: "Silver", subcategory: "Chains", price: 2900, originalPrice: 3400, images: getImg("chains", 1), rating: 4.7, reviewCount: 119, description: "Twisted rope design chain, elegant and durable.", purity: "92.5% Sterling Silver", weight: "10g", inStock: true },
  { id: "sc-06", name: "Ball Chain Necklace", category: "Silver", subcategory: "Chains", price: 1800, images: getImg("chains", 2), rating: 4.4, reviewCount: 58, description: "Simple spherical ball chain in sterling silver, 20 inches.", purity: "92.5% Sterling Silver", weight: "6g", inStock: true },
  { id: "sc-07", name: "Singapore Chain", category: "Silver", subcategory: "Chains", price: 2200, originalPrice: 2700, images: getImg("chains", 0), rating: 4.8, reviewCount: 165, description: "Delicate Singapore-style twisted link chain.", purity: "92.5% Sterling Silver", weight: "5g", isBestSeller: true, inStock: true },
  { id: "sc-08", name: "Wheat Link Chain", category: "Silver", subcategory: "Chains", price: 3100, images: getImg("chains", 1), rating: 4.6, reviewCount: 87, description: "Elegant wheat-link pattern chain in sterling silver.", purity: "92.5% Sterling Silver", weight: "9g", inStock: true },
  { id: "sc-09", name: "Beaded Silver Chain", category: "Silver", subcategory: "Chains", price: 2000, originalPrice: 2400, images: getImg("chains", 2), rating: 4.5, reviewCount: 72, description: "Alternating bead and link chain in sterling silver.", purity: "92.5% Sterling Silver", weight: "7g", isNew: true, inStock: true },
  { id: "sc-10", name: "Byzantine Chain", category: "Silver", subcategory: "Chains", price: 4200, images: getImg("chains", 0), rating: 4.9, reviewCount: 203, description: "Intricate Byzantine weave chain, a masterpiece of craftsmanship.", purity: "92.5% Sterling Silver", weight: "15g", isPopular: true, inStock: true },
  { id: "sc-11", name: "Rolo Chain Necklace", category: "Silver", subcategory: "Chains", price: 2600, originalPrice: 3100, images: getImg("chains", 1), rating: 4.7, reviewCount: 134, description: "Round rolo-link chain in bright sterling silver.", purity: "92.5% Sterling Silver", weight: "8g", inStock: true },
  { id: "sc-12", name: "Herringbone Flat Chain", category: "Silver", subcategory: "Chains", price: 3800, images: getImg("chains", 2), rating: 4.8, reviewCount: 156, description: "Flat herringbone weave chain with glossy finish.", purity: "92.5% Sterling Silver", weight: "10g", isBestSeller: true, inStock: true },
  { id: "sc-13", name: "Pearl Station Chain", category: "Silver", subcategory: "Chains", price: 3300, originalPrice: 3900, images: getImg("chains", 0), rating: 4.6, reviewCount: 91, description: "Freshwater pearls set at intervals on a sterling silver chain.", purity: "92.5% Sterling Silver", weight: "7g", inStock: true },
  { id: "sc-14", name: "Double Layer Chain", category: "Silver", subcategory: "Chains", price: 2700, images: getImg("chains", 1), rating: 4.5, reviewCount: 68, description: "Layered two-chain necklace in varying link styles.", purity: "92.5% Sterling Silver", weight: "11g", isNew: true, inStock: true },
  { id: "sc-15", name: "Anchor Link Chain", category: "Silver", subcategory: "Chains", price: 2950, originalPrice: 3500, images: getImg("chains", 2), rating: 4.7, reviewCount: 112, description: "Nautical-inspired anchor link chain in sterling silver.", purity: "92.5% Sterling Silver", weight: "9g", inStock: true },
  { id: "sc-16", name: "Popcorn Chain", category: "Silver", subcategory: "Chains", price: 2400, images: getImg("chains", 0), rating: 4.4, reviewCount: 54, description: "Unique popcorn-style bumpy chain in polished silver.", purity: "92.5% Sterling Silver", weight: "8g", inStock: true },
  { id: "sc-17", name: "Oxidised Long Chain", category: "Silver", subcategory: "Chains", price: 3600, originalPrice: 4200, images: getImg("chains", 1), rating: 4.8, reviewCount: 178, description: "32-inch oxidised silver chain for a bohemian statement look.", purity: "92.5% Sterling Silver", weight: "14g", isPopular: true, inStock: true },
  { id: "sc-18", name: "CZ Studded Chain", category: "Silver", subcategory: "Chains", price: 4500, images: getImg("chains", 2), rating: 4.9, reviewCount: 221, description: "Sterling silver chain with CZ diamonds set at every link.", purity: "92.5% Sterling Silver", weight: "12g", isBestSeller: true, inStock: true },
  { id: "sc-19", name: "Heart Link Chain", category: "Silver", subcategory: "Chains", price: 2100, originalPrice: 2500, images: getImg("chains", 0), rating: 4.6, reviewCount: 103, description: "Alternating heart-shaped links in sterling silver.", purity: "92.5% Sterling Silver", weight: "7g", inStock: true },
  { id: "sc-20", name: "Infinity Chain Necklace", category: "Silver", subcategory: "Chains", price: 2350, images: getImg("chains", 1), rating: 4.7, reviewCount: 129, description: "Infinity symbol repeating chain in polished sterling silver.", purity: "92.5% Sterling Silver", weight: "8g", isNew: true, inStock: true },
];

export const silverPendants: Product[] = [
  { id: "sp-01", name: "Eternal Circle Pendant", category: "Silver", subcategory: "Pendants", price: 3200, originalPrice: 3800, images: getImg("pendants", 0), rating: 4.9, reviewCount: 189, description: "Minimalist open circle pendant in sterling silver, symbolising eternity.", purity: "92.5% Sterling Silver", weight: "4g", isBestSeller: true, inStock: true },
  { id: "sp-02", name: "Hamsa Hand Pendant", category: "Silver", subcategory: "Pendants", price: 2100, images: getImg("pendants", 1), rating: 4.7, reviewCount: 143, description: "Protective Hamsa hand pendant with intricate engraving.", purity: "92.5% Sterling Silver", weight: "5g", isNew: true, inStock: true },
  { id: "sp-03", name: "Lotus Mandala Pendant", category: "Silver", subcategory: "Pendants", price: 2800, originalPrice: 3300, images: getImg("pendants", 2), rating: 4.8, reviewCount: 211, description: "Detailed lotus mandala pendant in oxidised sterling silver.", purity: "92.5% Sterling Silver", weight: "6g", isPopular: true, inStock: true },
  { id: "sp-04", name: "Feather Pendant", category: "Silver", subcategory: "Pendants", price: 1650, images: getImg("pendants", 0), rating: 4.6, reviewCount: 87, description: "Delicate feather pendant in sterling silver, lightweight and elegant.", purity: "92.5% Sterling Silver", weight: "2.5g", inStock: true },
  { id: "sp-05", name: "Tree of Life Pendant", category: "Silver", subcategory: "Pendants", price: 2400, originalPrice: 2900, images: getImg("pendants", 1), rating: 4.8, reviewCount: 167, description: "Intricate tree of life pendant symbolising family and growth.", purity: "92.5% Sterling Silver", weight: "5.5g", inStock: true },
  { id: "sp-06", name: "Crescent Moon Pendant", category: "Silver", subcategory: "Pendants", price: 1800, images: getImg("pendants", 2), rating: 4.7, reviewCount: 124, description: "Dainty crescent moon pendant with star charm in silver.", purity: "92.5% Sterling Silver", weight: "3g", inStock: true },
  { id: "sp-07", name: "Om Symbol Pendant", category: "Silver", subcategory: "Pendants", price: 1950, originalPrice: 2300, images: getImg("pendants", 0), rating: 4.9, reviewCount: 256, description: "Sacred Om symbol pendant in polished sterling silver.", purity: "92.5% Sterling Silver", weight: "4.5g", isBestSeller: true, inStock: true },
  { id: "sp-08", name: "Heart Locket Pendant", category: "Silver", subcategory: "Pendants", price: 2700, images: getImg("pendants", 1), rating: 4.6, reviewCount: 98, description: "Heart-shaped locket with engravable inner plate.", purity: "92.5% Sterling Silver", weight: "6g", inStock: true },
  { id: "sp-09", name: "Teardrop Gemstone Pendant", category: "Silver", subcategory: "Pendants", price: 3100, originalPrice: 3600, images: getImg("pendants", 2), rating: 4.7, reviewCount: 134, description: "Teardrop-cut amethyst in sterling silver wire wrap setting.", purity: "92.5% Sterling Silver", weight: "4g", inStock: true },
  { id: "sp-10", name: "Elephant Charm Pendant", category: "Silver", subcategory: "Pendants", price: 1750, images: getImg("pendants", 0), rating: 4.5, reviewCount: 76, description: "Lucky elephant charm pendant with trunk up in sterling silver.", purity: "92.5% Sterling Silver", weight: "3.5g", isNew: true, inStock: true },
  { id: "sp-11", name: "Key to Heart Pendant", category: "Silver", subcategory: "Pendants", price: 2000, originalPrice: 2400, images: getImg("pendants", 1), rating: 4.8, reviewCount: 189, description: "Vintage key pendant with heart motif, beautifully detailed.", purity: "92.5% Sterling Silver", weight: "5g", isPopular: true, inStock: true },
  { id: "sp-12", name: "Buddha Head Pendant", category: "Silver", subcategory: "Pendants", price: 2350, images: getImg("pendants", 2), rating: 4.6, reviewCount: 112, description: "Serene Buddha face pendant in oxidised sterling silver.", purity: "92.5% Sterling Silver", weight: "7g", inStock: true },
  { id: "sp-13", name: "Infinity Name Pendant", category: "Silver", subcategory: "Pendants", price: 2900, originalPrice: 3400, images: getImg("pendants", 0), rating: 4.9, reviewCount: 231, description: "Personalised name within infinity symbol in sterling silver.", purity: "92.5% Sterling Silver", weight: "4g", isBestSeller: true, inStock: true },
  { id: "sp-14", name: "Clover Leaf Pendant", category: "Silver", subcategory: "Pendants", price: 1600, images: getImg("pendants", 1), rating: 4.5, reviewCount: 83, description: "Four-leaf clover pendant for luck and good fortune.", purity: "92.5% Sterling Silver", weight: "3g", inStock: true },
  { id: "sp-15", name: "Arrow Directional Pendant", category: "Silver", subcategory: "Pendants", price: 1450, originalPrice: 1750, images: getImg("pendants", 2), rating: 4.6, reviewCount: 95, description: "Sleek arrow pendant in sterling silver, symbolising direction.", purity: "92.5% Sterling Silver", weight: "2.8g", isNew: true, inStock: true },
  { id: "sp-16", name: "Evil Eye Pendant", category: "Silver", subcategory: "Pendants", price: 2100, images: getImg("pendants", 0), rating: 4.7, reviewCount: 147, description: "Protective evil eye pendant with blue enamel detail.", purity: "92.5% Sterling Silver", weight: "3.5g", inStock: true },
  { id: "sp-17", name: "Sun & Moon Pendant", category: "Silver", subcategory: "Pendants", price: 2500, originalPrice: 3000, images: getImg("pendants", 1), rating: 4.8, reviewCount: 168, description: "Celestial sun and moon combined pendant in sterling silver.", purity: "92.5% Sterling Silver", weight: "4.5g", isPopular: true, inStock: true },
  { id: "sp-18", name: "Ganesha Pendant", category: "Silver", subcategory: "Pendants", price: 2800, images: getImg("pendants", 2), rating: 4.9, reviewCount: 214, description: "Intricately crafted Lord Ganesha pendant in 92.5 silver.", purity: "92.5% Sterling Silver", weight: "8g", isBestSeller: true, inStock: true },
  { id: "sp-19", name: "Anchor Charm Pendant", category: "Silver", subcategory: "Pendants", price: 1550, originalPrice: 1900, images: getImg("pendants", 0), rating: 4.4, reviewCount: 62, description: "Nautical anchor charm pendant in brushed sterling silver.", purity: "92.5% Sterling Silver", weight: "4g", inStock: true },
  { id: "sp-20", name: "Butterfly Garden Pendant", category: "Silver", subcategory: "Pendants", price: 2200, images: getImg("pendants", 1), rating: 4.7, reviewCount: 131, description: "Open-wing butterfly pendant with engraved wing details.", purity: "92.5% Sterling Silver", weight: "3.8g", inStock: true },
];

export const silverBracelets: Product[] = [
  { id: "sb-01", name: "Charm Bangle Bracelet", category: "Silver", subcategory: "Bracelets", price: 3800, originalPrice: 4500, images: getImg("bracelets", 0), rating: 4.8, reviewCount: 156, description: "Adjustable charm bangle with elephant, lotus and star charms.", purity: "92.5% Sterling Silver", weight: "14g", isBestSeller: true, inStock: true },
  { id: "sb-02", name: "Tennis Bracelet", category: "Silver", subcategory: "Bracelets", price: 5200, images: getImg("bracelets", 1), rating: 4.9, reviewCount: 201, description: "Classic tennis bracelet with CZ stones in sterling silver.", purity: "92.5% Sterling Silver", weight: "10g", isPopular: true, inStock: true },
  { id: "sb-03", name: "Infinity Cuff Bracelet", category: "Silver", subcategory: "Bracelets", price: 2400, originalPrice: 2900, images: getImg("bracelets", 2), rating: 4.7, reviewCount: 128, description: "Open cuff bracelet with infinity symbol in sterling silver.", purity: "92.5% Sterling Silver", weight: "8g", isNew: true, inStock: true },
  { id: "sb-04", name: "Beaded Stretch Bracelet", category: "Silver", subcategory: "Bracelets", price: 1800, images: getImg("bracelets", 0), rating: 4.5, reviewCount: 87, description: "Sterling silver beads on elastic for effortless wearability.", purity: "92.5% Sterling Silver", weight: "12g", inStock: true },
  { id: "sb-05", name: "Filigree Kada Bangle", category: "Silver", subcategory: "Bracelets", price: 4200, originalPrice: 5000, images: getImg("bracelets", 1), rating: 4.8, reviewCount: 167, description: "Traditional Indian kada bangle with filigree work.", purity: "92.5% Sterling Silver", weight: "22g", inStock: true },
  { id: "sb-06", name: "Snake Wrap Bracelet", category: "Silver", subcategory: "Bracelets", price: 3100, images: getImg("bracelets", 2), rating: 4.6, reviewCount: 94, description: "Sculptural snake coil bracelet wrapping around the wrist.", purity: "92.5% Sterling Silver", weight: "16g", inStock: true },
  { id: "sb-07", name: "Link Chain Bracelet", category: "Silver", subcategory: "Bracelets", price: 2700, originalPrice: 3200, images: getImg("bracelets", 0), rating: 4.7, reviewCount: 112, description: "Oval link chain bracelet in polished sterling silver.", purity: "92.5% Sterling Silver", weight: "9g", isBestSeller: true, inStock: true },
  { id: "sb-08", name: "Pearl Strand Bracelet", category: "Silver", subcategory: "Bracelets", price: 3500, images: getImg("bracelets", 1), rating: 4.8, reviewCount: 143, description: "Freshwater pearls interspersed with silver beads on a bracelet.", purity: "92.5% Sterling Silver", weight: "11g", inStock: true },
  { id: "sb-09", name: "Hammered Cuff", category: "Silver", subcategory: "Bracelets", price: 2200, originalPrice: 2700, images: getImg("bracelets", 2), rating: 4.5, reviewCount: 76, description: "Wide hammered cuff bracelet in brushed sterling silver.", purity: "92.5% Sterling Silver", weight: "18g", isNew: true, inStock: true },
  { id: "sb-10", name: "Lotus Charm Bracelet", category: "Silver", subcategory: "Bracelets", price: 2900, images: getImg("bracelets", 0), rating: 4.7, reviewCount: 118, description: "Delicate link bracelet with multiple lotus flower charms.", purity: "92.5% Sterling Silver", weight: "8g", inStock: true },
  { id: "sb-11", name: "Adjustable Bolo Bracelet", category: "Silver", subcategory: "Bracelets", price: 1950, originalPrice: 2400, images: getImg("bracelets", 1), rating: 4.6, reviewCount: 89, description: "Bolo-style adjustable bracelet in sterling silver.", purity: "92.5% Sterling Silver", weight: "6g", inStock: true },
  { id: "sb-12", name: "Oxidised Statement Bangle", category: "Silver", subcategory: "Bracelets", price: 3300, images: getImg("bracelets", 2), rating: 4.8, reviewCount: 152, description: "Bold oxidised silver bangle with tribal pattern engravings.", purity: "92.5% Sterling Silver", weight: "24g", isPopular: true, inStock: true },
  { id: "sb-13", name: "Bar Charm Bracelet", category: "Silver", subcategory: "Bracelets", price: 2500, originalPrice: 3000, images: getImg("bracelets", 0), rating: 4.6, reviewCount: 97, description: "Engravable bar charm on a fine link bracelet.", purity: "92.5% Sterling Silver", weight: "7g", inStock: true },
  { id: "sb-14", name: "Butterfly Garden Bracelet", category: "Silver", subcategory: "Bracelets", price: 2100, images: getImg("bracelets", 1), rating: 4.5, reviewCount: 73, description: "Butterfly charms on a delicate chain bracelet.", purity: "92.5% Sterling Silver", weight: "6g", isNew: true, inStock: true },
  { id: "sb-15", name: "Crystal Bangle Set", category: "Silver", subcategory: "Bracelets", price: 4800, originalPrice: 5600, images: getImg("bracelets", 2), rating: 4.9, reviewCount: 198, description: "Set of three CZ crystal-studded bangles in sterling silver.", purity: "92.5% Sterling Silver", weight: "30g", isBestSeller: true, inStock: true },
  { id: "sb-16", name: "Minimalist Wire Bracelet", category: "Silver", subcategory: "Bracelets", price: 1200, images: getImg("bracelets", 0), rating: 4.3, reviewCount: 54, description: "Thin wire bracelet with tiny star charm, ultra minimal.", purity: "92.5% Sterling Silver", weight: "2g", inStock: true },
  { id: "sb-17", name: "Turquoise Chip Bracelet", category: "Silver", subcategory: "Bracelets", price: 2800, originalPrice: 3300, images: getImg("bracelets", 1), rating: 4.7, reviewCount: 124, description: "Natural turquoise chips on sterling silver adjustable bracelet.", purity: "92.5% Sterling Silver", weight: "10g", inStock: true },
  { id: "sb-18", name: "Heart ID Bracelet", category: "Silver", subcategory: "Bracelets", price: 3200, images: getImg("bracelets", 2), rating: 4.8, reviewCount: 161, description: "Heart-engraved ID plate bracelet in sterling silver.", purity: "92.5% Sterling Silver", weight: "13g", isPopular: true, inStock: true },
  { id: "sb-19", name: "Woven Mesh Bracelet", category: "Silver", subcategory: "Bracelets", price: 3600, originalPrice: 4200, images: getImg("bracelets", 0), rating: 4.7, reviewCount: 136, description: "Flexible woven mesh bracelet in sterling silver.", purity: "92.5% Sterling Silver", weight: "15g", inStock: true },
  { id: "sb-20", name: "Celestial Charm Bracelet", category: "Silver", subcategory: "Bracelets", price: 2600, images: getImg("bracelets", 1), rating: 4.6, reviewCount: 108, description: "Moon, star and sun charms on a sterling silver chain bracelet.", purity: "92.5% Sterling Silver", weight: "8g", inStock: true },
];

export const silverAnklets: Product[] = [
  { id: "sa-01", name: "Classic Ball Anklet", category: "Silver", subcategory: "Anklets", price: 1200, originalPrice: 1500, images: getImg("anklets", 0), rating: 4.7, reviewCount: 134, description: "Traditional sterling silver anklet with ball links.", purity: "92.5% Sterling Silver", weight: "6g", isBestSeller: true, inStock: true },
  { id: "sa-02", name: "Jingle Bell Anklet", category: "Silver", subcategory: "Anklets", price: 1800, images: getImg("anklets", 1), rating: 4.8, reviewCount: 187, description: "Delicate anklet with tiny silver bells that chime softly.", purity: "92.5% Sterling Silver", weight: "8g", isNew: true, inStock: true },
  { id: "sa-03", name: "Lotus Charm Anklet", category: "Silver", subcategory: "Anklets", price: 1650, originalPrice: 2000, images: getImg("anklets", 2), rating: 4.6, reviewCount: 98, description: "Lotus flower charms on a fine sterling silver anklet.", purity: "92.5% Sterling Silver", weight: "7g", isPopular: true, inStock: true },
  { id: "sa-04", name: "Butterfly Anklet", category: "Silver", subcategory: "Anklets", price: 1400, images: getImg("anklets", 0), rating: 4.5, reviewCount: 72, description: "Butterfly motif charms on a sterling silver anklet.", purity: "92.5% Sterling Silver", weight: "6g", inStock: true },
  { id: "sa-05", name: "Moon Phase Anklet", category: "Silver", subcategory: "Anklets", price: 1950, originalPrice: 2300, images: getImg("anklets", 1), rating: 4.8, reviewCount: 156, description: "Phases of the moon as charms on a delicate silver anklet.", purity: "92.5% Sterling Silver", weight: "7g", inStock: true },
  { id: "sa-06", name: "Oxidised Tribal Anklet", category: "Silver", subcategory: "Anklets", price: 1500, images: getImg("anklets", 2), rating: 4.4, reviewCount: 63, description: "Bold tribal-design oxidised silver anklet.", purity: "92.5% Sterling Silver", weight: "9g", inStock: true },
  { id: "sa-07", name: "Double Strand Anklet", category: "Silver", subcategory: "Anklets", price: 2100, originalPrice: 2500, images: getImg("anklets", 0), rating: 4.7, reviewCount: 112, description: "Two-layer sterling silver anklet with varied link styles.", purity: "92.5% Sterling Silver", weight: "10g", isBestSeller: true, inStock: true },
  { id: "sa-08", name: "Turquoise Bead Anklet", category: "Silver", subcategory: "Anklets", price: 1750, images: getImg("anklets", 1), rating: 4.6, reviewCount: 89, description: "Natural turquoise beads with sterling silver links.", purity: "92.5% Sterling Silver", weight: "8g", inStock: true },
  { id: "sa-09", name: "Heart Charm Anklet", category: "Silver", subcategory: "Anklets", price: 1300, originalPrice: 1600, images: getImg("anklets", 2), rating: 4.6, reviewCount: 97, description: "Cute heart charms on a fine sterling silver anklet.", purity: "92.5% Sterling Silver", weight: "6g", isNew: true, inStock: true },
  { id: "sa-10", name: "Filigree Star Anklet", category: "Silver", subcategory: "Anklets", price: 1850, images: getImg("anklets", 0), rating: 4.7, reviewCount: 121, description: "Star-shaped filigree charms on a delicate anklet.", purity: "92.5% Sterling Silver", weight: "7g", inStock: true },
  { id: "sa-11", name: "Elephant Charm Anklet", category: "Silver", subcategory: "Anklets", price: 1600, originalPrice: 1950, images: getImg("anklets", 1), rating: 4.5, reviewCount: 78, description: "Lucky elephant charms on a sterling silver anklet.", purity: "92.5% Sterling Silver", weight: "8g", inStock: true },
  { id: "sa-12", name: "Infinity Anklet", category: "Silver", subcategory: "Anklets", price: 1450, images: getImg("anklets", 2), rating: 4.6, reviewCount: 86, description: "Infinity symbol pendant on a delicate silver anklet.", purity: "92.5% Sterling Silver", weight: "5g", inStock: true },
  { id: "sa-13", name: "Adjustable Bolo Anklet", category: "Silver", subcategory: "Anklets", price: 1250, originalPrice: 1550, images: getImg("anklets", 0), rating: 4.4, reviewCount: 59, description: "Adjustable bolo-style silver anklet, one size fits most.", purity: "92.5% Sterling Silver", weight: "5g", inStock: true },
  { id: "sa-14", name: "Multi-Charm Anklet", category: "Silver", subcategory: "Anklets", price: 2200, images: getImg("anklets", 1), rating: 4.8, reviewCount: 143, description: "Seven mixed charms on a sterling silver anklet chain.", purity: "92.5% Sterling Silver", weight: "10g", isPopular: true, inStock: true },
  { id: "sa-15", name: "Wave Design Anklet", category: "Silver", subcategory: "Anklets", price: 1700, originalPrice: 2050, images: getImg("anklets", 2), rating: 4.6, reviewCount: 91, description: "Flowing wave pattern alternating links in sterling silver.", purity: "92.5% Sterling Silver", weight: "7g", inStock: true },
  { id: "sa-16", name: "Rose Quartz Anklet", category: "Silver", subcategory: "Anklets", price: 2000, images: getImg("anklets", 0), rating: 4.7, reviewCount: 107, description: "Rose quartz chips with silver beads on elastic anklet.", purity: "92.5% Sterling Silver", weight: "9g", isNew: true, inStock: true },
  { id: "sa-17", name: "CZ Tennis Anklet", category: "Silver", subcategory: "Anklets", price: 2800, originalPrice: 3300, images: getImg("anklets", 1), rating: 4.9, reviewCount: 178, description: "Tennis-style CZ crystal anklet in sterling silver.", purity: "92.5% Sterling Silver", weight: "8g", isBestSeller: true, inStock: true },
  { id: "sa-18", name: "Charm Chain Anklet", category: "Silver", subcategory: "Anklets", price: 1550, images: getImg("anklets", 2), rating: 4.5, reviewCount: 74, description: "Fine chain anklet with star, moon and heart charms.", purity: "92.5% Sterling Silver", weight: "6g", inStock: true },
  { id: "sa-19", name: "Boho Layer Anklet", category: "Silver", subcategory: "Anklets", price: 2100, originalPrice: 2500, images: getImg("anklets", 0), rating: 4.6, reviewCount: 93, description: "Three layered anklets with charms and chains in silver.", purity: "92.5% Sterling Silver", weight: "12g", inStock: true },
  { id: "sa-20", name: "Peacock Feather Anklet", category: "Silver", subcategory: "Anklets", price: 1900, images: getImg("anklets", 1), rating: 4.8, reviewCount: 138, description: "Peacock feather motif charms on a sterling silver anklet.", purity: "92.5% Sterling Silver", weight: "9g", isPopular: true, inStock: true },
];

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

export function getProductsBySubcategory(subcategory: string): Product[] {
  return allProducts.filter((p) => p.subcategory.toLowerCase() === subcategory.toLowerCase());
}

// =============================================
// GOLD PRODUCTS
// =============================================

const goldImages = {
  rings: [
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80",
  ],
  earrings: [
    "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80",
    "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80",
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
  ],
  chains: [
    "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80",
    "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
  ],
  pendants: [
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80",
    "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=600&q=80",
    "https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=600&q=80",
  ],
  bracelets: [
    "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80",
    "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80",
    "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
  ],
  bangles: [
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80",
  ],
  necklaces: [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80",
  ],
};

function getGoldImg(cat: keyof typeof goldImages, idx: number) {
  const arr = goldImages[cat];
  return [arr[idx % arr.length]];
}

export const goldRings: Product[] = [
  { id: "gr-01", name: "22K Gold Solitaire Ring", category: "Gold", subcategory: "Rings", price: 28500, originalPrice: 32000, images: getGoldImg("rings", 0), rating: 4.9, reviewCount: 187, description: "Classic 22K gold solitaire ring with a brilliant-cut CZ stone, perfect for engagements.", purity: "22K Gold", weight: "4.2g", sizes: ["5","6","7","8","9"], isBestSeller: true, inStock: true, tags: ["women","gold","solitaire","engagement","wedding"] },
  { id: "gr-02", name: "Gold Floral Band Ring", category: "Gold", subcategory: "Rings", price: 18900, images: getGoldImg("rings", 1), rating: 4.7, reviewCount: 134, description: "Delicate floral pattern band ring in 22K hallmark gold.", purity: "22K Gold", weight: "3.5g", sizes: ["5","6","7","8","9"], isNew: true, inStock: true, tags: ["women","gold","floral","traditional"] },
  { id: "gr-03", name: "Men's Gold Signet Ring", category: "Gold", subcategory: "Rings", price: 35000, images: getGoldImg("rings", 2), rating: 4.8, reviewCount: 98, description: "Bold signet ring in 22K gold with personalised engraving option.", purity: "22K Gold", weight: "7.8g", sizes: ["9","10","11","12"], isPopular: true, inStock: true, tags: ["men","gold","signet","gents"] },
  { id: "gr-04", name: "Kids Gold Heart Ring", category: "Gold", subcategory: "Rings", price: 8500, images: getGoldImg("rings", 0), rating: 4.6, reviewCount: 76, description: "Adorable heart-shaped ring in 18K gold for little ones.", purity: "18K Gold", weight: "1.8g", sizes: ["2","3","4"], inStock: true, tags: ["kids","children","gold","cute","small"] },
  { id: "gr-05", name: "Gold Temple Ring", category: "Gold", subcategory: "Rings", price: 22000, originalPrice: 25000, images: getGoldImg("rings", 1), rating: 4.9, reviewCount: 211, description: "Traditional temple-style gold ring with divine Lakshmi motif.", purity: "22K Gold", weight: "5.1g", sizes: ["5","6","7","8"], isBestSeller: true, inStock: true, tags: ["women","god","devotional","temple","lakshmi","religious","traditional"] },
  { id: "gr-06", name: "Gold Wedding Band", category: "Gold", subcategory: "Rings", price: 24000, images: getGoldImg("rings", 2), rating: 4.8, reviewCount: 156, description: "Classic plain wedding band in polished 22K gold.", purity: "22K Gold", weight: "4.8g", sizes: ["5","6","7","8","9","10"], inStock: true, tags: ["men","women","gold","wedding","band"] },
];

export const goldEarrings: Product[] = [
  { id: "ge-01", name: "Gold Jhumka Earrings", category: "Gold", subcategory: "Earrings", price: 15000, originalPrice: 18000, images: getGoldImg("earrings", 0), rating: 4.9, reviewCount: 243, description: "Traditional bell-shaped gold jhumkas with peacock motif, perfect for festivals.", purity: "22K Gold", weight: "8.5g", isBestSeller: true, inStock: true, tags: ["women","gold","jhumka","traditional","ethnic"] },
  { id: "ge-02", name: "Gold Stud Earrings", category: "Gold", subcategory: "Earrings", price: 9500, images: getGoldImg("earrings", 1), rating: 4.7, reviewCount: 178, description: "Classic round gold studs for everyday elegance.", purity: "22K Gold", weight: "2.5g", isNew: true, inStock: true, tags: ["women","gold","studs","everyday"] },
  { id: "ge-03", name: "Bridal Gold Chandelier", category: "Gold", subcategory: "Earrings", price: 42000, originalPrice: 48000, images: getGoldImg("earrings", 2), rating: 4.9, reviewCount: 112, description: "Grand chandelier earrings with kundans and gold hangings for brides.", purity: "22K Gold", weight: "18g", isPopular: true, inStock: true, tags: ["women","gold","bridal","wedding","chandelier"] },
  { id: "ge-04", name: "Kids Gold Bali Earrings", category: "Gold", subcategory: "Earrings", price: 5500, images: getGoldImg("earrings", 0), rating: 4.6, reviewCount: 89, description: "Simple gold bali hoops for kids, safe and comfortable.", purity: "18K Gold", weight: "1.8g", inStock: true, tags: ["kids","children","gold","bali","small"] },
];

export const goldChains: Product[] = [
  { id: "gc-01", name: "22K Gold Rope Chain", category: "Gold", subcategory: "Chains", price: 65000, originalPrice: 72000, images: getGoldImg("chains", 0), rating: 4.9, reviewCount: 201, description: "Thick twisted rope chain in 22K hallmark gold, 20 inches.", purity: "22K Gold", weight: "15g", isBestSeller: true, inStock: true, tags: ["men","women","gold","chain","rope"] },
  { id: "gc-02", name: "Gold Box Chain", category: "Gold", subcategory: "Chains", price: 48000, images: getGoldImg("chains", 1), rating: 4.8, reviewCount: 145, description: "Elegant box-link chain in 22K gold, 18 inches.", purity: "22K Gold", weight: "12g", isNew: true, inStock: true, tags: ["women","gold","chain","box"] },
  { id: "gc-03", name: "Men's Gold Curb Chain", category: "Gold", subcategory: "Chains", price: 85000, images: getGoldImg("chains", 2), rating: 4.8, reviewCount: 89, description: "Heavy curb-link chain for men in solid 22K gold.", purity: "22K Gold", weight: "22g", isPopular: true, inStock: true, tags: ["men","gents","gold","chain","curb","heavy"] },
];

export const goldPendants: Product[] = [
  { id: "gp-01", name: "Gold Ganesha Pendant", category: "Gold", subcategory: "Pendants", price: 18500, originalPrice: 22000, images: getGoldImg("pendants", 0), rating: 4.9, reviewCount: 312, description: "Intricate Lord Ganesha pendant in 22K gold, symbol of wisdom and prosperity.", purity: "22K Gold", weight: "4.8g", isBestSeller: true, inStock: true, tags: ["god","devotional","ganesha","religious","divine","sacred","lord","temple"] },
  { id: "gp-02", name: "Gold Lakshmi Pendant", category: "Gold", subcategory: "Pendants", price: 21000, images: getGoldImg("pendants", 1), rating: 4.9, reviewCount: 278, description: "Goddess Lakshmi pendant in 22K gold with detailed craftsmanship.", purity: "22K Gold", weight: "5.2g", isBestSeller: true, inStock: true, tags: ["god","devotional","lakshmi","religious","divine","sacred","lord","women","temple"] },
  { id: "gp-03", name: "Gold Om Pendant", category: "Gold", subcategory: "Pendants", price: 9800, originalPrice: 11500, images: getGoldImg("pendants", 2), rating: 4.8, reviewCount: 198, description: "Sacred Om symbol pendant in polished 22K gold.", purity: "22K Gold", weight: "3.1g", isPopular: true, inStock: true, tags: ["god","om","devotional","religious","sacred","men","women"] },
  { id: "gp-04", name: "Gold Cross Pendant", category: "Gold", subcategory: "Pendants", price: 12500, images: getGoldImg("pendants", 0), rating: 4.7, reviewCount: 134, description: "Classic cross pendant in 22K gold with fine detailing.", purity: "22K Gold", weight: "3.8g", inStock: true, tags: ["god","devotional","religious","sacred","cross","men","women"] },
];

export const goldBangles: Product[] = [
  { id: "gb-01", name: "22K Gold Plain Bangles (Pair)", category: "Gold", subcategory: "Bangles", price: 55000, originalPrice: 62000, images: getGoldImg("bangles", 0), rating: 4.9, reviewCount: 234, description: "Classic plain gold bangles, sold as a pair in 22K gold.", purity: "22K Gold", weight: "20g", isBestSeller: true, inStock: true, tags: ["women","gold","bangles","traditional","bangle"] },
  { id: "gb-02", name: "Gold Kada Bangle", category: "Gold", subcategory: "Bangles", price: 78000, images: getGoldImg("bangles", 1), rating: 4.8, reviewCount: 167, description: "Heavy gold kada (bracelet-bangle) for men in 22K gold.", purity: "22K Gold", weight: "28g", isPopular: true, inStock: true, tags: ["men","gents","gold","kada","bangle","heavy"] },
  { id: "gb-03", name: "Gold Bridal Bangle Set", category: "Gold", subcategory: "Bangles", price: 125000, images: getGoldImg("bangles", 2), rating: 4.9, reviewCount: 89, description: "Set of 6 intricate bridal bangles in 22K gold with kundan work.", purity: "22K Gold", weight: "45g", isNew: true, inStock: true, tags: ["women","gold","bridal","wedding","bangles"] },
];

export const goldAnklets: Product[] = [
  { id: "ga-01", name: "22K Gold Anklet (Pair)", category: "Gold", subcategory: "Anklets", price: 32000, originalPrice: 38000, images: getGoldImg("bangles", 0), rating: 4.9, reviewCount: 178, description: "Delicate twin-strand gold anklet pair in 22K hallmark gold — a timeless classic.", purity: "22K Gold", weight: "8g", isBestSeller: true, inStock: true, tags: ["women","gold","anklet","payal","traditional"] },
  { id: "ga-02", name: "Gold Ghungroo Anklet", category: "Gold", subcategory: "Anklets", price: 24500, images: getGoldImg("chains", 0), rating: 4.8, reviewCount: 134, description: "Traditional ghungroo (bell) anklet in 22K gold, perfect for festivals.", purity: "22K Gold", weight: "6.5g", isNew: true, inStock: true, tags: ["women","gold","anklet","ghungroo","traditional","festival"] },
  { id: "ga-03", name: "Gold Chain Anklet", category: "Gold", subcategory: "Anklets", price: 18000, images: getGoldImg("chains", 1), rating: 4.7, reviewCount: 98, description: "Minimalist gold chain anklet for everyday elegance in 22K gold.", purity: "22K Gold", weight: "4.5g", isPopular: true, inStock: true, tags: ["women","gold","anklet","minimal","modern"] },
];

// =============================================
// DIAMOND PRODUCTS
// =============================================

const diamondImages = {
  rings: [
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80",
  ],
  earrings: [
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80",
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80",
  ],
  necklaces: [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
    "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80",
  ],
  bracelets: [
    "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
  ],
  pendants: [
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80",
    "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=600&q=80",
    "https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=600&q=80",
  ],
};

function getDiamondImg(cat: keyof typeof diamondImages, idx: number) {
  const arr = diamondImages[cat];
  return [arr[idx % arr.length]];
}

export const diamondRings: Product[] = [
  { id: "dr-01", name: "Diamond Solitaire Ring", category: "Diamond", subcategory: "Rings", price: 85000, originalPrice: 95000, images: getDiamondImg("rings", 0), rating: 4.9, reviewCount: 198, description: "Stunning 0.5ct certified diamond solitaire ring in 18K gold setting.", purity: "18K Gold with Certified Diamond", weight: "3.8g", sizes: ["5","6","7","8"], isBestSeller: true, inStock: true, tags: ["women","diamond","solitaire","engagement","gold","luxury"] },
  { id: "dr-02", name: "Diamond Eternity Band", category: "Diamond", subcategory: "Rings", price: 125000, images: getDiamondImg("rings", 1), rating: 4.9, reviewCount: 145, description: "Full eternity band with channel-set diamonds in 18K white gold.", purity: "18K White Gold with Diamonds", weight: "4.5g", sizes: ["5","6","7","8","9"], isPopular: true, inStock: true, tags: ["women","diamond","eternity","wedding","gold","luxury"] },
  { id: "dr-03", name: "Diamond Cluster Ring", category: "Diamond", subcategory: "Rings", price: 68000, originalPrice: 78000, images: getDiamondImg("rings", 2), rating: 4.8, reviewCount: 112, description: "Halo cluster ring with central diamond and pave side stones.", purity: "18K Gold with Diamonds", weight: "3.2g", sizes: ["5","6","7","8"], isNew: true, inStock: true, tags: ["women","diamond","cluster","halo","gold","luxury"] },
];

export const diamondEarrings: Product[] = [
  { id: "de-01", name: "Diamond Stud Earrings", category: "Diamond", subcategory: "Earrings", price: 45000, originalPrice: 52000, images: getDiamondImg("earrings", 0), rating: 4.9, reviewCount: 267, description: "Classic 0.25ct each certified diamond studs in 18K gold prong setting.", purity: "18K Gold with Certified Diamonds", weight: "2g", isBestSeller: true, inStock: true, tags: ["women","diamond","studs","gold","luxury","everyday"] },
  { id: "de-02", name: "Diamond Drop Earrings", category: "Diamond", subcategory: "Earrings", price: 78000, images: getDiamondImg("earrings", 1), rating: 4.8, reviewCount: 134, description: "Elegant diamond drops with pear-shaped stones in 18K white gold.", purity: "18K White Gold with Diamonds", weight: "4g", isNew: true, inStock: true, tags: ["women","diamond","drops","gold","luxury"] },
];

export const diamondNecklaces: Product[] = [
  { id: "dn-01", name: "Diamond Tennis Necklace", category: "Diamond", subcategory: "Necklaces", price: 350000, originalPrice: 395000, images: getDiamondImg("necklaces", 0), rating: 4.9, reviewCount: 87, description: "Exquisite tennis necklace with 3ct of channel-set diamonds in 18K gold.", purity: "18K Gold with Certified Diamonds", weight: "18g", isBestSeller: true, inStock: true, tags: ["women","diamond","tennis","gold","luxury","necklace"] },
  { id: "dn-02", name: "Diamond Pendant Necklace", category: "Diamond", subcategory: "Necklaces", price: 95000, images: getDiamondImg("necklaces", 1), rating: 4.8, reviewCount: 156, description: "Solitaire diamond pendant on a delicate 18K gold chain.", purity: "18K Gold with Diamond", weight: "5g", isPopular: true, inStock: true, tags: ["women","diamond","pendant","gold","luxury","necklace"] },
];

export const diamondBracelets: Product[] = [
  { id: "db-01", name: "Diamond Tennis Bracelet", category: "Diamond", subcategory: "Bracelets", price: 185000, originalPrice: 210000, images: getDiamondImg("bracelets", 0), rating: 4.9, reviewCount: 112, description: "Classic tennis bracelet with 2ct of brilliant-cut diamonds in 18K gold.", purity: "18K Gold with Certified Diamonds", weight: "12g", isBestSeller: true, inStock: true, tags: ["women","diamond","tennis","gold","luxury","bracelet"] },
];

export const diamondPendants: Product[] = [
  { id: "dp-01", name: "Diamond Om Pendant", category: "Diamond", subcategory: "Pendants", price: 48000, originalPrice: 55000, images: getDiamondImg("pendants", 0), rating: 4.9, reviewCount: 198, description: "Sacred Om symbol crafted in 18K gold with diamond accents.", purity: "18K Gold with Diamonds", weight: "4.2g", isBestSeller: true, inStock: true, tags: ["god","om","devotional","religious","sacred","diamond","gold","luxury"] },
  { id: "dp-02", name: "Diamond Cross Pendant", category: "Diamond", subcategory: "Pendants", price: 38000, images: getDiamondImg("pendants", 1), rating: 4.8, reviewCount: 145, description: "Elegant cross pendant with pavé diamonds in 18K white gold.", purity: "18K White Gold with Diamonds", weight: "3.5g", isNew: true, inStock: true, tags: ["god","devotional","religious","sacred","cross","diamond","gold","luxury"] },
];

export const allProducts: Product[] = [
  ...silverRings,
  ...silverEarrings,
  ...silverChains,
  ...silverPendants,
  ...silverBracelets,
  ...silverAnklets,
  ...goldRings,
  ...goldEarrings,
  ...goldChains,
  ...goldPendants,
  ...goldBangles,
  ...goldAnklets,
  ...diamondRings,
  ...diamondEarrings,
  ...diamondNecklaces,
  ...diamondBracelets,
  ...diamondPendants,
];

export const bestSellers = allProducts.filter((p) => p.isBestSeller);
export const newArrivals = allProducts.filter((p) => p.isNew);
export const popularProducts = allProducts.filter((p) => p.isPopular);

