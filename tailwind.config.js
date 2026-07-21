/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1F35',
          light: '#14304F',
          dark: '#061322',
        },
        secondary: {
          DEFAULT: '#123B63',
          light: '#1B5287',
          dark: '#0B2642',
        },
        accent: {
          DEFAULT: '#00B8D9',
          light: '#33C9E3',
          dark: '#008BA4',
        },
        highlight: {
          DEFAULT: '#FFB703',
          light: '#FFC633',
          dark: '#CC9200',
        },
        bgLight: '#F8FAFC',
        textDark: '#111827',
        cardBg: '#FFFFFF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(11, 31, 53, 0.12)',
        'glass-hover': '0 20px 40px 0 rgba(0, 184, 217, 0.2)',
        'card-hover': '0 20px 30px -10px rgba(11, 31, 53, 0.15)',
        'glow-accent': '0 0 25px rgba(0, 184, 217, 0.4)',
        'glow-highlight': '0 0 25px rgba(255, 183, 3, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
