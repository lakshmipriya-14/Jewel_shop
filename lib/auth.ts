export interface StoredUser {
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  createdAt?: string;
}

const USER_KEY = "venus_user";

export function loadStoredUser(): StoredUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as StoredUser) : null;
  } catch {
    return null;
  }
}

export function saveStoredUser(user: StoredUser) {
  if (typeof window === "undefined") return;
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function ensureStoredUser(email: string): StoredUser {
  const existing = loadStoredUser();
  if (existing && existing.email === email) {
    return existing;
  }

  const next: StoredUser = {
    ...(existing ?? {}),
    email,
    createdAt: existing?.createdAt ?? new Date().toISOString(),
  };
  saveStoredUser(next);
  return next;
}

export function getDisplayName(user: StoredUser | null): string {
  if (!user) return "Account";
  if (user.firstName && user.lastName) return `${user.firstName} ${user.lastName}`;
  if (user.firstName) return user.firstName;
  if (user.email) return user.email.split("@")[0];
  return "Account";
}

export function formatMemberSince(createdAt?: string): string | null {
  if (!createdAt) return null;
  try {
    const date = new Date(createdAt);
    if (Number.isNaN(date.getTime())) return null;
    return new Intl.DateTimeFormat("en-IN", { month: "long", year: "numeric" }).format(date);
  } catch {
    return null;
  }
}
