module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
        },
        secondary: {
          DEFAULT: '#F59E42',
          light: '#FFD8A8',
          dark: '#C97A2B',
        },
        accent: {
          DEFAULT: '#10B981',
          light: '#6EE7B7',
          dark: '#047857',
        },
        neutral: {
          DEFAULT: '#F3F4F6',
          dark: '#1F2937',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#111827',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FCA5A5',
          dark: '#991B1B',
        },
        info: {
          DEFAULT: '#0EA5E9',
          light: '#38BDF8',
          dark: '#0369A1',
        },
        success: {
          DEFAULT: '#22C55E',
          light: '#86EFAC',
          dark: '#166534',
        },
        warning: {
          DEFAULT: '#FACC15',
          light: '#FEF08A',
          dark: '#A16207',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'Montserrat', 'sans-serif'],
        display: ['Montserrat', 'Pretendard', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
      },
      boxShadow: {
        premium: '0 4px 24px 0 rgba(59, 130, 246, 0.12)',
        card: '0 2px 8px 0 rgba(31, 41, 55, 0.08)',
        glow: '0 0 8px 2px rgba(59,130,246,0.15)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      transitionProperty: {
        premium: 'background, color, box-shadow, border-radius',
      },
      animation: {
        fadein: 'fadein 0.5s ease-in',
        bounce: 'bounce 1s infinite',
        shimmer: 'shimmer 1.5s infinite linear',
        fadeIn: 'fadeIn 0.5s ease-in',
        fadeOut: 'fadeOut 0.5s ease-out',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-700px 0' },
          '100%': { backgroundPosition: '700px 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
