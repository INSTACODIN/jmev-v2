/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0066cc",
        "primary-dark": "#0052a3",
        secondary: "#1a1a1a",
        accent: "#00d4ff",
        "gray-light": "#f5f5f5",
        "gray-medium": "#999999",
        "gray-dark": "#333333",
      },
    },
  },
  plugins: [],
};

