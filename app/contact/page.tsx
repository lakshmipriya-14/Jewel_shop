"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const handleField = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div>
      {/* Hero */}
      <div className="bg-ivory border-b border-border py-16 text-center">
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">Get in Touch</p>
        <h1 className="font-serif text-4xl text-charcoal mb-3">Contact Us</h1>
        <div className="h-0.5 w-12 bg-gold mx-auto" />
        <p className="text-muted mt-4 max-w-md mx-auto">We&apos;d love to hear from you. Reach out with any questions, custom orders, or feedback.</p>

      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div className="luxury-card p-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal text-sm mb-1">Our Store</h3>
                  <p className="text-muted text-sm leading-relaxed">59E, Ramalinga Nagar,<br />Anaiyar, Madurai – 625017<br />Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            <div className="luxury-card p-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal text-sm mb-1">Phone</h3>
                  <a href="tel:+917338834666" className="text-muted text-sm hover:text-gold block">+91 7338834666</a>
                  <a href="https://wa.me/917338834666" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 mt-2 text-green-600 text-xs hover:underline">
                    <MessageCircle size={14} /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <div className="luxury-card p-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal text-sm mb-1">Email</h3>
                  <a href="mailto:admin@venussilver.in" className="text-muted text-sm hover:text-gold block">admin@venussilver.in</a>
                  <a href="mailto:Venus999silver@gmail.com" className="text-muted text-sm hover:text-gold block">Venus999silver@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="luxury-card p-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal text-sm mb-1">Business Hours</h3>
                  <div className="text-sm text-muted space-y-0.5">
                    <div className="flex justify-between gap-8">
                      <span>Mon – Sat</span><span>10AM – 8PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sunday</span><span>11AM – 6PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 luxury-card p-8">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-charcoal mb-2">Message Sent!</h3>
                <p className="text-muted">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>

                <button onClick={() => setSubmitted(false)} className="btn-outline-gold mt-6">Send Another Message</button>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-2xl text-charcoal mb-6">Send Us a Message</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { key: "name", label: "Full Name", placeholder: "Your name" },
                    { key: "phone", label: "Phone Number", placeholder: "+91 XXXXX XXXXX" },
                    { key: "email", label: "Email Address", placeholder: "your@email.com", full: false },
                    { key: "subject", label: "Subject", placeholder: "How can we help?" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5 uppercase">{field.label}</label>
                      <input
                        className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-ivory"
                        placeholder={field.placeholder}
                        value={(form as Record<string, string>)[field.key]}
                        onChange={(e) => handleField(field.key, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <label className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5 uppercase">Message</label>
                  <textarea
                    rows={5}
                    className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-ivory resize-none"
                    placeholder="Tell us about your enquiry, custom design ideas, or any questions..."
                    value={form.message}
                    onChange={(e) => handleField("message", e.target.value)}
                  />
                </div>
                <button
                  onClick={() => form.name && form.email && form.message && setSubmitted(true)}
                  className="btn-gold mt-6 w-full md:w-auto px-12"
                >
                  Send Message
                </button>
              </>
            )}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 h-64 bg-ivory border border-border flex items-center justify-center rounded-sm overflow-hidden">
          <div className="text-center">
            <MapPin size={40} className="text-gold mx-auto mb-3" />
            <p className="font-semibold text-charcoal">59E, Ramalinga Nagar, Anaiyar, Madurai – 625017</p>
            <a
              href="https://maps.google.com/?q=Madurai+Tamil+Nadu+India"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold text-sm hover:underline mt-2 inline-block"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
