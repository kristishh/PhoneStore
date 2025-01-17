import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./app/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        shadowBlack:
          "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
      },
      backgroundImage: {
        customBlack:
          "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09));",
      },
    },
  },
  plugins: [],
};
export default config;
