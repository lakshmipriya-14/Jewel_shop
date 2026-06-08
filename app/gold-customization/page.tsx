"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { CheckCircle, Upload, Phone, Mail, Pencil, Wrench, Package, Truck } from "lucide-react";

const steps = [
  { icon: Pencil, title: "Submit Design", desc: "Share your vision with us" },
  { icon: Phone, title: "Consultation", desc: "Our expert will guide you" },
  { icon: CheckCircle, title: "Approval", desc: "Review and confirm design" },
  { icon: Wrench, title: "Crafting", desc: "Master artisans bring it to life" },
  { icon: Truck, title: "Delivery", desc: "Securely delivered to you" },
];

const jewelleryTypes = ["Ring", "Necklace / Chain", "Earrings", "Bracelet", "Anklet", "Pendant", "Bangle", "Mangalsutra", "Other"];

export default function GoldCustomizationPage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    const loggedIn = localStorage.getItem("venus_logged_in") === "true";
    if (!loggedIn) {
      router.push("/auth/login?returnTo=%2Fgold-customization");
    }
  }, [router]);
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "", description: "" });
  const [fileName, setFileName] = useState<string | null>(null);

  const handleField = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <CheckCircle size={72} className="text-green-500 mx-auto mb-6" />
        <h2 className="font-serif text-3xl text-charcoal mb-3">Request Submitted!</h2>
        <p className="text-muted mb-2">Thank you, {form.name}! Our team will call you within 24 hours to discuss your custom jewellery.</p>
        <p className="text-gold font-semibold">Reference ID: #CU{Math.floor(Math.random() * 90000 + 10000)}</p>
        <Link href="/" className="btn-gold inline-block mt-8">Back to Home</Link>

      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <div className="relative h-72 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1400&q=80" alt="Gold Customization" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-3">Bespoke Craftsmanship</p>
            <h1 className="font-serif text-5xl font-bold mb-3">Custom Jewellery</h1>
            <p className="text-white/70 text-lg">Your dream piece, crafted by master artisans in Madurai</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Process Steps */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-2">How It Works</h2>
          <div className="gold-line" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-3">
                <step.icon size={22} className="text-gold" />
              </div>
              <div className="text-gold text-xs font-bold mb-1">STEP {i + 1}</div>
              <p className="font-semibold text-charcoal text-sm">{step.title}</p>
              <p className="text-muted text-xs mt-1">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-title mb-2">Start Your Design</h2>
            <div className="gold-line" />
            <p className="text-muted text-sm mt-3">Fill in the form below and our team will reach out within 24 hours</p>
          </div>
          <div className="luxury-card p-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5 uppercase">Full Name *</label>
                <input
                  required
                  className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-ivory"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => handleField("name", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5 uppercase">Phone Number *</label>
                <input
                  required
                  className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-ivory"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={(e) => handleField("phone", e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5 uppercase">Email Address *</label>
              <input
                required
                type="email"
                className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-ivory"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => handleField("email", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5 uppercase">Jewellery Type *</label>
              <select
                className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-ivory"
                value={form.type}
                onChange={(e) => handleField("type", e.target.value)}
              >
                <option value="">Select jewellery type</option>
                {jewelleryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5 uppercase">Design Description *</label>
              <textarea
                rows={4}
                className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-ivory resize-none"
                placeholder="Describe your design idea, preferred metal, stone preferences, style inspiration..."
                value={form.description}
                onChange={(e) => handleField("description", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5 uppercase">Reference Image (Optional)</label>
              <label className="flex items-center gap-3 border border-dashed border-border p-4 cursor-pointer hover:border-gold transition-colors bg-ivory">
                <Upload size={20} className="text-gold" />
                <div>
                  <p className="text-sm text-charcoal">{fileName || "Upload reference image"}</p>
                  <p className="text-xs text-muted">PNG, JPG, JPEG up to 10MB</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
                />
              </label>
            </div>
            <button
              onClick={() => form.name && form.phone && form.email && form.type && form.description && setSubmitted(true)}
              className="w-full btn-gold py-4 text-base"
            >
              Submit Design Request
            </button>
        <p className="text-xs text-muted text-center">
              We&apos;ll contact you within 24 hours. Questions? Call <a href="tel:+917338834666" className="text-gold">+91 7338834666</a>
            </p>


          </div>
        </div>
      </div>
    </div>
  );
}
