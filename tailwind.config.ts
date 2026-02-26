import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0f1c2e',
        charcoal: '#1f2937',
        accent: '#f97316'
      }
    }
  },
  plugins: []
};

export default config;
