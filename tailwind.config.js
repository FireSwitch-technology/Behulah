/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        background: "url('./assets/HeroImg.png')",
        Abtbg: "url('./assets/Rectangle .png')"
      }
    },
  },
  plugins: [],
}

