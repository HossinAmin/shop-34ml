/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ABEB",
        surface: "#FBFBFB",
        subtitle: "#C1C1C1",
        inputBg: "#F3F3F3",
        placeholder: "#1B1C1E",
        text: "#1B1C1E",
      },
    },
  },
  plugins: [],
};
