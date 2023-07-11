import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,css,html}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-hero-patterns"),
  ],
};

export default config;
