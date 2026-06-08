"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuthGuard(redirectTo?: string) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem("venus_logged_in") === "true";
    setIsLoggedIn(loggedIn);
    if (!loggedIn && redirectTo) {
      const returnUrl = encodeURIComponent(redirectTo);
      router.push(`/auth/login?returnTo=${returnUrl}`);
    }
  }, [redirectTo, router]);

  return { isLoggedIn };
}

export function requireAuth(action: string, currentPath: string, router: any): boolean {
  if (typeof window === "undefined") return false;
  const loggedIn = localStorage.getItem("venus_logged_in") === "true";
  if (!loggedIn) {
    const returnUrl = encodeURIComponent(currentPath);
    // keep returnUrl param; we also pass a hint so login can show the correct message
    router.push(`/auth/login?returnTo=${returnUrl}&reason=${encodeURIComponent(action)}`);
    return false;
  }
  return true;
}



