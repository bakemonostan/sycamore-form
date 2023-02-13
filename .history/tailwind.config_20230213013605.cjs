/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('./src/assets/mobile.webp')",
        desktop: "url('/src/assets/desktop.webp')",
        test: "url('/src/assets/test.png')",
      },
    },
  },
  plugins: [],
};
