"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Package, Heart, Settings, LogOut } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/components/CartProvider";
import { allProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { loadStoredUser, formatMemberSince, type StoredUser } from "@/lib/auth";
import { mockOrders as accountMockOrders } from "@/data/orders";

const tabs = [
  { id: "profile", label: "My Profile", icon: User },
  { id: "orders", label: "My Orders", icon: Package },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "settings", label: "Settings", icon: Settings },
];



const statusColors: Record<string, string> = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [user, setUser] = useState<StoredUser | null>(null);
  const router = useRouter();
  const { wishlist } = useCart();

  useEffect(() => {
    const urlTab = new URLSearchParams(globalThis.location.search).get("tab");
    if (urlTab) setActiveTab(urlTab);
    setUser(loadStoredUser());
  }, []);

  const wishlistProducts = allProducts.filter((p) => wishlist.includes(p.id));

  const handleSignOut = () => {
    // Clear all auth state
    localStorage.removeItem("venus_logged_in");
    localStorage.removeItem("venus_user");
    localStorage.removeItem("venus_user_email");
    localStorage.removeItem("venus_return_to");
    globalThis.dispatchEvent(new Event("venus-auth-change"));
    // Also clear session storage if used
    sessionStorage.clear();
    // Redirect to home
    router.push("/");
    router.refresh();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="font-serif text-3xl" style={{ color: "var(--ink)" }}>My Account</h1>
        <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>Manage your profile, orders and wishlist</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="luxury-card p-4 h-fit">
          <div className="text-center p-4 mb-4" style={{ borderBottom: "1px solid var(--border)" }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2" style={{ background: "rgba(192,149,46,0.12)", border: "2px solid var(--gold)" }}>
              <User size={28} style={{ color: "var(--gold)" }} />
            </div>
            <p className="font-semibold" style={{ color: "var(--ink)" }}>
              {user?.firstName || user?.lastName ? `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() : "Guest User"}
            </p>
            {user?.createdAt ? (
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                Member since {formatMemberSince(user.createdAt)}
              </p>
            ) : (
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                Member since —
              </p>
            )}
          </div>
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm transition-colors"
                style={{
                  background: activeTab === tab.id ? "var(--gold)" : "transparent",
                  color: activeTab === tab.id ? "#fff" : "var(--ink)",
                }}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm transition-colors"
              style={{ color: "#ef4444" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#fef2f2")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <LogOut size={16} /> Sign Out
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          {activeTab === "profile" && (
            <div className="luxury-card p-6">
              <h2 className="font-serif text-xl mb-6" style={{ color: "var(--ink)" }}>Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { label: "First Name", value: user?.firstName ?? "Guest" },
                  { label: "Last Name", value: user?.lastName ?? "User" },
                  { label: "Email", value: user?.email ?? "guest@example.com" },
                  { label: "Phone", value: user?.phone ?? "+91 XXXXX XXXXX" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-xs font-semibold tracking-wide mb-1.5 uppercase" style={{ color: "var(--ink)" }}>{field.label}</label>
                    <input
                      style={{ width: "100%", border: "1px solid var(--border)", padding: "12px 16px", fontSize: "0.9rem", outline: "none", background: "var(--ivory)", color: "var(--ink)" }}
                      defaultValue={field.value}
                    />
                  </div>
                ))}
              </div>
              <button className="btn-gold mt-6">Save Changes</button>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="luxury-card p-6">
              <h2 className="font-serif text-xl mb-6" style={{ color: "var(--ink)" }}>My Orders</h2>
              <div className="space-y-4">
                {accountMockOrders.map((order) => (

                  <div key={order.id} style={{ border: "1px solid var(--border)", padding: 16, borderRadius: 4 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <div>
                        <p className="font-semibold text-sm" style={{ color: "var(--ink)" }}>Order #{order.id}</p>
                        <p className="text-xs" style={{ color: "var(--muted)" }}>{order.date} · {order.items.length} item{order.items.length > 1 ? "s" : ""}</p>

                      </div>
                      <div className="text-right">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[order.status] || "bg-gray-100 text-gray-700"}`}>
                          {order.status}
                        </span>
                        <p className="font-semibold mt-1" style={{ color: "var(--ink)" }}>{formatPrice(order.total)}</p>
                      </div>
                    </div>
                    <Link
                      href={`/account/orders/${order.id}`}
                      className="text-xs hover:underline"
                      style={{ color: "var(--gold)" }}
                    >
                      View Details →
                    </Link>

                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "wishlist" && (
            <div>
              <h2 className="font-serif text-xl mb-6" style={{ color: "var(--ink)" }}>My Wishlist ({wishlistProducts.length})</h2>
              {wishlistProducts.length === 0 ? (
                <div className="luxury-card p-12 text-center" style={{ color: "var(--muted)" }}>
                  <Heart size={48} className="mx-auto mb-3" style={{ color: "var(--border)" }} />
                  <p>Your wishlist is empty</p>
                  <Link href="/shop" className="btn-outline-gold inline-block mt-4 text-sm">Browse Jewellery</Link>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  {wishlistProducts.map((p) => <ProductCard key={p.id} product={p} />)}
                </div>
              )}
            </div>
          )}

          {activeTab === "settings" && (
            <div className="luxury-card p-6 space-y-6">
              <h2 className="font-serif text-xl mb-6" style={{ color: "var(--ink)" }}>Account Settings</h2>
              <div>
                <h3 className="font-semibold text-sm mb-3" style={{ color: "var(--ink)" }}>Change Password</h3>
                <div className="space-y-3">
                  {["Current Password", "New Password", "Confirm New Password"].map((label) => (
                    <div key={label}>
                      <label className="block text-xs font-semibold tracking-wide mb-1.5 uppercase" style={{ color: "var(--ink)" }}>{label}</label>
                      <input type="password" style={{ width: "100%", border: "1px solid var(--border)", padding: "12px 16px", fontSize: "0.9rem", outline: "none", background: "var(--ivory)", color: "var(--ink)" }} placeholder="••••••••" />
                    </div>
                  ))}
                  <button className="btn-gold">Update Password</button>
                </div>
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24 }}>
                <h3 className="font-semibold text-sm mb-3" style={{ color: "var(--ink)" }}>Notifications</h3>
                {["Order updates", "New arrivals", "Exclusive offers", "Wishlist reminders"].map((item) => (
                  <label key={item} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", cursor: "pointer" }}>
                    <input type="checkbox" defaultChecked className="accent-gold" />
                    <span className="text-sm" style={{ color: "var(--ink)" }}>{item}</span>
                  </label>
                ))}
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24 }}>
                <h3 className="font-semibold text-sm mb-3" style={{ color: "#ef4444" }}>Danger Zone</h3>
                <button
                  onClick={handleSignOut}
                  style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "#fef2f2", color: "#ef4444", border: "1px solid #fecaca", borderRadius: 4, fontWeight: 600, fontSize: "0.9rem", cursor: "pointer" }}
                >
                  <LogOut size={16} /> Sign Out of Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
