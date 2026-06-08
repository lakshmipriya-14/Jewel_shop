"use client";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const discount = couponApplied ? Math.round(total * 0.1) : 0;
  const shipping = total >= 2000 ? 0 : 99;
  const finalTotal = total - discount + shipping;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <ShoppingBag size={64} className="text-border mx-auto mb-6" />
        <h2 className="font-serif text-3xl text-charcoal mb-3">Your Cart is Empty</h2>
        <p className="text-muted mb-8">Looks like you haven&apos;t added any jewellery yet.</p>

        <Link href="/shop" className="btn-gold inline-block">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl text-charcoal mb-2">Shopping Cart</h1>
      <p className="text-muted text-sm mb-8">{items.length} item{items.length !== 1 ? "s" : ""}</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={`${item.product.id}-${item.size}`} className="flex gap-4 p-4 luxury-card">
              <div className="relative w-24 h-24 flex-shrink-0 bg-ivory">
                <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="96px" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-gold tracking-widest">{item.product.subcategory}</p>
                <h3 className="font-medium text-charcoal text-sm">{item.product.name}</h3>
                {item.size && <p className="text-xs text-muted mt-0.5">Size: {item.size}</p>}
                <p className="text-xs text-muted">{item.product.purity} · {item.product.weight}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-border">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center hover:bg-ivory">
                      <Minus size={12} />
                    </button>
                    <span className="w-10 text-center text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-ivory">
                      <Plus size={12} />
                    </button>
                  </div>
                  <span className="font-semibold text-charcoal">{formatPrice(item.product.price * item.quantity)}</span>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.product.id)} className="text-muted hover:text-red-500 transition-colors self-start">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="luxury-card p-6 h-fit">
          <h3 className="font-serif text-xl text-charcoal mb-5">Order Summary</h3>

          {/* Coupon */}
          <div className="flex gap-2 mb-5">
            <div className="flex-1 flex items-center border border-border overflow-hidden">
              <Tag size={14} className="ml-3 text-muted" />
              <input
                className="flex-1 px-3 py-2 text-sm outline-none"
                placeholder="Coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
            </div>
            <button
              onClick={() => coupon && setCouponApplied(true)}
              className="px-4 py-2 bg-charcoal text-white text-xs font-semibold hover:bg-gold transition-colors"
            >
              APPLY
            </button>
          </div>
          {couponApplied && <p className="text-green-600 text-xs mb-4">✓ Coupon applied! 10% discount</p>}

          <div className="space-y-3 mb-5 text-sm">
            <div className="flex justify-between text-muted">
              <span>Subtotal</span><span>{formatPrice(total)}</span>
            </div>
            {couponApplied && (
              <div className="flex justify-between text-green-600">
                <span>Discount (10%)</span><span>−{formatPrice(discount)}</span>
              </div>
            )}
            <div className="flex justify-between text-muted">
              <span>Shipping</span>
              <span>{shipping === 0 ? <span className="text-green-600">FREE</span> : formatPrice(shipping)}</span>
            </div>
            {shipping > 0 && <p className="text-xs text-muted">Add {formatPrice(2000 - total)} more for free shipping</p>}
          </div>

          <div className="border-t border-border pt-4 mb-6">
            <div className="flex justify-between font-bold text-charcoal">
              <span>Total</span>
              <span className="text-xl font-serif">{formatPrice(finalTotal)}</span>
            </div>
            <p className="text-xs text-muted mt-1">Inclusive of all taxes</p>
          </div>

          <Link href="/checkout" className="w-full btn-gold flex items-center justify-center gap-2">
            Proceed to Checkout <ArrowRight size={16} />
          </Link>
          <Link href="/shop" className="w-full mt-3 btn-outline-gold flex items-center justify-center text-sm">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
