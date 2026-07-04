import clsx from 'clsx'

/**
 * Thin wrapper around clsx so every component imports class-merging
 * logic from one place. Keeps the door open to swap in tailwind-merge
 * later without touching call sites.
 */
export function cn(...inputs) {
  return clsx(...inputs)
}
