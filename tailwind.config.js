/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        surface: "#FBFBFB",
        subtitle: "#C1C1C1",
      },
    },
  },
  plugins: [],
};
