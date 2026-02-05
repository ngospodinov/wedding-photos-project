export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {
      colors: {
        pink: "#FFC1CC",
        card: "#EAF2F8",
        button: "#FFF4D6",
        text: "#1A1405",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 6px 0 rgba(0,0,0,0.9)",
      },
    },
  },
  plugins: [],
};
