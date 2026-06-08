"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/utils";
import { CreditCard, Smartphone, Building2, CheckCircle } from "lucide-react";
import Link from "next/link";


const paymentMethods = [
  { id: "card", label: "Credit / Debit Card", icon: CreditCard },
  { id: "upi", label: "UPI", icon: Smartphone },
  { id: "netbanking", label: "Net Banking", icon: Building2 },
];

export default function CheckoutPage() {
  const router = useRouter();
  
  useEffect(() => {
    const loggedIn = localStorage.getItem("venus_logged_in") === "true";
    if (!loggedIn) {
      router.push("/auth/login?returnTo=%2Fcheckout");
    }
  }, [router]);
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState<"shipping" | "payment" | "success">("shipping");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [form, setForm] = useState({ name: "", phone: "", email: "", line1: "", line2: "", city: "", state: "", pincode: "" });

  const shipping = total >= 2000 ? 0 : 99;
  const finalTotal = total + shipping;

  const handleField = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  if (step === "success") {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <CheckCircle size={72} className="text-green-500 mx-auto mb-6" />
        <h2 className="font-serif text-3xl text-charcoal mb-3">Order Placed!</h2>
        <p className="text-muted mb-2">Thank you for your order. We&apos;ll send a confirmation to your email.</p>

        <p className="text-gold font-semibold text-lg mb-8">Order #VS{Math.floor(Math.random() * 90000 + 10000)}</p>
        <Link href="/" className="btn-gold inline-block">Back to Home</Link>


      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl text-charcoal mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          {step === "shipping" && (
            <div className="luxury-card p-6">
              <h2 className="font-serif text-xl text-charcoal mb-6">Shipping Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { key: "name", label: "Full Name", placeholder: "Your name" },
                  { key: "phone", label: "Phone Number", placeholder: "+91 XXXXX XXXXX" },
                  { key: "email", label: "Email Address", placeholder: "email@example.com" },
                  { key: "line1", label: "Address Line 1", placeholder: "House/Flat No., Street" },
                  { key: "line2", label: "Address Line 2 (Optional)", placeholder: "Landmark, Area" },
                  { key: "city", label: "City", placeholder: "City" },
                  { key: "state", label: "State", placeholder: "State" },
                  { key: "pincode", label: "Pincode", placeholder: "6 digit pincode" },
                ].map((field) => (
                  <div key={field.key} className={field.key === "line1" || field.key === "line2" ? "md:col-span-2" : ""}>
                    <label className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5 uppercase">{field.label}</label>
                    <input
                      className="w-full border border-border px-4 py-2.5 text-sm outline-none focus:border-gold transition-colors bg-ivory"
                      placeholder={field.placeholder}
                      value={(form as Record<string, string>)[field.key]}
                      onChange={(e) => handleField(field.key, e.target.value)}
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={() => setStep("payment")}
                className="mt-6 w-full btn-gold"
              >
                Continue to Payment
              </button>
            </div>
          )}

          {step === "payment" && (
            <div className="luxury-card p-6">
              <button onClick={() => setStep("shipping")} className="text-xs text-gold hover:underline mb-4 block">← Back to Shipping</button>
              <h2 className="font-serif text-xl text-charcoal mb-6">Payment Method</h2>
              <div className="space-y-3 mb-6">
                {paymentMethods.map((pm) => (
                  <label key={pm.id} className={`flex items-center gap-3 p-4 border cursor-pointer transition-colors ${paymentMethod === pm.id ? "border-gold bg-gold/5" : "border-border hover:border-gold/50"}`}>
                    <input
                      type="radio"
                      value={pm.id}
                      checked={paymentMethod === pm.id}
                      onChange={() => setPaymentMethod(pm.id)}
                      className="accent-gold"
                    />
                    <pm.icon size={18} className="text-gold" />
                    <span className="text-sm font-medium text-charcoal">{pm.label}</span>
                  </label>
                ))}
              </div>
              {paymentMethod === "card" && (
                <div className="space-y-4 mb-6 p-4 bg-ivory border border-border">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5">CARD NUMBER</label>
                    <input className="w-full border border-border px-4 py-2.5 text-sm outline-none focus:border-gold" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5">EXPIRY DATE</label>
                      <input className="w-full border border-border px-4 py-2.5 text-sm outline-none focus:border-gold" placeholder="MM / YY" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5">CVV</label>
                      <input className="w-full border border-border px-4 py-2.5 text-sm outline-none focus:border-gold" placeholder="***" type="password" />
                    </div>
                  </div>
                </div>
              )}
              {paymentMethod === "upi" && (
                <div className="mb-6 p-4 bg-ivory border border-border">
                  <label className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5">UPI ID</label>
                  <input className="w-full border border-border px-4 py-2.5 text-sm outline-none focus:border-gold" placeholder="yourname@upi" />
                </div>
              )}
              <button
                onClick={() => { clearCart(); setStep("success"); }}
                className="w-full btn-gold"
              >
                Place Order — {formatPrice(finalTotal)}
              </button>
              <p className="text-xs text-muted text-center mt-3 flex items-center justify-center gap-1">
                🔒 Your payment is 100% secure and encrypted
              </p>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="luxury-card p-6 h-fit">
          <h3 className="font-serif text-xl text-charcoal mb-4">Your Order</h3>
          <div className="space-y-3 mb-5 max-h-64 overflow-y-auto">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-3 items-start">
                <div className="relative w-14 h-14 flex-shrink-0 bg-ivory border border-border">
                  <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="56px" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-gold text-white rounded-full text-[10px] flex items-center justify-center font-bold">{item.quantity}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-charcoal truncate">{item.product.name}</p>
                  {item.size && <p className="text-xs text-muted">Size: {item.size}</p>}
                </div>
                <span className="text-sm font-semibold text-charcoal">{formatPrice(item.product.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-4 space-y-2 text-sm">
            <div className="flex justify-between text-muted"><span>Subtotal</span><span>{formatPrice(total)}</span></div>
            <div className="flex justify-between text-muted"><span>Shipping</span><span>{shipping === 0 ? <span className="text-green-600">FREE</span> : formatPrice(shipping)}</span></div>
            <div className="flex justify-between font-bold text-charcoal text-base pt-2 border-t border-border">
              <span>Total</span><span className="text-gold">{formatPrice(finalTotal)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
