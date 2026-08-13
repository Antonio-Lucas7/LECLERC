/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFBF9',
          100: '#FAF7F2',
          200: '#F4EFE6',
          300: '#EBE3D5',
          400: '#DFD4C0',
        },
        nude: {
          50: '#F8F5F1',
          100: '#EFE8DE',
          200: '#E2D6C6',
          300: '#D5C4AF',
          400: '#C5AF97',
        },
        brand: {
          black: '#0E0E0E',
          charcoal: '#1A1817',
          dark: '#141211',
          brown: '#4A3728',
          cocoa: '#6E5341',
          caramel: '#C89665',
          marsala: '#581825',
          wine: '#6B2330',
          gold: '#C5A059',
          goldLight: '#E8D3A7',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Bodoni MT', 'Didot', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'Manrope', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        editorial: '0.18em',
        tightSerif: '-0.02em',
      },
      boxShadow: {
        subtle: '0 4px 30px rgba(0, 0, 0, 0.03)',
        card: '0 10px 40px -10px rgba(24, 22, 21, 0.05)',
        goldGlow: '0 0 20px rgba(197, 160, 89, 0.2)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.8s ease-out forwards',
        'slideUp': 'slideUp 0.8s ease-out forwards',
        'pulseGlow': 'pulseGlow 3s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
