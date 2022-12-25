/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#343f52",
        orange: "#fab758",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        xxl: "1360px",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(180deg, #fff8ef, rgba(255, 255, 255, 0) 100%)",
      },
    },
  },
  plugins: [],
};
