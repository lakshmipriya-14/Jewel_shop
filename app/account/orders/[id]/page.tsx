import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { formatPrice } from "@/lib/utils";
import { getOrderById } from "@/data/orders";

export const metadata: Metadata = {
  title: "Order Details — Venus Silver",
};

export default async function OrderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = getOrderById(id);
  if (!order) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-serif text-3xl" style={{ color: "var(--ink)" }}>
            Order Details
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
            Manage and track your purchase
          </p>
        </div>

        <Link href="/account?tab=orders" className="btn-outline-gold text-sm">
          ← Back to Orders
        </Link>
      </div>

      <div className="luxury-card p-6 md:p-8 space-y-6">
        {/* Order Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--muted)" }}>
              Order ID
            </p>
            <p className="font-semibold" style={{ color: "var(--ink)" }}>
              {order.id}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--muted)" }}>
              Order Date
            </p>
            <p className="font-semibold" style={{ color: "var(--ink)" }}>
              {order.date}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--muted)" }}>
              Order Status
            </p>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: order.status === "Delivered" ? "rgba(16,185,129,0.15)" : "rgba(59,130,246,0.15)",
                color: order.status === "Delivered" ? "#059669" : "#2563eb",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              {order.status}
            </span>
          </div>
        </div>

        {/* Items */}
        <div>
          <h2 className="font-serif text-xl" style={{ color: "var(--ink)" }}>
            Products
          </h2>
          <div className="mt-4 space-y-4">
            {order.items.map((item, idx) => (
              <div
                key={`${item.productId}-${idx}`}
                className="flex items-center gap-4"
                style={{ border: "1px solid var(--border)", borderRadius: 8, padding: 12 }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 8,
                    overflow: "hidden",
                    flexShrink: 0,
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <Image src={item.productImage} alt={item.productName} width={72} height={72} style={{ objectFit: "cover" }} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold" style={{ color: "var(--ink)" }}>
                    {item.productName}
                  </p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    Quantity: <span className="font-semibold">{item.quantity}</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs" style={{ color: "var(--muted)" }}>Price</p>
                  <p className="font-semibold" style={{ color: "var(--ink)" }}>
                    {formatPrice(item.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping + Payment + Delivery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="font-serif text-xl mb-3" style={{ color: "var(--ink)" }}>
              Shipping Address
            </h2>
            <div
              style={{ border: "1px solid var(--border)", borderRadius: 8, padding: 16 }}
              className="space-y-2"
            >
              <p className="font-semibold" style={{ color: "var(--ink)" }}>{order.shippingAddress.name}</p>
              <p style={{ color: "var(--muted)" }} className="text-sm">
                {order.shippingAddress.addressLine1}
                {order.shippingAddress.addressLine2 ? `, ${order.shippingAddress.addressLine2}` : ""}
              </p>
              <p style={{ color: "var(--muted)" }} className="text-sm">
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.pincode}
              </p>
              <p style={{ color: "var(--muted)" }} className="text-sm">
                Phone: <span className="font-semibold" style={{ color: "var(--ink)" }}>{order.shippingAddress.phone}</span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl mb-3" style={{ color: "var(--ink)" }}>
              Payment Method
            </h2>
            <div style={{ border: "1px solid var(--border)", borderRadius: 8, padding: 16 }}>
              <p style={{ color: "var(--muted)" }} className="text-sm">{order.paymentMethod}</p>
              <p style={{ color: "var(--muted)" }} className="text-xs mt-3">Total</p>
              <p className="font-semibold" style={{ color: "var(--ink)" }}>
                {formatPrice(order.total)}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-xl mb-3" style={{ color: "var(--ink)" }}>
            Estimated Delivery
          </h2>
          <div style={{ border: "1px solid var(--border)", borderRadius: 8, padding: 16 }}>
            <p className="font-semibold" style={{ color: "var(--ink)" }}>{order.estimatedDelivery}</p>
            <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
              You’ll receive updates as your order moves through processing and dispatch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

