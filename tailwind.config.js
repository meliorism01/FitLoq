/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        emerald: {
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
          950: '#022c22',
        },
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
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
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
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
        },
        warning: {
          50: '#fffbeb',
          500: '#f97316',
          600: '#ea580c',
        },
        danger: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 2px 8px 0 rgba(17, 24, 39, 0.04), 0 1px 2px 0 rgba(17, 24, 39, 0.04)',
        card: '0 4px 16px -2px rgba(17, 24, 39, 0.06), 0 2px 6px -2px rgba(17, 24, 39, 0.04)',
        lift: '0 12px 32px -8px rgba(17, 24, 39, 0.12), 0 4px 12px -4px rgba(17, 24, 39, 0.06)',
        glow: '0 0 0 1px rgba(16, 185, 129, 0.08), 0 8px 24px -4px rgba(16, 185, 129, 0.18)',
        'inner-soft': 'inset 0 1px 2px 0 rgba(17, 24, 39, 0.04)',
      },
      backgroundImage: {
        'gradient-emerald': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'gradient-emerald-blue': 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
        'gradient-mesh': 'radial-gradient(at 20% 20%, rgba(16,185,129,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(59,130,246,0.12) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(16,185,129,0.08) 0px, transparent 50%)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'scale-in': 'scale-in 0.25s ease-out',
        shimmer: 'shimmer 2s infinite linear',
        'pulse-ring': 'pulse-ring 1.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
