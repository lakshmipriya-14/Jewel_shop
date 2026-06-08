"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-full bg-charcoal flex items-center justify-center">
              <span className="text-gold font-serif font-bold text-2xl">V</span>
            </div>
            <div className="font-serif font-bold text-xl text-charcoal tracking-wider">
              VENUS <span className="text-gold">SILVER</span>
            </div>
          </Link>
        </div>
        <div className="luxury-card p-8">
          {sent ? (
            <div className="text-center">
              <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
              <h2 className="font-serif text-2xl text-charcoal mb-2">Email Sent!</h2>
              <p className="text-muted text-sm mb-6">We&apos;ve sent a password reset link to <strong>{email}</strong></p>

              <Link href="/auth/login" className="btn-gold inline-block">Back to Sign In</Link>
            </div>
          ) : (
            <>
              <h2 className="font-serif text-2xl text-charcoal mb-2">Forgot Password?</h2>
              <p className="text-muted text-sm mb-6">Enter your email and we&apos;ll send you a reset link.</p>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5 uppercase">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-ivory"
                    placeholder="your@email.com"
                  />
                </div>
                <button onClick={() => email && setSent(true)} className="w-full btn-gold py-4">Send Reset Link</button>
                <p className="text-center text-sm text-muted">
                  <Link href="/auth/login" className="text-gold hover:underline">Back to Sign In</Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
