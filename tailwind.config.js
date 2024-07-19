/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
        },
        blue: {
          DEFAULT: "#3570FF",
          dark: "#112437",
          hover: "#1750DA",
        },
        black: "#000814",
        gray: {
          light: "#EBECF2",
          text: "#4E4D4D",
        },
        gold: "#FFD700",
        green: "#38FF63",
      },
      fontFamily: {
        urbanist: "var(--primary-font)",
      },
      boxShadow: {
        '600': "0px 16px 32px -8px rgba(12, 12, 13, 0.4)",
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      backgroundImage: {
        'line': "url('/assets/img/vector/line-bg.png')",
      }
    },
  },
  plugins: [],
};
