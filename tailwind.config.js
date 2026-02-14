/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#748ffc',
          500: '#1B4D8E',
          600: '#15407A',
          700: '#0F3366',
          800: '#0A2652',
          900: '#051A3E',
          950: '#020E24'
        },
        gold: {
          50: '#FFF9E6',
          100: '#FFF0BF',
          200: '#FFE699',
          300: '#FFD966',
          400: '#FFCC33',
          500: '#C8A45E',
          600: '#B8943A',
          700: '#9A7B2F',
          800: '#7C6225',
          900: '#5E4A1B'
        },
        navy: {
          50: '#E8EDF5',
          100: '#C5D1E8',
          200: '#9FB3D9',
          300: '#7895CA',
          400: '#5A7EBF',
          500: '#1B3A5C',
          600: '#162F4D',
          700: '#11253E',
          800: '#0C1A2F',
          900: '#070F20'
        },
        cream: {
          50: '#FEFCF7',
          100: '#FDF8EE',
          200: '#FAF0DC',
          300: '#F5E6C4',
          400: '#EDDAAB',
          500: '#E5CE92'
        }
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['Pretendard', 'Inter', 'sans-serif'],
        serif: ['Noto Serif KR', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'aurora': 'aurora 15s ease infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200, 164, 94, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(200, 164, 94, 0.6)' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '50% 50%' },
          '25%': { backgroundPosition: '0% 100%' },
          '50%': { backgroundPosition: '100% 50%' },
          '75%': { backgroundPosition: '50% 0%' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(200, 164, 94, 0.3)' },
          '50%': { borderColor: 'rgba(200, 164, 94, 0.7)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #1B4D8E 0%, #0F3366 25%, #1B3A5C 50%, #0A2652 75%, #051A3E 100%)',
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'premium-lg': '0 35px 60px -12px rgba(0, 0, 0, 0.35)',
        'gold': '0 10px 40px -10px rgba(200, 164, 94, 0.3)',
        'gold-lg': '0 20px 60px -10px rgba(200, 164, 94, 0.4)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        'xs': '2px',
        '3xl': '64px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}