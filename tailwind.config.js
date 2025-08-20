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
    },
  },
  plugins: [],
};
