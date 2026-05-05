import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefixes an asset path with Vite's BASE_URL so it works under any
 * deployment base (e.g. "/phyneo/" on GitHub Pages).
 * Accepts paths with or without a leading slash.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const rel = path.replace(/^\/+/, "");
  return `${base}/${rel}`;
}
