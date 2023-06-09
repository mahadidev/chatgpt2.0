/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pageInterface/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-vert-light-gradient":
          "linear-gradient(180deg,hsla(0,0%,100%,0) 13.94%,#fff 54.73%)",
      },
      colors: {
        "conversation-bg": "#f7f7f8",
        primary: "#19c37d",
        "vert-light-gradient":
          "linear-gradient(180deg,hsla(0,0%,100%,0) 13.94%,#fff 54.73%)",
        gray: {
          50: "#E9E9ED",
          100: "#D5D5DD",
          200: "#A8A8B8",
          300: "#7E7E96",
          400: "#57576B",
          500: "#353541",
          600: "#292933",
          700: "#202027",
          800: "#151519",
          900: "#0B0B0E",
          950: "#050506",
        },
      },
      container: {
        padding: "2rem",
        center: true,
      },
      boxShadow: {
        xs: "0 0 15px rgba(0,0,0,.1)",
      },
    },
  },
  plugins: [],
};
