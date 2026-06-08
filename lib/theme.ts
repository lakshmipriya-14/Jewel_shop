export type Theme = "light" | "dark";

export const THEME_KEY = "venusSilverTheme";

export function getSavedTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(THEME_KEY);
  if (v === "light" || v === "dark") return v;
  return null;
}

export function saveTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(THEME_KEY, theme);
}

