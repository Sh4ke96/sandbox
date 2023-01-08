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
        gray: "#aab0bc",
        darkGray: "#3C4759",
        lightBlue: "#f1f5fd",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "966px",
        xl: "1200px",
        xxl: "1360px",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(180deg, #fff8ef, rgba(255, 255, 255, 0) 100%)",
        "gradient-dotted": "radial-gradient(#fab758 2px, transparent 2.5px)",
      },
      backgroundSize: {
        dotted: "0.75rem 0.75rem",
      },
      boxShadow: {
        base: "0 0 1.25rem rgba(30,34,40,.06)",
        card: "0 .25rem 1.75rem rgba(30,34,40,.07)",
      },
    },
  },
  plugins: [],
};
