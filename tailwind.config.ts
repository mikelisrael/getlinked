import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBlack: "#140d27",
        themeBlackSecondary: "#100b20",
        primaryPurple: "#d434fe",
        secondaryPurple: "#FF26B9",
        tertiaryPurple: "#9437ff",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
