/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#edeaff",
          DEFAULT: "#6a5eed",
          dark: "#040228",
        },
        secondary: "#ccc8e6",
        tertiary: {
          light: "#f5f7fb",
          DEFAULT: "#ffffff",
          dark: "#0b092e",
        },
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
