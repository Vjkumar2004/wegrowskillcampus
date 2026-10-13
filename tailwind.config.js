/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B3B8F",
          orange: "#F7820E",
          orangeHover: "#E06F00",
          bodyText: "#3B4A66",
          navLink: "#1E3A6E",
          divider: "#E3E8F0",
          bg: "#F6F8FC",
          pageBg: "#F6F8FC",
          white: "#FFFFFF",
          blue: "#0B3B8F",
          textPrimary: "#0B3B8F",
          textSecondary: "#3B4A66",
          border: "#E3E8F0",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
        sans: ["var(--font-poppins)", "var(--font-montserrat)", "sans-serif"],
      },
      boxShadow: {
        navbar: "0 2px 15px rgba(11, 59, 143, 0.06)",
        subtle: "0 8px 24px rgba(11, 59, 143, 0.06)",
        card: "0 10px 30px rgba(11, 59, 143, 0.10)",
        elevated: "0 15px 35px rgba(11, 59, 143, 0.12)",
      },
      maxWidth: {
        "hero-container": "1440px",
      },
    },
  },
  plugins: [],
};
