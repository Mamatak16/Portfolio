/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#05070E',
          card: 'rgba(13, 17, 28, 0.7)',
          hover: 'rgba(21, 29, 46, 0.8)',
          navy: '#0A0E1A',
        },
        cyan: {
          accent: '#00F0FF',
          glow: '#00D8F6',
        },
        electric: {
          blue: '#2563EB',
          cyan: '#06B6D4',
        },
        purple: {
          accent: '#A855F7',
          glow: '#9333EA',
          dark: '#3B0764',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(0, 240, 255, 0.25)',
        'purple-glow': '0 0 25px -5px rgba(168, 85, 247, 0.25)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.4))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}
