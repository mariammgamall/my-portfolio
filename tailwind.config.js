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
        dark: {
          bg: '#030712',      // Deep space black/navy
          card: '#0f172a',    // Slate 900
          border: 'rgba(255, 255, 255, 0.08)',
        },
        light: {
          bg: '#f8fafc',      // Soft slate 50
          card: '#ffffff',
          border: 'rgba(0, 0, 0, 0.06)',
        },
        accent: {
          indigo: '#6366f1',
          purple: '#a855f7',
          teal: '#06b6d4',
          blue: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s infinite ease-in-out',
        'float-slow': 'float-slow 8s infinite ease-in-out',
        'float-medium': 'float-medium 6s infinite ease-in-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%': { opacity: '0.8', filter: 'blur(60px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-5deg)' },
        }
      }
    },
  },
  plugins: [],
}
