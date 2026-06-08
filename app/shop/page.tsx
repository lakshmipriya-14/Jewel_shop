"use client";
import { useEffect, useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { allProducts } from "@/data/products";

const subcategories = ["All", "Rings", "Earrings", "Chains", "Pendants", "Bracelets", "Anklets"];
const materials = ["All Materials", "Silver", "Gold", "Diamond"];
const genders = ["All", "Women", "Men", "Kids", "God"];
const collections = ["All Collections", "Signature", "Wedding", "Bridal", "Traditional", "Modern"];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Newest First", value: "newest" },
  { label: "Top Rated", value: "rating" },
];

// Keyword mappings for gender/devotional
const GENDER_KEYWORDS: Record<string, string[]> = {
  Women: ["women", "woman", "female", "ladies", "girl", "jhumka", "jhumki", "bangle", "anklet", "bangles"],
  Men: ["men", "man", "male", "gents", "signet", "tribal", "kada"],
  Kids: ["kids", "child", "children", "mini", "small", "cute", "tiny"],
  God: ["god", "devotional", "temple", "lord", "ganesha", "lakshmi", "om", "hamsa", "buddha", "religious", "sacred", "lotus", "divine"],
};

const COLLECTION_KEYWORDS: Record<string, string[]> = {
  Signature: ["signature", "luxury", "premium", "exclusive", "limited", "masterpiece"],
  Wedding: ["wedding", "bridal", "bride", "marriage", "vivaha"],
  Bridal: ["bridal", "bride", "bridal set", "wedding"],
  Traditional: ["traditional", "heritage", "ethnic", "temple", "oxidised", "tribal", "antique", "vintage", "classic"],
  Modern: ["modern", "contemporary", "minimalist", "sleek", "geometric"],
};

function matchesGender(product: any, gender: string): boolean {
  if (gender === "All") return true;
  const kws = GENDER_KEYWORDS[gender] ?? [];
  const text = [product.name, product.description, product.subcategory, ...(product.tags ?? [])].join(" ").toLowerCase();
  return kws.some(kw => text.includes(kw));
}

function matchesCollection(product: any, collection: string): boolean {
  if (collection === "All Collections") return true;
  const kws = COLLECTION_KEYWORDS[collection] ?? [];
  const text = [product.name, product.description, ...(product.tags ?? [])].join(" ").toLowerCase();
  return kws.some(kw => text.includes(kw));
}

function ShopPageInner() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("search") ?? "";
  const [search, setSearch] = useState(queryParam);

  useEffect(() => {
    setSearch(queryParam);
    setPage(1);
  }, [queryParam]);

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeMaterial, setActiveMaterial] = useState("All Materials");
  const [activeGender, setActiveGender] = useState("All");
  const [activeCollection, setActiveCollection] = useState("All Collections");
  const [sort, setSort] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const filtered = useMemo(() => {
    let products = [...allProducts];

    // Category filter
    if (activeCategory !== "All") products = products.filter((p) => p.subcategory === activeCategory);

    // Material filter
    if (activeMaterial !== "All Materials") products = products.filter((p) => p.category === activeMaterial);

    // Gender filter
    if (activeGender !== "All") products = products.filter((p) => matchesGender(p, activeGender));

    // Collection filter
    if (activeCollection !== "All Collections") products = products.filter((p) => matchesCollection(p, activeCollection));

    // Search (multi-keyword, all fields)
    if (search.trim()) {
      const keywords = search.trim().split(/\s+/).map(k => k.toLowerCase());

      const normalizeParts = (v: unknown): string[] => {
        if (v === null || v === undefined) return [];
        if (Array.isArray(v)) return v.map((x) => String(x));
        return [String(v)];
      };

      products = products.filter((p) => {
        const tags = (p as any).tags ?? [];
        const fieldsToSearch: string[] = [
          p.name,
          p.category,
          (p as any).material,
          p.purity,
          ...(normalizeParts(tags)),
          p.description,
          (p as any).gender,
          p.subcategory,
        ].filter(Boolean).map((v) => String(v).toLowerCase());

        return keywords.every(kw => fieldsToSearch.some(field => field.includes(kw)));
      });
    }

    // Price filter
    products = products.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sort) {
      case "price_asc": products.sort((a, b) => a.price - b.price); break;
      case "price_desc": products.sort((a, b) => b.price - a.price); break;
      case "newest": products = products.filter((p) => p.isNew).concat(products.filter((p) => !p.isNew)); break;
      case "rating": products.sort((a, b) => b.rating - a.rating); break;
    }
    return products;
  }, [search, activeCategory, activeMaterial, activeGender, activeCollection, sort, priceRange]);

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);

  const hasActiveFilters = activeCategory !== "All" || activeMaterial !== "All Materials" || activeGender !== "All" || activeCollection !== "All Collections" || search.trim();

  const clearAll = () => {
    setSearch(""); setActiveCategory("All"); setActiveMaterial("All Materials");
    setActiveGender("All"); setActiveCollection("All Collections"); setPriceRange([0, 500000]); setPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">Venus Silver</p>
        <h1 className="font-serif text-3xl text-charcoal dark:text-white">All Jewellery</h1>
        {search.trim() ? (
          <>
            <p className="text-muted text-sm mt-1">Showing results for: <span className="font-semibold text-charcoal dark:text-white">{search}</span></p>
            <p className="text-muted text-sm mt-1">Found {filtered.length} {filtered.length === 1 ? "product" : "products"}</p>
          </>
        ) : (
          <p className="text-muted text-sm mt-1">{filtered.length} products</p>
        )}
      </div>

      {/* Search & Controls Row */}
      <div className="flex flex-wrap gap-3 mb-6 items-center">
        <div className="flex items-center border border-border rounded-sm overflow-hidden flex-1 max-w-sm">
          <input
            className="flex-1 px-4 py-2 text-sm outline-none bg-ivory dark:bg-charcoal-light dark:text-white"
            placeholder="Search by name, material, category..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
          <button className="px-3 py-2 bg-gold text-white"><Search size={15} /></button>
        </div>
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className={`flex items-center gap-2 border px-4 py-2 text-sm transition-colors ${filtersOpen ? "border-gold text-gold" : "border-border hover:border-gold hover:text-gold"}`}
        >
          <SlidersHorizontal size={15} /> Filters
          {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-gold inline-block" />}
        </button>
        <div className="flex items-center border border-border rounded-sm overflow-hidden">
          <select
            className="px-4 py-2 text-sm outline-none bg-ivory dark:bg-charcoal-light dark:text-white"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            {sortOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        {hasActiveFilters && (
          <button onClick={clearAll} className="text-xs text-gold hover:underline flex items-center gap-1">
            <X size={12} /> Clear All
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {subcategories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setPage(1); }}
            className={`px-4 py-1.5 text-xs font-semibold tracking-wider border transition-colors ${
              activeCategory === cat
                ? "bg-gold text-white border-gold"
                : "bg-white dark:bg-transparent text-charcoal dark:text-white border-border hover:border-gold hover:text-gold"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Advanced Filters Panel */}
      {filtersOpen && (
        <div className="border border-border p-5 mb-6 bg-ivory dark:bg-charcoal-light rounded-sm">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-sm">Advanced Filters</h3>
            <button onClick={() => setFiltersOpen(false)} className="text-muted hover:text-charcoal"><X size={16} /></button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gender */}
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-gold mb-3">Gender</p>
              <div className="flex flex-wrap gap-2">
                {genders.map(g => (
                  <button key={g} onClick={() => { setActiveGender(g); setPage(1); }}
                    className={`px-3 py-1 text-xs border rounded-sm transition-colors ${activeGender === g ? "bg-gold text-white border-gold" : "border-border hover:border-gold hover:text-gold"}`}>
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-gold mb-3">Material</p>
              <div className="flex flex-wrap gap-2">
                {materials.map(m => (
                  <button key={m} onClick={() => { setActiveMaterial(m); setPage(1); }}
                    className={`px-3 py-1 text-xs border rounded-sm transition-colors ${activeMaterial === m ? "bg-gold text-white border-gold" : "border-border hover:border-gold hover:text-gold"}`}>
                    {m === "All Materials" ? "All" : m}
                  </button>
                ))}
              </div>
            </div>

            {/* Collections */}
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-gold mb-3">Collection</p>
              <div className="flex flex-wrap gap-2">
                {collections.map(c => (
                  <button key={c} onClick={() => { setActiveCollection(c); setPage(1); }}
                    className={`px-3 py-1 text-xs border rounded-sm transition-colors ${activeCollection === c ? "bg-gold text-white border-gold" : "border-border hover:border-gold hover:text-gold"}`}>
                    {c === "All Collections" ? "All" : c}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-gold mb-3">Price Range</p>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  className="w-24 border border-border px-2 py-1.5 text-xs outline-none focus:border-gold dark:bg-transparent dark:text-white"
                  placeholder="Min ₹"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                />
                <span className="text-muted text-xs">—</span>
                <input
                  type="number"
                  className="w-24 border border-border px-2 py-1.5 text-xs outline-none focus:border-gold dark:bg-transparent dark:text-white"
                  placeholder="Max ₹"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                />
                <button onClick={() => setPriceRange([0, 10000])} className="text-xs text-gold hover:underline">Reset</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      {paginated.length === 0 ? (
        <div className="text-center py-20 text-muted">
          <p className="text-lg mb-2">No products found.</p>
          <p className="text-sm mb-5">Try different search terms or adjust your filters.</p>
          <button onClick={clearAll} className="text-gold text-sm hover:underline">Clear All Filters</button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {paginated.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-10">
          <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-4 py-2 border border-border text-sm disabled:opacity-40 hover:border-gold hover:text-gold transition-colors">Prev</button>
          {Array.from({ length: Math.min(totalPages, 8) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-9 h-9 text-sm border transition-colors ${page === i + 1 ? "bg-gold text-white border-gold" : "border-border hover:border-gold hover:text-gold"}`}
            >
              {i + 1}
            </button>
          ))}
          <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="px-4 py-2 border border-border text-sm disabled:opacity-40 hover:border-gold hover:text-gold transition-colors">Next</button>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted">Loading...</div>}>
      <ShopPageInner />
    </Suspense>
  );
}
