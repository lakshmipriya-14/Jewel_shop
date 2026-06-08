"use client";
import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { ensureStoredUser } from "@/lib/auth";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("returnTo") || "/account";
  const reason = searchParams.get("reason") || "";
  const registerUrl = returnTo === "/account" ? "/auth/register" : `/auth/register?returnTo=${returnTo}`;
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    const trimmedEmail = email.trim();
    ensureStoredUser(trimmedEmail);
    localStorage.setItem("venus_logged_in", "true");
    localStorage.setItem("venus_user_email", trimmedEmail);
    globalThis.dispatchEvent(new Event("venus-auth-change"));
    router.push(decodeURIComponent(returnTo));
  };

  return (
    <div className="min-h-screen bg-ivory dark:bg-charcoal flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center gap-2">
            <Image src="/logo-new.jpeg" alt="Venus Silver" width={64} height={64} className="rounded-full border-2 border-gold" />
            <div className="font-serif font-bold text-xl text-charcoal dark:text-white tracking-wider">
              VENUS <span className="text-gold">SILVER</span>
            </div>
          </Link>
          <h2 className="font-serif text-2xl text-charcoal dark:text-white mt-6 mb-1">Welcome Back</h2>
          <p className="text-muted text-sm">Sign in to your account to continue</p>
          {returnTo !== "/account" && (
            <p className="text-xs text-gold mt-2 bg-gold/10 px-3 py-1.5 rounded-sm">
              {reason.toLowerCase().includes("checkout") || reason.toLowerCase().includes("place order") || reason.toLowerCase().includes("payment") || returnTo === "/checkout"
                ? "Please sign in to continue with your purchase."
                : "Please log in to complete your action"}
            </p>
          )}
        </div>
        <div className="luxury-card dark:bg-charcoal-light dark:border-white/10 p-8">
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="space-y-5">
            <div>
              <label htmlFor="loginEmail" className="block text-xs font-semibold text-charcoal dark:text-white tracking-wide mb-1.5 uppercase">Email Address</label>
              <input
                id="loginEmail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-border dark:border-white/20 px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-ivory dark:bg-charcoal dark:text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="loginPassword" className="block text-xs font-semibold text-charcoal dark:text-white tracking-wide mb-1.5 uppercase">Password</label>
              <div className="relative">
                <input
                  id="loginPassword"
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  className="w-full border border-border dark:border-white/20 px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-ivory dark:bg-charcoal dark:text-white pr-10"
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-charcoal dark:hover:text-white">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <Link href="/auth/forgot-password" className="text-xs text-gold hover:underline">Forgot password?</Link>
            </div>
            <button onClick={handleLogin} className="w-full btn-gold py-4">Sign In</button>
            <div className="relative text-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
              <span className="relative bg-white dark:bg-charcoal-light px-3 text-xs text-muted">OR</span>
            </div>
            <p className="text-center text-sm text-muted">
              Don&apos;t have an account?{" "}
              <Link href={registerUrl} className="text-gold hover:underline font-medium">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
