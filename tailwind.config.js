/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Noto Sans KR',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Apple SD Gothic Neo',
          'AppleGothic',
          'Malgun Gothic',
          'sans-serif',
        ],
      },
      colors: {
        primary: {
          DEFAULT: '#3C82F6', // 카카오/네이버 스타일 블루
          light: '#E8F1FF',
          dark: '#2563EB',
        },
        accent: {
          DEFAULT: '#00C73C', // 네이버 그린
          yellow: '#FEE500', // 카카오 옐로우
        },
        surface: {
          DEFAULT: '#F7F8FA', // 전체 배경
          card: '#FFFFFF',
          modal: '#FFFFFF',
        },
        border: {
          DEFAULT: '#E5E7EB',
        },
        text: {
          DEFAULT: '#222',
          subtle: '#666',
        },
      },
      boxShadow: {
        'soft': '0 2px 8px 0 rgba(60,130,246,0.06)',
        'card': '0 4px 16px 0 rgba(60,130,246,0.10)',
        'modal': '0 8px 32px 0 rgba(60,130,246,0.15)',
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },
      transitionProperty: {
        'spacing': 'margin, padding',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(40px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s cubic-bezier(0.4,0,0.2,1) both',
        'slide-up': 'slide-up 0.5s cubic-bezier(0.4,0,0.2,1) both',
      },
    },
  },
  plugins: [],
};
