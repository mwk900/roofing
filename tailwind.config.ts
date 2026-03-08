import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FAFBFC',
        'bg-secondary': '#F1F3F5',
        'bg-dark': '#1E293B',
        'bg-card': '#FFFFFF',
        accent: '#E67E22',
        'accent-hover': '#D4710E',
        'accent-soft': '#FEF3E2',
        emergency: '#DC2626',
        'emergency-soft': '#FEF2F2',
        success: '#16A34A',
        'text-primary': '#1E293B',
        'text-secondary': '#64748B',
        'text-on-dark': '#F8FAFC',
        border: '#E2E8F0',
        'badge-repair': '#EF4444',
        'badge-reroof': '#3B82F6',
        'badge-flat': '#8B5CF6',
        'badge-chimney': '#F59E0B',
        'badge-gutter': '#10B981',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'pulse-dot': 'pulseDot 2s infinite',
        'float-pulse': 'floatPulse 4s ease-in-out infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '0' },
        },
        floatPulse: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(220,38,38,0.4)' },
          '50%': { transform: 'scale(1.08)', boxShadow: '0 0 0 12px rgba(220,38,38,0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
