"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { loadStoredUser, saveStoredUser } from "@/lib/auth";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}


export default function RegisterPage() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    accepted: false,
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedEmail = form.email.trim();
    const normalizedEmail = trimmedEmail.toLowerCase();
    if (!form.firstName.trim() || !form.lastName.trim() || !form.phone.trim() || !trimmedEmail || !form.password) {

      setStatus("error");
      setMessage("Please complete all required fields.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    // Prevent duplicate registrations — check ALL registered emails (case-insensitive + trimmed)
    const registeredEmailsRaw = localStorage.getItem("venus_registered_emails");
    const registeredEmails: string[] = registeredEmailsRaw ? JSON.parse(registeredEmailsRaw) : [];
    // Also check current stored user for backwards compatibility
    const existingUser = loadStoredUser();
    const existingUserEmail = existingUser?.email?.trim()?.toLowerCase();
    const allRegisteredEmails = existingUserEmail
      ? [...new Set([...registeredEmails, existingUserEmail])]
      : registeredEmails;

    if (allRegisteredEmails.includes(normalizedEmail)) {
      setStatus("error");
      setMessage(
        "This email address is already registered. Please sign in or use a different email."
      );
      return;
    }


    if (form.password.length < 8) {
      setStatus("error");
      setMessage("Password must be at least 8 characters.");
      return;
    }

    if (!form.accepted) {
      setStatus("error");
      setMessage("Please accept the terms of service and privacy policy.");
      return;
    }

    const user = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      phone: form.phone.trim(),
      email: normalizedEmail,
      createdAt: new Date().toISOString(),
    };


    // Save email to registered emails registry (prevents future duplicates)
    const updatedEmails = [...new Set([...allRegisteredEmails, normalizedEmail])];
    localStorage.setItem("venus_registered_emails", JSON.stringify(updatedEmails));

    saveStoredUser(user);
    localStorage.setItem("venus_logged_in", "true");
    localStorage.setItem("venus_user_email", normalizedEmail);

    globalThis.dispatchEvent(new Event("venus-auth-change"));

    setStatus("success");
    setMessage("Account Created Successfully! Welcome to Venus Silver.");

    setTimeout(() => {
      router.push("/account");
    }, 1600);
  };

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
          <h2 className="font-serif text-2xl text-charcoal mt-6 mb-1">Create Account</h2>
          <p className="text-muted text-sm">Join Venus Silver for exclusive offers</p>
        </div>
        <div className="luxury-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {status !== "idle" && (
              <div className={`rounded-md px-4 py-3 text-sm ${status === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                {message}
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5 uppercase">First Name</label>
                <input
                  id="firstName"
                  value={form.firstName}
                  onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))}
                  className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-ivory"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5 uppercase">Last Name</label>
                <input
                  id="lastName"
                  value={form.lastName}
                  onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))}
                  className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-ivory"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5 uppercase">Phone Number</label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-ivory"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5 uppercase">Email Address</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-ivory"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-charcoal tracking-wide mb-1.5 uppercase">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPass ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
                  className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-ivory pr-10"
                  placeholder="Min 8 characters"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-charcoal">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <label htmlFor="accepted" className="flex items-start gap-2 cursor-pointer">
              <input
                id="accepted"
                type="checkbox"
                checked={form.accepted}
                onChange={(e) => setForm((prev) => ({ ...prev, accepted: e.target.checked }))}
                className="accent-gold mt-0.5"
              />
              <span className="text-xs text-muted">
                I agree to the <Link href="/terms-and-conditions" className="text-gold hover:underline">Terms of Service</Link> and <Link href="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>
              </span>
            </label>
            <button type="submit" className="w-full btn-gold py-4">Create Account</button>
            <p className="text-center text-sm text-muted">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-gold hover:underline font-medium">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
