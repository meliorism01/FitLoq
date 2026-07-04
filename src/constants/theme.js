// Central design tokens — mirrors tailwind.config.js so JS (charts, inline styles,
// dynamic classnames) can reference the same palette without hardcoding hex values.

export const COLORS = {
  primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  accent: {
    100: '#dbeafe',
    300: '#93c5fd',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  surface: {
    bg: '#f5f7f8',
    card: '#ffffff',
    border: '#e7ebee',
  },
  ink: {
    900: '#111827',
    700: '#374151',
    500: '#6b7280',
    400: '#9ca3af',
    300: '#d1d5db',
  },
  success: '#22c55e',
  warning: '#f97316',
  danger: '#ef4444',
}

export const CHART_COLORS = [
  COLORS.primary[500],
  COLORS.accent[500],
  COLORS.warning,
  COLORS.primary[300],
  COLORS.accent[300],
  COLORS.danger,
]

export const RADIUS = {
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.25rem',
  '2xl': '1.75rem',
  full: '9999px',
}

export const SHADOWS = {
  soft: '0 2px 8px 0 rgba(17, 24, 39, 0.04), 0 1px 2px 0 rgba(17, 24, 39, 0.04)',
  card: '0 4px 16px -2px rgba(17, 24, 39, 0.06), 0 2px 6px -2px rgba(17, 24, 39, 0.04)',
  lift: '0 12px 32px -8px rgba(17, 24, 39, 0.12), 0 4px 12px -4px rgba(17, 24, 39, 0.06)',
}

// Shared Framer Motion presets — imported by components so animation
// feel stays consistent across every module.
export const MOTION = {
  fadeIn: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.96 },
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
  slideUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  stagger: {
    animate: { transition: { staggerChildren: 0.08 } },
  },
  pageTransition: {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}
