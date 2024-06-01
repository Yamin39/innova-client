/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": "'DM Sans', sans-serif",
      },
      colors: {
        "primary-color": "#4DB3EC",
      },
    },
  },
  plugins: [require("daisyui")],
};
